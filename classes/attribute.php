<?

class Attribute{
	private $notation;
	private $raw_value;
	public $type;

	private static $allowed_types = array("int", "string", "float", "bool", "array");

	private static function validate_array_type($array_notation){
		preg_match("/array\(([a-z]+)\)/", $array_notation, $matches);
		$inner_type = $matches[1];
		self::validate_type($inner_type);
	}

	private static function validate_type($type_name){
		if(strpos($type_name, "array")===0){
			self::validate_array_type($type_name);
			return;
		}
		if(!in_array($type_name, self::$allowed_types)){
			$error_string = "AttributeNotationException: wrong 'type' parameter. Supported types: [";
			foreach(self::$allowed_types AS $type_temp){
				$error_string.= $type_temp;
				if(end(self::$allowed_types)!=$type_temp){
					$error_string .=", ";
				}
			}
			$error_string .= "]. Encountered unsupported type '" . $type_name . "'.";
			throw new Exception($error_string);	
		}		
	}

	private static function validate_name($name){

	}

	private function load_notation($notation){
		$notation_array = explode(" ", $notation);
		$count = count($notation_array);
		if($count<3 || $count>4){
			throw new Exception("AttributeNotationException: expecting 3 or 4 parameters. Syntax: \"type attribute_name mode [constraint1:value,...]\"");
		}
		$type = $notation_array[0];
		self::validate_type($type);
		$this->type = $type;
		$name = $notation_array[1];
		self::validate_name($name);
		$this->name = $name;
	}

	public function __construct($notation){
		$this->load_notation($notation);
	}
}