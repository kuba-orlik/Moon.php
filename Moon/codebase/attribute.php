<?

include_once "attribute_constraint.php";

class Attribute{
	private $notation;
	private $raw_value;
	public $type;
	public $name;
	public $mode;
	public $constraints = array();
	private $is_valid_in_physical_cache = true;
	private $parent_object;

	private static $allowed_types = array("int", "string", "float", "bool", "array");

	public function __construct($notation, $parent_object){
		$this->parent_object = $parent_object;
		$this->load_notation($notation);
	}

	private function getSQLType(){
		if($this->is_cached()){
			switch($this->type){
				case "string":
					return "text";
				case "array":
					return "text";
				case "int":
					return "varchar(30)";
				default:
					return "text";
			}
		}
		switch($this->type){
			case "string":
				return "text";
			case "array":
				return "text";
			default:
				return $this->type;
		}
	}

	public function has_constraints(){
		return count($this->constraints)>0;
	}

	public function getGetterFunctionName(){
		return "get" . ucfirst($this->name);
	}

	private function getConstraintsSQLString(){
		if(!$this->has_constraints()){
			return "";
		}else{
			$ret = "";
			foreach($this->constraints AS $constr){
				$ret .= $constr->getSQLString();
				if($constr!=end($this->constraints)){
					$ret.=', ';
				}
			}
			return $ret;
		}
	}

	public function getSQLColumnStatement($table_name){
		$column_name = $this->name;
		$column_type = $this->getSQLType();
		$query =  "ALTER TABLE $table_name ";
		$query .= "ADD $column_name $column_type NULL";	
		if($this->has_constraints()){
			$query .=", ";	
			$query .= $this->getConstraintsSQLString();
		}
		return $query;
	}

	private static function validate_array_type($array_notation){
		preg_match("/array\(([a-z]+)\)/", $array_notation, $matches);
		$inner_type = $matches[1];
		self::validate_type($inner_type);
	}

	public function is_cached(){
		//return strpos($this->mode, "c")===0;
		return $this->mode == "c+";
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
			$this->constraints[]=AttributeConstraints::generate($temp_constr_notation, $this);
		}
	}

	private function load_notation($notation){
		$notation_array = explode(" ", $notation);
		$this->notation = $notation;
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
		if($this->mode=="s" && isset($notation_array[3])){
			$constraints_notation = $notation_array[3];
			$this->load_constraints($constraints_notation);			
		}
	}


	public function setRawValue($raw_value){
		$this->raw_value = $raw_value;
	}

	private static function to_value_cache_notation($value){
		return "__\$__" . time() . "__\$__:=" . json_encode($value);
	}

	private function generateRawValue($value){
		$raw;
		if($this->is_cached()){
			return self::to_value_cache_notation($value);
		}
		switch($this->type){
			case "int":
				$raw = (int)$value;
				break;
			case "float":
				$raw = (float)$value;
				break;
			case "string":
				if(gettype($value)=="array"){
					throw new Exception("DatabaseObjectAttributeException: incorrect value $value for attribute " . $this->name);
				}
			default:
				$raw = (string) $value;
				break;
		}
		return $raw;
	}

	public function needsColumn(){
		return $this->mode[0]=='s' || $this->mode[1]=="+";
	}

	private function getClassMachineName(){
		$class_name = get_class($this->parent_object);
		return $class_name::$machine_name;
	}

	private function invalidate_physical_cache(){
		$this->is_valid_in_physical_cache = false;
		AttributeCacheControl::invalidate_value($this->getClassMachineName(), $this->parent_object->id, $this->name, $this->raw_value);
	}

	public function is_settable(){
		if($this->mode=="s"){
			return true;
		}else{
			return false;
		}
	}

	public function setValue($value){
		$new_raw_value = $this->generateRawValue($value);
		if($new_raw_value!=$this->raw_value){
			$this->setRawValue($new_raw_value); 
			$this->invalidate_physical_cache();			
		}			
	}

	private function getRawValue(){
		return $raw_value;
	}

	private static function from_value_cache_notation($notation){
		preg_match('/__\$__[0-9]+__\$__\:\=(.*)/', $notation,  $matches);
		return json_decode($matches[1]);
	}

	private function getValueInNonPhysicalCache(){
		$class_machine_name = $this->parent_object->getMachineName();
		$id = $this->parent_object->id;
		$attribute_name = $this->name;
		echo "$class_machine_name, $id, $attribute_name <br/>";
		return AttributeCacheControl::getCachedAttribute($class_machine_name, $id, $attribute_name);
	}

	public function getValue(){
		$val;
		$raw = $this->raw_value;
		if($this->is_cached()){
			if($this->is_valid_in_physical_cache){
				return self::from_value_cache_notation($raw);				
			}else{
				$value_in_attribute_cache = $this->getValueInNonPhysicalCache();
				return self::from_value_cache_notation($value_in_attribute_cache);
			}
		}
		switch($this->type){
			case "int":
				$val =  (int)$raw;
				break;
			case "string":
				$val = (string)$raw;
				break;
			case "float":
				$val = (float)$raw;
				break;
			case "bool":
				$val = (bool)$raw;
				break;
			default:
				$val = json_encode($raw);
				break;
		}
		return $val;
	}
}