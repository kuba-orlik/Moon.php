<?

require_once "../classes/points.php";
require_once "../classes/users.php";


class pointsController{
	
	public function getAction($url_elements, $parameters){
		$user = Users::getCurrentUser();	
		$user->recalculatePoints();
		$data = array();
		if(!isset($parameters['count'])){
			$count = 10;
		}else{
			$count = (int)$parameters['count'];
		}
		$user_id = $user->getAttr('id');
		$query = "SELECT *, date(`date`) AS just_date, exercises.name AS exercise_name, log_entry.id AS log_id, exercises.id AS  exercse_id, log_entry_custom.name AS custom_name FROM `points` LEFT JOIN log_entry ON DATE(points.date) = DATE(log_entry.begin_time) LEFT JOIN log_entry_regular ON log_entry.rel_id = log_entry_regular.id LEFT JOIN exercises ON exercise_id=exercises.id LEFT JOIN log_entry_custom ON log_entry_custom.id = log_entry.rel_id AND log_entry.type='custom' WHERE points.user_id=? AND (log_entry.user_id=? OR log_entry.user_id IS NULL)  ORDER BY date DESC  LIMIT 0, $count";
		$rows = Database::prepareAndExecute($query, array($user_id, $user_id));
		$data = array();
		$i = -1;
		$map = array();
		foreach($rows AS $row){
			$date = $row['just_date'];
			if(!isset($map[$date])){
				$i++;
				$map[$date] = $i;
				$data[$i]=array();
				$data[$i]['points'] = $row['points'];
				$data[$i]['combo'] = $row['combo'];
				$data[$i]['logs'] = array();
				$data[$i]['date'] = $date;
			}
			if($row['type']!=null && $row['type']!='NULL'){
				if($row['type']=='regular'){
					$data[$i]['logs'][]=array(
						'type'=>'regular',
						'exercise_name'=>$row['exercise_name'],
						'exercise_id'=>$row['exercise_id'],
						'id'=>$row['log_id']
					);

				}
				if($row['type']=='custom'){
					$data[$i]['logs'][]=array(
						'type'=>'custom',
						'exercise_name'=>$row['custom_name'],
						'id'=>$row['log_id']
					);

				}
			}
		}
		return $data;
		
	}
	
	public function postAction($url_elements, $parameters){
		$user = Users::getUser();
		return $data;		
	}
}