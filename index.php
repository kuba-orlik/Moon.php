<?
require_once "config.php";
include_once "classes/google_login.php";
include_once "classes/users.php";


$state = Users::getCurrentSessionState();

$google_login_url = google_login::getCodeUrl();



switch($state){
	case "session_active":
		include "home.php";
		break;
	case "correct_token":
		Users::getCurrentUser()->login();
		include "home.php";
		break;
	case "incorrect_token":
		include "welcome.php";
		break;
	case "token not set":
		include "welcome.php";
		break;
	default:
		include "welcome.php";
		break;
}

?>