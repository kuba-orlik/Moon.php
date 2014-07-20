<?

require_once DIR_CLASSES."database.php";

require_once DIR_CLASSES."users.php";

class Points{

	public static function getForUserAndDate($user, $date_str){
		if($user instanceof User){
			$user_id = $user->getAttr('id');
		}else{
			$user_id = $user;
		}
		$query = "SELECT points, combo FROM points  WHERE user_id=? AND `date`=?";
		$rows = Database::prepareAndExecute($query, array($user_id, $date_str));
		if(count($rows)==0){
			$query = "INSERT INTO points (user_id, `date`) VALUES (?, ?)";
			Database::prepareAndExecute($query, array($user_id, $date_str));
		}

	}

	public static function cmpDates($date_str1, $date_str2){
		$datetime1 = new DateTime($date_str1);
		$datetime2 = new DateTime($date_str2);
		return (int)$datetime1->diff($datetime2)->format('%r%a');
	}

	private static function today(){
		$date = date('Y-m-d', time());
		return $date;
	}

	public static function recalculateForUser($user){
		if($user instanceof User){
			//
		}else{
			$user = new User($user);
		}
		$user_id = $user->getAttr('id');
		$date_created = $user->getAttr('created');
		$negative_combo_from = $user->getAttr('negative_combo_from');
		$points_cached_until = $user->getAttr('points_cached_until');
		$today = self::today();
		$zero_first_row_considered = false;
		if(self::cmpDates($date_created, $points_cached_until)>0){
			$working_date = $points_cached_until;
		}else{
			$working_date = $date_created;
			$zero_first_row_considered = true;
		}
		$i = 0;
		$current_point;
		$previous_point = null;
		while(self::cmpDates($working_date, $today)>0){
			$current_point = new Point($user_id, $working_date);
			$exercise_count = $current_point->exercisesCount();
			$before_negative_combo = self::cmpDates($working_date, $negative_combo_from)>0;
			if($i==0 && $zero_first_row_considered){
				if($before_negative_combo){
					if($exercise_count>0){
						$points = $exercise_count;
						$combo = 1;
					}
				}else{
					if($exercise_count<=0){
						$points = -1;
						$combo = 0;
					}
				}
				$current_point->set($points, $combo);
			}else{
				//$previous_point - $current_point->getPrevDay();
				if($previous_point==null){
					$previous_point = $current_point->getPrevDay();					
				}
				$previous_result = $previous_point->get();
				$exercise_count = $current_point->exercisesCount();
				if($exercise_count>0){
					$points = $previous_result['points']+$exercise_count;
					$combo = $previous_result['combo']+1;
				}else{
					if($before_negative_combo){
						$points = 0;
						$combo = 0;
					}else{
						if($previous_result['points']>0){
							$points = 0;
							$combo=0;
						}else{
							$points = $previous_result['points']-1;
							$combo = 0;
						}
					}
				}	
				$current_point->set($points, $combo);			
			}
			$previous_point = $current_point;
			$current_point = $current_point->getNextDay();
			$working_date = $current_point->getDateStr();
			$i++;
		}
		$todayPoints = new Point($user_id, $today);
		$previous_point = $todayPoints->getPrevDay();
		$today_exercice_count = $todayPoints->exercisesCount();
		if($today_exercice_count==0){
			$todayPoints->set($previous_point->get()['points'], $previous_point->get()['combo']);
		}else{
			$todayPoints->set($previous_point->get()['points']+$today_exercice_count, $previous_point->get()['combo']+1);
		}
		$user->set(array('points_cached_until'=>$previous_point->getDateStr()));
	}

}

class Point{

	private $loaded=false;

	private $user_id;

	private $date_str;

	public function __construct($user_id, $date_str){
		$this->user_id = $user_id;
		$this->date_str = $date_str;
	}

	private function load(){
		$query = "SELECT points, combo FROM points  WHERE user_id=? AND `date`=?";
		$rows = Database::prepareAndExecute($query, array($this->user_id, $this->date_str));
		//if(count($rows)==0){
			$query = "INSERT INTO points (user_id, `date`) VALUES (?, ?) ON DUPLICATE KEY UPDATE user_id=?, `date`=?";
			Database::prepareAndExecute($query, array($this->user_id, $this->date_str, $this->user_id, $this->date_str));
		//}
		$this->set($rows[0]['points'], $rows[0]['combo']);
	}

	public function set($points, $combo){
		$query = "INSERT INTO points VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE points=?, combo=?";
		$params = array($this->user_id, $this->date_str, $points, $combo, $points, $combo);
		Database::prepareAndExecute($query, $params);

		$this->points = $points;
		$this->combo = $combo;

		$this->loaded = true;
	}

	public function get(){
		if(!$loaded){
			$this->load();
		}
		$ret = array(
			'points'=>$this->points,
			'combo' =>$this->combo
		);
		return $ret;
	}

	private function shiftDay($date_str, $howMany){
		$shift = $howMany;
		if($shift>=0){
			$shift = "+" . $shift;
		}
		$ret = date('Y-m-d',strtotime($date_str . "$shift days"));
		return $ret;
	}

	public function getNextDay(){
		$tomorrow = $this->shiftDay($this->date_str, 1);
		return new Point($this->user_id, $tomorrow);
	}

	public function getPrevDay(){
		$yesterday = $this->shiftDay($this->date_str, -1);
		return new Point($this->user_id, $yesterday);	
	}

	public  function exercisesCount(){
		$query = "SELECT COUNT( id ) FROM (SELECT id, begin_time FROM log_entry WHERE user_id =? ) d GROUP BY begin_time HAVING DATE(begin_time)=?";
		$rows = Database::prepareAndExecute($query, array($this->user_id, $this->date_str ));
		return count($rows);	
	}

	public function getDateStr(){
		return $this->date_str;
	}

}