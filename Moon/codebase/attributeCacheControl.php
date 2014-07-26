<?

class AttributeCacheControl{
	private static $invalidated_attribute_values = array();

	public static function invalidate_value($class_machine_name, $entry_id, $attribute_name, $new_value){
		$entry = new AttributeInvalidationEntry($class_machine_name, $entry_id, $attribute_name, $new_value);
		if(!isset(self::$invalidated_attribute_values[$class_machine_name])){
			self::$invalidated_attribute_values[$class_machine_name] = array();
		}
		if(!isset(self::$invalidated_attribute_values[$class_machine_name][$entry_id])){
			self::$invalidated_attribute_values[$class_machine_name][$entry_id] = array();
		}
		self::$invalidated_attribute_values[$class_machine_name][$entry_id][$attribute_name]=$entry;
	}

	public static function invalidate_values($class_machine_name, $entry_id, $attribute_to_new_value_map){
		foreach($attribute_to_new_value_map AS $key=>$value){
			self::invalidate_value($class_machine_name, $entry_id, $key, $value);
		}
	}

	public static function getCachedAttribute($class_machine_name, $entry_id, $attribute_name){
		return self::$invalidated_attribute_values[$class_machine_name][$entry_id][$attribute_name]->new_value;
	}

	/*public static function write_to_cache(){
		$large_query_template = "";
		$all_query_parameters = array();
		foreach(self::$invalidated_attribute_values AS $class_machine_name=>$ids){
			foreach($ids AS $id=>$invalidation_entries){
				$column_to_value_map = array();
				foreach($invalidation_entries AS $entry){
					$column_to_value_map[$entry->attribute_name]=$entry->new_value;
				}
				$temp_query_touple = Database::generateUpdateQueryString($class_machine_name, $id, $column_to_value_map);
				$large_query_template .= $temp_query_touple["query"] . "\r\n";
				$all_query_parameters = array_merge($all_query_parameters, $temp_query_touple["parameters"]);
			}
		}
		echo ($large_query_template);
		if($large_query_template){
			Database::prepareAndExecute($large_query_template, $all_query_parameters);			
		}
	}*/            //multiple queries are not allowed. I'll need to transfer eah of hem separately

	public static function write_to_cache(){
		$query_templates = array();
		$query_parameter_arrays = array();
		foreach(self::$invalidated_attribute_values AS $class_machine_name=>$ids){
			foreach($ids AS $id=>$invalidation_entries){
				$column_to_value_map = array();
				foreach($invalidation_entries AS $entry){
					$column_to_value_map[$entry->attribute_name]=$entry->new_value;
				}
				$temp_query_touple = Database::generateUpdateQueryString($class_machine_name, $id, $column_to_value_map);
				$temp_query_template = $temp_query_touple["query"];
				$temp_query_parameters = $temp_query_touple["parameters"];
				Database::prepareAndExecute($temp_query_template, $temp_query_parameters);
			}
		}
	}	
}

class AttributeInvalidationEntry{

	public $class_machine_name;
	public $entry_id;
	public $attribute_name;
	public $new_value;


	public function __construct($class_machine_name, $entry_id, $attribute_name, $new_value){
		$this->class_machine_name = $class_machine_name;
		$this->entry_id = $entry_id;
		$this->attribute_name = $attribute_name;
		$this->new_value = $new_value;
	}

}