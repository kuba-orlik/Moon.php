<?

include_once DIR_CLASSES . "databaseObject.php";

class Exercises extends databaseObjectColection {
	protected static $table_name = "workouts";
	protected static $class_name = "User";
	protected static $table_filtered = false;

	public static function processGoogleUserData($userData){
		$exists = self::googleUserExists($userData->id);
		if(!$exists){
			self::createUserFromGoogleData($userData);
		}else{
			self::loginUserFromGoogleData($userData);
		}
	}

	public static function googleUserExists($google_user_id){
		$db = Database::connectPDO();
		$query = "SELECT * FROM users WHERE google_id=?";
		$prp = $db->prepare($query);
		$prp->execute(array($userData->id));
		$rows = $prp->fetchAll();
		$count =  count($rows);
		return $count>0;
	}

	public static function createUserFromGoogleData($data){
		$user = Users::create();
		$today = date('Y-m-d');
		$attr = array(
			"google_id"	=> $data->id,
			"username"	=> "temp",
			"created"	=> $today,
			"negative_combo_from"	=> $today,
			"name" 		=> $data->given_name,
			"surname"	=> $data->family_name,
			"timer"		=> DEFAULT_TIMER,
			"email" 	=> $data->email
		);
		$user->set($attr);
		//echo $data['picture'];
		$user->setProfilePic($data->picture);
		$user->login();
		return $user;
	}

	public static function isCorrectLoginToken($token){
		$db = Database::connectPDO();
		$query = "SELECT login_token FROM users WHERE login_token=?";
		$prp = $db->prepare($query);
		$prp->execute(array($token));
		$count = count($prp->fetchAll());
		return $count!=0;
	}

	public static function getCurrentSessionState(){
		session_start();
		if(isset($_SESSION["user_id"])){
			return "session_active";
		}
		if(isset($_COOKIE["login_token"])){
			echo "token in cookie = ". $_COOKIE["login_token"];
			if(self::isCorrectLoginToken($_COOKIE["login_token"])){
				return "correct_token";
			}else{
				return "incorrect_token";
			}
		}else{
			return "token not set";
		}
	}

	public static function getUserFromToken($token){
		$db = Database::connectPDO();
		$query = "SELECT user_id FROM users WHERE login_token=?";
		$prp = $db->prepare($query);
		$prp->execute(array($token));
		$rows = $prp->fetchAll();
		return new User($rows[0]->user_id);
	}

	public static function getCurrentUser(){
		$state = self::getCurrentSessionState();
		switch($state){
			case "session_active":
				$user = new User($_SESSION["user_id"]);
				break;
			case "correct_token":
				$user = self::getUserFromToken($_COOKIE["login_token"]);
				$user->login();
				break;
			default:
				$user = null;
				break;
		}
		return $user;
	}

}

class User extends databaseObject {
	protected $id;
	protected $google_id;
	protected $username;
	protected $created;
	protected $negative_combo_from;
	protected $name;
	protected $surname;
	protected $timer;
	protected $email;
	protected $login_token;

	protected $rel_table_name;

	private $rel_columns = array();

	public function __construct($id) {
		$this -> table_name = "users";
		$this -> gettable = array("id", "google_id", "username", "created", "negative_combo_from", "name", "surname", "timer", "email", "login_token");
		$this -> settable = array("google_id", "username", "created", "negative_combo_from", "name", "surname", "timer", "email", "login_token");
		$this -> public_gettable = array("id", "google_id", "username", "created", "negative_combo_from", "name", "surname", "timer", "email");
		$this -> public_settable = array("name", "surname", "timer", "email");
		$this -> load($id);
	}

	public function setProfilePic($url){
		//echo $url;
		$pic = file_get_contents($url);
		$save_path = dirname(__FILE__) . "/../pics/profile_pictures/google/" . $this->google_id . ".png";
		file_put_contents($save_path, $pic);
	}

	public function generateToken(){
		return md5(rand(1000000, 9999999) . rand(1000000, 9999999) . rand(1000000, 9999999) . $this->id);
	}

	public function refreshToken(){
		$token = $this->generateToken();
		$this->set(array('login_token'=>$token));
		return $token;
	}

	public function login(){
		session_start();
		$_SESSION['user_id'] = $this->id;
		$token = $this->refreshToken();
		//echo $token;
		setCookie('login_token', $token); 
		//echo "cookie set";
		
	}

	public function logout(){
		session_start();
		session_destroy();
		$this->refreshToken();
	}
}
