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

	public static function generate($notation, $attribute){
		self::validate_notation($notation);
		$constr_class = self::get_constr_class($notation);
		$class_name = "attr_constr_" . $constr_class;
		return new $class_name($notation, $attribute);
	}
}

abstract class attr_constr{
	
	protected $parameters_array;
	protected $attribute;

	private function load_notation($notation){
		$array = explode(":", $notation);
		$this->parameters_array = $array;
	}

	public function __construct($notation, $attribute){
		if(!($attribute instanceof	Attribute)){
			throw new Exception("AttributeConstraintException: second argument to constructor must be of type Attribute");
		}
		$this->load_notation($notation);
	}

	abstract public function is_valid_value($new_value, $object_context);

	abstract public function getSQLString();
}

class attr_constr_foreign extends attr_constr{

	public function is_valid_value($new_value, $object_context){
		$machine_name = $this->parameters_array[1];
		$class_name = $machine_name . "Collection";
		return $class_name::exists($new_value, $this->parameters_array[2]);
	}

	public function getSQLString(){
		$attribute_name = $this->attribute->name;
		$table_name = $this->parameters_array[1];
		$column_name = $this->paramters_array[2];
		return "CONSTRAINT FOREIGN KEY $attribute_name REFERENCES $table_name ($column_name)";
	}

}

class attr_constr_length extends attr_constr{

	public function is_valid_value($new_value, $object_context){
		if($this->attribute->type=="string"){
			return strlen($new_value)<=$this->parameters_array[1];
		}
	}

	public function getSQLString(){
		return "";
	}
}