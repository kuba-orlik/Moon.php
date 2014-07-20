<?

class URLNotation{

	public $notation;

	private $regex;
	public $attribute_names = array();

	function __construct($notation){
		$this->notation = $notation;
		$this->generateRegex();
	}

	private function generateRegex(){
		$matches = array();
		preg_match_all('/\#[^\/]+/', $this->notation, $matches);
		$this->regex = str_replace("/", "\\/", $this->notation);
		foreach($matches AS $attribute_name){
			$this->attribute_names[]=$attribute_name;
			$this->regex = str_replace($attribute_name, "([^\/]+)", $this->regex);
		}
		$this->regex .= "[\/]?";
		$this->regex = "/" . $this->regex . "/";
	}

	private function prepareUrl($url){
		if($url[0]=="/"){
			return $url;
		}else{
			$url = "/".$url;
			return $url;
		}
	}

	public function match($url){
		$url = self::prepareUrl($url);
		$matches = array();
		$res = preg_match_all($this->regex, $url, $matches);
		return new URLNotationMatchResult($url, $this, $res, $matches);
	}

	public function test($url){
		$url = self::prepareUrl($url);
		$res = preg_match_all($this->regex, $url, $matches);
		echo "testing $url against " . $this->regex . "<br>";
		echo count($matches) ."<br>";
		return $res;
	}
}

class URLNotationMatchResult{

	protected $notation_origin;
	public $is_matching; //bool
	public $url_attributes = array();
	public $url;

	function __construct($url, $rule, $matches_present, $attribute_values){
		$this->url = $url;
		$this->notation_origin = $rule;
		if($matches_present==0){
			$this->is_matching = false;
		}else{
			$this->is_matching = true;
		}
		$this->generateUrlAttributes($attribute_values);
	}

	protected function generateUrlAttributes($attribute_values){
		$url_notation_string = $this->notation_origin->notation;
		$url_notation_elements = explode("/", $url_notation_string);
		$used_attributes = 0;
		foreach($url_notation_elements AS $url_notation_element){
			if($url_notation_element[0]=="#"){
				$atrtibute_name = substr($url_notation_element, 1);
				$attribute_value = $attribute_values[$used_attributes];
				$this->url_attributes[$attribute_name] = $attribute_value;
				$used_attributes++;
			}
		}
	}
}

class NotationBasedCollection{

	public static function add($url_notation, $element_to_add){
		//
		//
		//   HASN'T BEEN TESTED
		//
		//
		//$url_notation = $rule->url_notation_string;
		/*
		$non_parametrized_url_element_regex = "/.*(?=\#.*)/";
		$any_url_element_regex = "/.*(?=\#.*)/";
		$matches = array();
		preg_match($non_parametrized_url_element_regex, $url_notation, $matches);
		$url_elements = explode("/", $matches[0]);
		*/
		$url_elements = explode("/", $url_notation);
		$current_index = &static::$collection;
		foreach($url_elements AS $element){
			if($element!=""){
				echo $element . "<br>";
				if(!isset($current_index[$element])){
					$current_index[$element]= array();
				}
				$current_index = &$current_index[$element];				
			}
		}
		if(!isset($current_index["___elements"])){
			$current_index["___elements"] = array();
		}
		$current_index["___elements"][$url_notation]=$element_to_add;
	}	

	public static function getElementByURLMatch($url){
		$url_elements = explode("/", $url);
		$current_index = &static::$collection;
		for($i=0; $i<count($url_elements); $i++){
			df($url_elements[$i]);
			if(!isset($current_index[$url_elements[$i]])){
				df("no exact match found");
				//no exact match found. perhaps this is a "#" parameter? If so, choose different index!
				$break = true;
				df("looking for '#' attributes");
				foreach($current_index AS $element_key=>$element_value){
					df($element_key);
					if($element_key[0]=="#"){
						$break = false;
						$current_subindex = $element_key;
						break;
					}
				}
				if($break){
					df("found first non-matched element, breaking");				
					break;					
				}
			}else{
				$current_subindex = $url_elements[$i];
			}
			df("some kind of match found, moving along down the tree");
			$current_index = &$current_index[$current_subindex];
			//df("current_index:");
			//dd($current_index);
			//var_dump($current_index);
		}
		if(!isset($current_index["___elements"])){
			df("no matches array, return null");
			return null;
		}else{
			foreach($current_index["___elements"] AS $notation_string=>$element){
				$temp_notation = new URLNotation($notation_string);
				if($temp_notation->test($url)){
					return $element;
				}
			}
			return null;
		}
	}
}