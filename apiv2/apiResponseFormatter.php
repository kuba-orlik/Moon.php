<?

abstract class ApiResponseFormatter{
	abstract public function to_str($assoc_array);
}

class ApiResponseFormatter_json extends ApiResponseFormatter{
	public function to_str($assoc_array){
		return json_encode($assoc_array);
	}
}