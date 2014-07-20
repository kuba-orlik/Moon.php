<?

include_once "attribute_constraint.php";

class Attribute{
	private $notation;
	private $raw_value;
	public $type;
	public $name;
	public $mode;
	public $constraints = array();

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
		preg_match("/[^a-zA-Z_]/", $name, $matches);
		if(count($matches)>0){
			throw new Exception("Invalid attribute name: '$name'. Attribute names must contain only chars of class [a-zA-Z_]");
		}
	}

	private static function validate_mode($mode){
		if(!in_array($mode, array("s", "c+", "c-"))){
			throw new Exception("Invalid 'mode' parameter: accepted values are: ['s', 'c+', 'c-'], got: $mode");
		}
	}

	private function load_constraints($constraints_notation){
		$constraints_array = explode(",", $constraints_notation);
		foreach($constraints_array AS $temp_constr_notation){
			$this->constraints[]=AttributeConstraints::generate($temp_constr_notation);
		}
	}

	private function load_notation($notation){
		$notation_array = explode(" ", $notation);
		$count = count($notation_array);
		if($count<3 || $count>4){
			throw new Exception("AttributeNotationException: expecting 3 or 4 parameters. Got: '$notation', which has $count attributes. Remember that parameters are separated using single space character. Syntax: \"type attribute_name mode [constraint1:value,...]\"");
		}
		$type = $notation_array[0];
		self::validate_type($type);
		$this->type = $type;
		$name = $notation_array[1];
		self::validate_name($name);
		$this->name = $name;
		$mode = $notation_array[2];
		self::validate_mode($mode);
		$this->mode = $mode;
		if(isset($notation_array[3])){
			$constraints_notation = $notation_array[3];
			$this->load_constraints($constraints_notation);			
		}
	}

	public function __construct($notation){
		$this->load_notation($notation);
	}
}