<?

include_once DIR_CLASSES . "databaseObject.php";

include_once DIR_CLASSES . "exercises.php";

include_once DIR_CLASSES . "muscleParts.php";

include_once DIR_CLASSES . "points.php";

class Users extends databaseObjectColection {
	protected static $table_name = "users";
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

	public static function getUserFromGoogleID($google_id){
		$result = Database::prepareAndExecute("SELECT id FROM users WHERE google_id=?", array($google_id));
		//die();
		$user_id = $result[0]['id'];
		$user = new User($user_id);
		return $user;
	}

	public static function loginUserFromGoogleData($userData){
		$user = self::getUserFromGoogleID($userData->id);
		$user->login();
	}

	public static function googleUserExists($google_user_id){
		$db = Database::connectPDO();
		$query = "SELECT * FROM users WHERE google_id=?";
		$prp = $db->prepare($query);
		$prp->execute(array($google_user_id));
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

	public static function createSessionIfNecessary(){
		if(session_id() == ''){
			session_start();
		}
	}

	public static function getCurrentSessionState(){
		self::createSessionIfNecessary();
		if(isset($_SESSION["user_id"])){
			return "session_active";
		}
		if(isset($_COOKIE["login_token"])){
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
		$query = "SELECT id FROM users WHERE login_token=?";
		$prp = $db->prepare($query);
		$prp->execute(array($token));
		$rows = $prp->fetchAll();
		return new User($rows[0]['id']);
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
				header('HTTP/1.0 403 Forbidden');
				die('not logged in');
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
	protected $points_cached_until;
	protected $reminder_hour;

	protected $rel_table_name;

	private $rel_columns = array();

	public function __construct($id) {
		$this -> table_name = "users";
		$this -> gettable = array("id", "google_id", "username", "created", "negative_combo_from", "name", "surname", "timer", "email", "login_token", 'points_cached_until', "reminder_hour");
		$this -> settable = array("google_id", "username", "created", "negative_combo_from", "name", "surname", "timer", "email", "login_token", 'points_cached_until', "reminder_hour");
		$this -> public_gettable = array("id", "google_id", "username", "created", "negative_combo_from", "name", "surname", "timer", "email", 'points_cached_until', "reminder_hour");
		$this -> public_settable = array("name", "surname", "timer", "email", 'points_cached_until', "reminder_hour");
		$this -> load($id);
	}

	public function getStreakStatus(){
		$ret = array();
		$ret["current"] = $this->getCurrentStreak();
		return $ret;
	}

	public function setProfilePic($url){
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
		if(session_id()==''){
			session_start();
		}
		$_SESSION['user_id'] = $this->id;
		$token = $this->refreshToken();
		setCookie('login_token', $token, time()+60*60*24*30, "/", ""); 
		
	}

	public function getPhotoUrl(){
		return "/pics/profile_pictures/google/" . $this->google_id . ".png";
	}

	public function public_getAttributes(){
		$ret = parent::getAttributes();
		$ret['photo_url'] = $this->getPhotoUrl();
		$ret["last_exercised"] = $this->lastExercised();
		return $ret;
	}

	public function lastExercised(){
		$query = "SELECT DATEDIFF(NOW(), begin_time) FROM log_entry WHERE user_id=? ORDER BY begin_time DESC LIMIT 0,1";
		$rows = Database::prepareAndExecute($query, array($this->id));
		return $rows[0][0];
	}

	public function logout(){
		session_start();
		session_destroy();
		$this->refreshToken();
	}

	public function getExercises(){
		return Exercises::getByUserID($this->id);
	}

	public function getLogEntries($count){
		return LogEntries::getForUser($this, $count);
	}

	public function getMuscleParts(){
		return MuscleParts::getForUser($this);
	}

	public function getMostNeglectedMusclePart($offset=0){
		$id = $this->id;
		//$query = "SELECT muscle_part_id, max(begin_time) as kiedy FROM 	log_entry LEFT JOIN (SELECT id,	muscle_part_id, (SELECT 'custom') AS type  FROM log_entry_custom UNION 	SELECT	log_entry_regular.id, muscle_part_id, (select 'regular') as type FROM `log_entry_regular` left join exercises on exercise_id=exercises.id ) wszy ON wszy.id=log_entry.rel_id WHERE log_entry.id IS NOT NULL AND muscle_part_id IN (SELECT id FROM muscle_parts m WHERE user_id=$id AND EXISTS(select * from exercises WHERE muscle_part_id=m.id)) GROUP BY muscle_part_id ORDER BY kiedy ASC";
		$query="SELECT  	muscle_part_id,  	max(begin_time) as kiedy  FROM 	 	log_entry  	LEFT JOIN ( 		SELECT  			id,	 			muscle_part_id,  			(SELECT 'custom') AS type   		FROM log_entry_custom  			UNION 	 				SELECT	 					log_entry_regular.id,  					muscle_part_id,  					(select 'regular') as type  				FROM `log_entry_regular`  					left join  						exercises  					on  						exercise_id=exercises.id  	) wszy  	ON wszy.id=log_entry.rel_id  	WHERE  		log_entry.id IS NOT NULL  		AND log_entry.type=wszy.type 		AND muscle_part_id IN ( 			SELECT  				id  			FROM  			muscle_parts m  			WHERE  				user_id=26  				AND EXISTS( 					select  						*  					from exercises  					WHERE  						muscle_part_id=m.id 				) 		)  GROUP BY  	muscle_part_id  ORDER BY  	kiedy ASC";
		$rows = Database::execute($query);
		if(isset($rows[$offset])){
			$muscle_part = new MusclePart($rows[$offset]['muscle_part_id']);
			return $muscle_part;			
		}else{
			return null;
		}
	}

	public function getMostNeglectedExercise(){
		$user_id = $this->id;
		$query = "SELECT exercises.id as exercise_id, datediff(curdate(), max(begin_time)) AS days_ago from exercises left join log_entry_regular ON exercises.id=log_entry_regular.exercise_id LEFT JOIN log_entry ON log_entry.rel_id = log_entry_regular.id WHERE paused=0 AND exercises.user_id=$user_id GROUP BY exercise_id ORDER BY days_ago DESC LIMIT 0,1";
		$rows = Database::execute($query);
		return new Exercise($rows[0]['exercise_id']);
	}

	public function getRecommendations(){
		$neglected_muscle_offset = 0;
		do{
			$neglected_muscle_part = $this->getMostNeglectedMusclePart($neglected_muscle_offset);
			df("considering muscle part as most neglected: " . $neglected_muscle_part->getAttr("name") . "<br>");
			$neglected_muscle_offset++;
		}while($neglected_muscle_part->getAmountOfUnpausedExercises()==0);
		df("chosen as most neglected: <b>" . $neglected_muscle_part->getAttr("name") . "</b><br>");
		$recom = $neglected_muscle_part->getMostNeglectedExercise();
		df("most neglected exercise for " . $neglected_muscle_part->getAttr("name") . ": " . $recom->getAttr("name") . "<br>");
		$recom_sec = $this->getMostNeglectedMusclePart($neglected_muscle_offset)->getMostNeglectedExercise();
		df("second most neglected muscle part: <b>" . $this->getMostNeglectedMusclePart($neglected_muscle_offset)->getAttr("name") . "</b><br>");
		$most_neglected = $this->getMostNeglectedExercise();
		$ret = array(
			"recom"=>$recom,
			"recom_sec"=>$recom_sec,
			"most_neglected"=>$most_neglected
		);
		if($recom->getAttr('id') == $most_neglected->getAttr('id')){
			unset($ret["most_neglected"]);
		}
		if($recom->getAttr('id') == $recom_sec->getAttr('id')){
			unset($ret["recom_sec"]);
		}
		if($recom_sec->getAttr('id') == $most_neglected->getAttr('id')){
			unset($ret["most_neglected"]);
		}
		return $ret;
	}

	public function recalculatePoints(){
		Points::recalculateForUser($this);
	}

	public function getScores($offset = 0, $amount=30){
		$this->recalculatePoints();
		$query = "SELECT `date`, points AS me FROM `points` WHERE user_id=? ORDER BY date DESC LIMIT ?, ?";
		$rows = Database::prepareAndExecute($query, array($this->id, $offset, $amount));
		$ret = array();
		foreach($rows AS $row){
			$new_row = array(
				'date'=>$row['date'],
				'me'=>$row['me']
			);
			$ret[]=$new_row;
		}
		return $ret;
	}

	public function getCurrentStreak(){
		$this->recalculatePoints();
		$query = "SELECT combo FROM points WHERE user_id=? ORDER BY date DESC limit 0, 1";
		$rows = Database::prepareAndExecute($query, array($this->id));
		return $rows[0]["combo"];
	}
}
