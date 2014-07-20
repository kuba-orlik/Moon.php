<?

include_once DIR_BASE . "apiv2/URLNotation.php";

/*
*
*
*config
*
*
*/


//allow by default: if set to true, all URLs with no AccessRule set for them will be allowed for the user.
$allow_by_default = false;


/*
*	end of config
*/

class ApiAccess{

	public static function getDecision($url){
		$matching_rule = ApiAccessRulesCollection::getElementByURLMatch("api/workouts/32/logs");
		if($matching_rule!=null){
			$decision_result =  $matching_rule->decide($url);
			if(!($decision_result instanceof ApiAccessResult)){
				trigger_error("Decision function must return an instance of ApiAccessResult. Using default setting from \$allow_by_default, which is currently set to $allow_by_default", E_USER_ERROR);
				$decision = self::accessResultFromBool($allow_by_default);
			}else{
				$decision = $decision_result;
			}
		}else{
			$decision =  self::accessResultFromBool($allow_by_default);
		}		
		return $decision;
	}
	
	protected static function accessResultFromBool($bool){
		if($bool){
			return new ApiAccess_allowAll();
		}else{
			return new ApiAccess_deny();
		}
	}


}

class ApiAccessRulesCollection extends NotationBasedCollection{
	public static $collection = array();
}

abstract class ApiAccessResult{
	public $type;
	public $reason;//string
	abstract public function attribute_allowed($attribute_name);
}


class ApiAccess_deny extends ApiAccessResult{
	public $type="deny";
	public function attribute_allowed($attribute_name){
		return false;
	}
}

class ApiAccess_allowAll extends ApiAccessResult{
	public $type="allowAll";
	public function attribute_allowed($attribute_name){
		return true;
	}
}

class ApiAccess_allowSome extends ApiAccessResult{
	public $type="allowSome";
	public $allowed_attributes = array();
	public function attribute_allowed($attribute_name){
		return in_array($attribute_name, $this->allowed_attributes);
	}

	function __construct($allowed_elements_array=array()){
		$this->$allowed_attributes = $allowed_elements_array;
	}
}

class ApiAccess_declineSome extends ApiAccessResult{
	public $type = "denySome";
	public $denied_attributes = array();
	public function attribute_allowed($attribute_name){
		return !in_array($attribute_name, $this->allowed_attributes);
	}

	function __construct($declined_elements_array=array()){
		$this->$allowed_attributes = $declined_elements_array;
	}
}

class ApiAccessRule{
	private $url_notation_string;
	private $url_notation;
	private $decision_function;

	public function __construct($url_notation_string, $decision_function){
		$this->url_notation_string = $url_notation_string;
		$this->url_notation = new URLNotation($url_notation_string);
		if($decision_function==undefined){
			throw new Exception("decision function undefined");
		}
		$this->decision_function = $decision_function;
		ApiAccessRulesCollection::add($url_notation_string, $this);
	}

	public function match($url){
		$result = $this->url_notation->match($url);
		return $result;
	}

	public function decide($url){
		$match_result = $this->match($url);
		return $this->decision_function($match_result);
	}
}

class ApiAccessRule_userDependent extends ApiAccessRule{
	public function user_dependent_decide($match_result, $user){
		$match_result = $this->match($url);
		return $this->decision_function($match_result, $user);
	}
}


