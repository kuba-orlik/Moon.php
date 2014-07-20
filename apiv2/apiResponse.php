<?

include_once DIR_BASE . "apiv2/apiAccess.php";
include_once DIR_BASE . "apiv2/apiResponseFormatter.php";


class ApiResponse{

	protected $data;
	protected $status;

	private $decision;

	function __construct($url){
		$this->decision = ApiAccess::getDecision($url);
		$this->url = $url;
	}
}