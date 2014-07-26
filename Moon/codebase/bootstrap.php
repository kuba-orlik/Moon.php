<?

class Moon{

	private static $included_classes = array();

	public static function require_class($class_name){
		$proper_class_name = lcfirst($class_name);
		require_once dirname(__FILE__) . "/../classes/" . $proper_class_name . ".php";
		if(!class_exists(ucfirst($class_name))){
			throw new Exception("File $proper_class_name.php does not contain class named " . ucfirst($class_name));
		}
		self::$included_classes[] = $class_name;
	}

	public static function require_classes(){
		$array = func_get_args();
		foreach($array AS $class_name){
			self::require_class($class_name);
		}
	}

	public static function start_ob_cache(){
		ob_end_clean();
		header("Connection: close");
		//ignore_user_abort(true); // just to be safe
		ob_start();
	}

	public static function transaction_start(){
		Database::beginTransaction();
	}

	public static function transaction_commit(){
		Database::commit();
	}

	public static function end_ob_cache_and_terminate(){
		$size = ob_get_length();
		header("Content-Length: $size");
		ob_end_flush(); // Strange behaviour, will not work
		flush(); // Unless both are called !
	}
}