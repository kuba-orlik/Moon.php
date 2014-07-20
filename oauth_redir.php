<?	
require_once "config.php";
require_once "classes/google_login.php";
require_once "classes/users.php";

if(isset($_GET["code"])){
	//set POST variables
	$data = google_login::getUserData($_GET["code"]);
	//var_dump($data);
	Users::processGoogleUserData($data);
	//var_dump($data);
	header('Location: /');
	//$user = Users::getCurrentUser();
	//var_dump($user);
}else{
	echo "code not set";
}