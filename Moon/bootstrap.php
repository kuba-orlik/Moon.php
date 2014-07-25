<?

class Moon{

	private static $included_classes = array();

	public static function require_class($class_name){
		$proper_class_name = lcfirst($class_name);
		require_once dirname(__FILE__) . "/classes/" . $proper_class_name . ".php";
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
}