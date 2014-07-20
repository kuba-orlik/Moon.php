<?

require_once "../classes/users.php";

require_once "../classes/muscleParts.php";

//login not required

class ScoreboardController{
	
	public function getAction($url_elements, $parameters){
		$data = array();
		$user = Users::getCurrentUser();
		if(isset($parameters['amount'])){
			$amount = $parameters['amount'];
		}else{
			$amount = 30;
		}
		if(isset($parameters['offset'])){
			$offset = $parameters['offset'];
		}else{
			$offset = 0;
		}
		$data = $user->getScores($offset, $amount);
		return $data;
		
	}
	
	public function postAction($url_elements, $parameters){
		$user = Users::getUser();
		return $data;		
	}
}
