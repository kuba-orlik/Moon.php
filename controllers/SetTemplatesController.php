<?

require_once "../classes/setTemplates.php";
require_once "../classes/users.php";

class setTemplatesController{
	
	public function getAction($url_elements, $parameters){
		$data = array();
		if(isset($url_elements[2])){
			$template = new SetTemplate($url_elements[2]);
			if(!$template->isAccessibleBy(Users::getCurrentUser())){
				header('HTTP/1.0 403 Forbidden');
				die();
			}
			$data = $template->public_getAttributes();
		}
		return $data;
		
	}
	
	public function postAction($url_elements, $parameters){
		dd($parameters);
		$user = Users::getCurrentUser();
		$part = SetTemplates::put($parameters);
		$data = $part->getAttributes();
		return $data;		
	}
}