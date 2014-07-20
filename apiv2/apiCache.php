<?

class ApiCache{
	//collection defined as separate class below
	//private static $rule_collection = array();

}

class ApiCacheRuleCollection{
	public static $collection = array();

	//for faster rule search, rules should be indexed by their elements (words between '/'s)

	public function getRuleForURL(){
		//todo
	}

	

}

class ApiCacheRule{

	public $url_notation_string; //e.g /api/exercises/#id/logs
	protected $influenced_urls = array();
	protected $refresh_daily; //bool

	private $url_regex;
	private $url_param_names;

	function __construct($url_notation_string, $influenced_urls=array(), $refresh_daily=false){
		$this->url_notation_string = $url_notation_string;
		ApiCacheRuleCollection::add($url_notation_string, $this);
	}

}

class ApiCacheEntry{

	protected $timestamp;

}