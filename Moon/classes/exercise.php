<?

Moon::require_class("setTemplate");
Moon::require_class("musclePart");
Moon::require_class("logEntry");

class exercisesCollection extends databaseObjectColection {
	protected static $table_name = "exercises";
	protected static $class_name = "Exercise";
	protected static $table_filtered = false;

	public static function getByUserID($user_id){
		$user_id = (int)$user_id;
		$rows = Database::execute("select * from exercises WHERE user_id=$user_id");
		$ret = array();
		foreach($rows AS $row){
			$ret[] = new Exercise($row);
		}
		return $ret;
	}

	public static function getByMusclePart($muscle_part){
		if($muscle_part instanceof MusclePart){
			$muscle_part_id = $muscle_part->getAttr('id');
		}else{
			$muscle_part_id = $muscle_part;
		}
		$rows = Database::prepareAndExecute("SELECT * FROM exercises WHERE muscle_part_id=?", array($muscle_part_id));
		$ret = array();
		foreach($rows AS $row){
			$ret[] = new Exercise($row);
		}
		return $ret;
	}
}

class Exercise extends databaseObject {

	public static $machine_name = "exercises"; //non-plural by design

	protected static $attributes = array(
		"int muscle_part_id s foreign:muscle_part:id,length:20",
		"int user_id s foreign:user:id",
		"string name s length:40",
		"bool paused s",
		"bool graphable s",
		"bool outdoor s",
		"bool recom s",
		"array(int) results c+",
		"string duration_stack c+",
		"int max_score c+",
		"int number c+"
	);

	private function on_load(){

	}

	/*public function __construct($id) {
		$this -> table_name = "exercises";
		$this -> gettable = array("id", "muscle_part_id", "name", "user_id", "paused", "graphable", "outdoor", "recom", "results_json", "duration_stack", "max_score");
		$this -> settable = array("muscle_part_id", "name", "user_id", "paused", "graphable", "outdoor", "recom", "results_json", "duration_stack", "max_score");
		$this -> public_gettable = array("id", "muscle_part_id", "name", "user_id", "paused", "graphable", "outdoor", "recom", "results_json");
		$this -> public_settable = array("muscle_part_id", "name", "paused", "graphable", "outdoor", "recom");
		$this -> load($id);
	}*/

	public function refreshCachedData(){
		$this->rebuildDurationStack();
		$this->rebuildResultsJSON();
		$this->refreshMaxScore();
	}

	public function getAverageRepDuration(){
		$data = json_decode($this->duration_stack);
		$total_reps = 0;
		$total_duration =0;
		foreach($data AS $row){
			$total_reps+=$row->reps;
			$total_duration+=$row->duration;
		}
		return $total_reps==0? 1 : $total_duration/$total_reps;
	}

	public function durationStackPush($duration, $reps){
		$data = json_decode($this->duration_stack);
		array_splice($data, 0, 1);
		$data[]=array(
			"duration"=>$duration,
			"reps"=>$reps
		);
		$this->setAttr("duration_stack", json_encode($data));
	}

	protected function getDuration_stack(){
		$query = "SELECT duration_s, sum(result) AS sum FROM log_entry LEFT JOIN log_entry_regular ON log_entry_regular.id=log_entry.rel_id AND log_entry.type='regular' LEFT JOIN sets ON log_entry_regular.id=sets.log_entry_id WHERE log_entry_regular.exercise_id=? AND log_entry.id GROUP BY log_entry.id ORDER BY begin_time DESC LIMIT 0, 3";
		$rows = Database::prepareAndExecute($query, array($this->id));
		$data = array();
		foreach($rows AS $row){
			$new_row = array();
			$new_row["duration"] = $row["duration_s"];
			$new_row["reps"] = $row["sum"];
			$data[]=$new_row;
		}
		return $data;
	}

	public function getMultiplier(){
		$results = json_decode($this->results_json);
		$count = count($results);
		$multiplier = -1;
		if($count<=1){
			$multiplier = 1.01;
		}else{
			$i = 0;
			while($count-$i>=1 && $multiplier<=1 && $i<=1){
				if($results[$count-1-$i-1]==0){
					$i++;
					continue;
				}
				$multiplier = $results[$count-1-$i]/$results[$count-1-$i-1];
				$i++;
				//echo $multiplier
			}
		}
		if($multiplier<=1){
			$multiplier = 1.01;
		}
		return $multiplier;
	}

	public function isAccessibleBy($user){
		if($user->getAttr("id")==$this->user_id){
			return true;
		}else{
			return false;	
		}
	}

	public function public_getAttributes(){
		$ret = parent::public_getAttributes();
		$setTemplates = $this->getSetTemplates();
		$ret['setTemplates'] = array();
		foreach($setTemplates AS $setTemplate){
			$order = $setTemplate->getAttr('orderL');
			$ret['setTemplates'][$order-1] = $setTemplate->public_getAttributes();
		}
		$ret['days_since_last_exercise'] = $this->daysSinceLastSession();
		$ret['type_name'] = $this->getMusclePart()->getAttr('name');
		//$ret['results']=array();
		$ret['results'] = $this->getResults('sum', false);
		$ret['max_score'] = $this->getMaxScore();
		$ret['total_progress'] = $this->getTotalProgress();
		$ret['multiplier'] = $this->getMultiplier();
		$ret["estimated_duration"] = $this->getTimeEstimate();
		$ret["recommendations"] = $this->getRecom();
		return $ret;
	}

