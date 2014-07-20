<?

require_once "../classes/exercises.php";
require_once "../classes/users.php";
require_once "../classes/muscleParts.php";

class MusclePartsController{
	
	public function getAction($url_elements, $parameters){
		$data = array();
		$user = Users::getCurrentUser();
		if(isset($url_elements[2])){
			$muscle_part = new MusclePart($url_elements[2]);
			if(!$muscle_part->isAccessibleBy($user)){
				die();
			}
			$data = $muscle_part->public_getAttributes();
		}else{
			$user = Users::getCurrentUser();
			$parts = $user->getMuscleParts();
			foreach($parts AS $part){
				$data[]=$part->public_getAttributes();	
			}
		}
		return $data;
		
	}
	
	public function postAction($url_elements, $parameters){
		$user = Users::getCurrentUser();
		$part = MuscleParts::put($parameters);
		$part->set(array('user_id'=>$user->getAttr('id')));
		$data = $part->getAttributes();
		return $data;		
	}
}