<?

require_once "../classes/users.php";

require_once "../classes/muscleParts.php";

//login not required

class RecomController{
	
	public function getAction($url_elements, $parameters){
		$data = array();
		$user = Users::getCurrentUser();
		$recoms = $user->getRecommendations();
		foreach($recoms AS $recom_type=>$exercise){
			$new_row = array();
			$new_row['type'] = $recom_type;
			$exercise_attributes = $exercise->public_getAttributes();
			$exercise_attributes['results'] = $exercise->getResults('sum', false);
			$muscle_part = new MusclePart($exercise_attributes['muscle_part_id']);
			$exercise_attributes['muscle_part_name'] = $muscle_part->getAttr('name');
			$new_row['exercise'] = $exercise_attributes;
			$data[]=$new_row;
		}
		return $data;
		
	}
	
	public function postAction($url_elements, $parameters){
		$user = Users::getUser();
		return $data;		
	}
}
