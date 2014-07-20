<?

require_once "../classes/logEntries.php";
require_once "../classes/users.php";


class logController{
	
	public function getAction($url_elements, $parameters){
		$user = Users::getCurrentUser();	
		$data = array();
		if(!isset($parameters['count'])){
			$count = 10;
		}else{
			$count = $parameters['count'];
		}
		if(isset($url_elements[2])){
			$log_entry = LogEntries::getByID($url_elements[2]);
			if(!$log_entry->isAccessibleBy($user)){
				die();
			}
			$data = $log_entry->public_getAttributes();
		}else{
			$log_entries = $user->getLogEntries($count);
			foreach($log_entries AS $log_entry){
				$data[] = $log_entry->public_getAttributes();
			}
		}
		return $data;
		
	}
	
	public function postAction($url_elements, $parameters){
		//$user = Users::getCurrentUser();
		$required_parameters = array(
			"begin_time",
			"duration_s",
			"type",
			'result'
		);
		if(!isset($parameters['type'])){
			die('type not set');
		}
		$type = $parameters['type'];
		switch($type){
			case 'custom':
				$required_parameters[]="name";
				$required_parameters[]="muscle_part_id";
				break;
			case 'regular':
				$required_parameters[]="exercise_id";
				break;
			default:
				die("unknown type $type");
				break;
		}
		foreach($required_parameters AS $req){
			if(!isset($parameters[$req])){
				die("$req not set");
			}
		}
		$data = LogEntries::put($parameters);
		return $data;		
	}
}