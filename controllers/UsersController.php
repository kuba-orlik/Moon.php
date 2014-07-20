<?

require_once "../classes/users.php";

//login not required

class UsersController{
	
	public function getAction($url_elements, $parameters){
		$data = array();
		if(isset($url_elements[2])){
			switch($url_elements[2]){
				case "me":
					$user = Users::getCurrentUser();
					$data = $user->public_getAttributes();
					break;
			}
		}
		return $data;
		
	}
	
	public function postAction($url_elements, $parameters){
		$user = Users::getUser();
		return $data;		
	}
}
