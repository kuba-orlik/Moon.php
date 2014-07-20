<?

include_once DIR_CLASSES . "payments.php";
include_once DIR_CLASSES . "users.php";

Users::redirectIfNotLoggedIn();

class PaymentsController{
	
	public static function getAction($url_elements, $parameters){
		$data = array();
		if(!isset($url_elements[2])){
			//query
			$all = Payments::getForUser(Users::getUser()->getAttr("id"));
			foreach($all AS $payment){
				$data[]=$payment->public_getAttributes();
			}
		}else{
			switch($url_elements[2]){
				default:
					$payment = new Payment($url_elements[2]);
					$data = $payment->public_getAttributes();
					break;
			}
		}
		return $data;
	}
	
}
