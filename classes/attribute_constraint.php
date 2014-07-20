<?

class AttributeConstraints{

	private static function validate_notation($notation){
		preg_match("/[^a-zA-Z_:0-9]/", $notation, $matches);
		if(count($matches)>0){
			throw new Exception("ConstraintNotationException: general syntax error. As of now, you can't use spaces etc in single constraint notation. Proper syntax: 'constraint_type:parameter1:parameter2'; got: $notation");
		}
		$notation_array = explode(":", $notation);
	}

	private static function get_constr_class($notation){
		$array = explode(":", $notation);
		return $array[0];
	}

	public static function generate($notation){
		self::validate_notation($notation);
		$constr_class = self::get_constr_class($notation);
		$class_name = "attr_constr_" . $constr_class;
		return new $class_name($notation);
	}
}

abstract class attr_constr{
	
	protected $attributes_array;

	private function load_notation($notation){
		$array = explode(":", $notation);
		$this->attributes_array = $array;
	}

	public function __construct($notation){
		$this->load_notation($notation);
	}

	abstract public function is_valid_value($new_value, $attribute_name, $object_context);
}

class attr_constr_foreign extends attr_constr{

	public function is_valid_value($new_value, $attribute_name, $object_context){
		//database magic;
		return true;
	}

}

class attr_constr_length extends attr_constr{

	public function is_valid_value($new_value, $attribute_name, $object_context){
		return true;
	}
}