	private function getTotalProgress(){
		$json = $this->results_json;
		$results = json_decode($json);
		if(count($results)<3){
			if(count($results)<2){
				return 0;
			}else if(count($results==2)){
				return $results[1]/$results[0]-1;
			}else{
				return $results[2]/(($results[0]+$results[1])/2) -1;
			}
		}else{
			$begin_avg = ($results[0]+$results[1])/2;
			$end_avg = ($results[count($results)-1]+$results[count($results)-2])/2;
			$avg_avg = $end_avg/$begin_avg;
			return $avg_avg -1 ;
		}
	}

	protected function getMax_score(){
		$query = "SELECT MAX( result ) FROM log_entry LEFT JOIN log_entry_regular ON rel_id = log_entry_regular.id LEFT JOIN sets ON log_entry_regular.id = sets.log_entry_id WHERE TYPE =  'regular' AND exercise_id =?";
		$rows = Database::prepareAndExecute($query, array($this->id));
		return $rows[0][0];
	}

	private function getSetTemplates(){
		return SetTemplates::getForExercise($this);
	}

	public function getLogEntries($count){
		return LogEntries::getByExercise($this, $count);
	}

	public function getLatestLogEntry(){
		$arr =  LogEntries::getByExercise($this, 1, "DESC");
		if(count($arr)==0){
			return null;
		}else{
			return $arr[0];
		}
	}

	public function daysSinceLastSession(){
		$id = $this->id;
		$query = "SELECT DATEDIFF( CURDATE( ) , (SELECT DATE( begin_time ) FROM log_entry LEFT JOIN log_entry_regular ON rel_id = log_entry_regular.id WHERE log_entry.type =  'regular' AND exercise_id =? ORDER BY begin_time DESC LIMIT 0 , 1 )) AS diff";
		$rows = Database::prepareAndExecute($query, array($this->id));
		if(count($rows)==0){
			return null;
		}else{
			return $rows[0]['diff'];
		}
	}

	protected function getResults($type='sum', $with_dates = false){
		$self_id = $this->id;
		$query = "SELECT sum(result) AS `sum` FROM log_entry_regular LEFT JOIN sets ON log_entry_id=log_entry_regular.id left join log_entry ON log_entry_regular.id=log_entry.rel_id WHERE exercise_id=?  AND log_entry.id IS NOT NULL AND log_entry.type='regular' GROUP BY log_entry_id ORDER BY UNIX_TIMESTAMP(begin_time) ASC";
		$rows = Database::prepareAndExecute($query, array($self_id));
		$ret = array();
		foreach($rows AS $row){
			//echo $row['sum'];
			$ret[]=$row['sum'];
		}			
		//$this->set(array('results_json'=>json_encode($ret)));		
		return $ret;						
	}

	public function getRecom(){
		$multiplier = $this->getMultiplier();
		$results = $this->getResults();
		if(count($results)==0){
			return null;
		}
		$last_reps_total = array_pop($results);

		$reps_to_add = ceil($last_reps_total*($multiplier-1));

		$last_log_entry = $this->getLatestLogEntry();
		$last_results = $last_log_entry->getResults();
		$results_array = array();
		foreach($last_results aS $result){
			$results_array[]=$result->getAttr("result");
		}

		for($i=1; $i<=$reps_to_add; $i++){
			$min_value = PHP_INT_MAX;
			$min_index = null;
			foreach($results_array AS $index=>$value){
				if($value<$min_value){
					$min_value=$value;
					$min_index=$index;
				}
			}
			$results_array[$min_index]+=1;
		}

		return $results_array;
	}

	public function getMusclePart(){
		return new MusclePart($this->muscle_part_id);
	}
	
	public function rebuildResultsJSON(){
		$this->results_json = null;
		$this->getResults();
	}

	public function getTimeEstimate(){
		/*$query = "SELECT duration_s, sum(result) AS sum FROM log_entry LEFT JOIN log_entry_regular ON log_entry_regular.id=log_entry.rel_id AND log_entry.type='regular' LEFT JOIN sets ON log_entry_regular.id=sets.log_entry_id WHERE log_entry_regular.exercise_id=? AND log_entry.id GROUP BY log_entry.id ORDER BY begin_time DESC LIMIT 0, 3";
		$rows = Database::prepareAndExecute($query, array($this->id));
		if(count($rows)==0){
			return -1;
		}else{
			$sum_reps=0;
			$sum_s = 0;
			foreach($rows AS $row){
				//var_dump($row);
				$sum_reps+=$row["sum"];
				$sum_s+=$row["duration_s"];
			}
		}
		$avg_rep_duration = $sum_reps==0?  0: $sum_s/$sum_reps ;*/
		$avg_rep_duration = $this->getAverageRepDuration();
		if($avg_rep_duration==0){
			$avg_rep_duration=1;
		}
//		echo "average rep duration: $avg_rep_duration <br>";
		$multiplier = $this->getMultiplier();
//		echo "multiplier: $multiplier <br>";
		$results = $this->getResults("sum", false);
		$result_amount = count($results);
		if($result_amount==0){
			return 20*60;
		}else{
			$last_reps_amount = $results[$result_amount-1];
			$set_templates = $this->getSetTemplates();
			$set_templates_amount = count($set_templates);
			if($set_templates_amount==0){
				return null;
			}
			$estimated_reps = ceil($last_reps_amount/$set_templates_amount*$multiplier)*$set_templates_amount;
	//		echo "estimated_reps: $estimated_reps <br>";
			$estimated_total_rep_time = $estimated_reps*$avg_rep_duration;
	//		echo $estimated_total_rep_time . "<br>";
			$amount_of_breaks = $set_templates_amount-1;
			$break_duration = 300;//hard-coded for now, configurable in the future
			$time_spent_on_breaks = $amount_of_breaks*$break_duration;
			$total_exercise_time = $estimated_total_rep_time + $time_spent_on_breaks;
			return floor($total_exercise_time);			
		}
	}

	protected function getNumber(){
		return 3;
	}

}
