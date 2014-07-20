<?

<?

require_once "../classes/exercises.php";
require_once "../classes/users.php";

class ExercisesController{
	
	public function getAction($url_elements, $parameters){
		$data = array();
		if(isset($url_elements[2])){
			$set_type = new Exercise($url_elements[2]);
			if(!$exercise->isAccessibleBy(Users::getCurrentUser())){
				header('HTTP/1.0 403 Forbidden');
				die();
			}
			$data = $exercise->public_getAttributes();
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
		$user = Users::getUser();
		return $data;		
	}
}