<?

abstract class DatabaseObjectFormatter{
	abstract public static function convert(databaseObject $obj);
}

class dbo_format_class{
	public static function convert(databaseObject $obj){
		return $obj;
	}
}

class dbo_format_assoc{
	public static function convert(databaseObject $obj){
		return $obj->getData();
	}
}

class dbo_format_json{
	public static function convert(databaseObject $obj){
		return json_encode($obj->getData());
	}
}