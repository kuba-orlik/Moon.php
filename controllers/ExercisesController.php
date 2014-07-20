<?

require_once "../classes/exercises.php";
require_once "../classes/users.php";
require_once "../classes/logEntries.php";

class ExercisesController{
	
	public function getAction($url_elements, $parameters){
		$data = array();
		if(isset($url_elements[2])){
			$exercise = new Exercise($url_elements[2]);
			if(!$exercise->isAccessibleBy(Users::getCurrentUser())){
				header('HTTP/1.0 403 Forbidden');
				die("not allowed");
			}
			if(isset($url_elements[3])){
				switch($url_elements[3]){
					case "log":
						if(!isset($parameters['count'])){
							$count = 99999;
						}else{
							$count = $parameters['count'];
						}
						$logs = $exercise->getLogEntries($count);
						foreach($logs AS $log){
							$row=$log->public_getAttributes();
							$results = $log->getResults();
							$res_array = array();
							foreach($results AS $result){
								$res_array[$result->getSetTemplate()->getAttr('orderL')] = $result->getAttr('result');
							}
							$row['result'] = $res_array;
							$data[]=$row;
						}
						break;
					default:
						$data = $exercise->public_getAttributes();
						break;
				}
			}else{
				$data = $exercise->public_getAttributes();
			}
		}else{
			$user = Users::getCurrentUser();
			$exercises = $user->getExercises();
			foreach($exercises AS $exercise){
				$data[]=$exercise->public_getAttributes();	
			}
		}
		return $data;
		
	}
	
	public function postAction($url_elements, $parameters){
		$required = array(
			"muscle_part_id",
			"name"
		);
		foreach($required AS $attr){
			if(!isset($parameters[$attr])){
				die("$attr not specified");
			}
		}
		$user = Users::getCurrentUser();
		$user_id = $user->getAttr('id');
		$parameters['user_id'] = $user_id;
		$exercise = Exercises::put($parameters);
		$exercise->set(array('user_id'=>$user_id));
		$data = $exercise->public_getAttributes();
		return $data;		
	}
}