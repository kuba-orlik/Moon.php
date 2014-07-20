<?

require_once "../classes/users.php";

require_once "../classes/muscleParts.php";

//login not required

class Streak_statusController{
	
	public function getAction($url_elements, $parameters){
		$data = array();
		$user = Users::getCurrentUser();
		$data = $user->getStreakStatus();
		return $data;
		
	}
	
	public function postAction($url_elements, $parameters){
		$user = Users::getUser();
		return $data;		
	}
}
