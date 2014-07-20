<?
    session_start();
	require("../config.php");
	
	include "../classes/database.php";
	//Database::connect();
	
	$verb = $_SERVER["REQUEST_METHOD"];
	$url_elements = explode("/", $_SERVER["PATH_INFO"]);
	$controllerName = ucfirst($url_elements[1]) . "Controller";
	include DIR_BASE . "controllers/" . $controllerName . ".php";
	$controller = new $controllerName();
	$action_name = strtolower($verb) . "Action";
	$parameters = parseIncomingParams();
	$response = $controller->$action_name($url_elements, $parameters);
	echo json_encode($response);
	//var_dump($_SERVER);
	
	
	function parseIncomingParams() {
        $parameters = array(); 
 
        // first of all, pull the GET vars
        if (isset($_SERVER['QUERY_STRING'])) {
            parse_str($_SERVER['QUERY_STRING'], $parameters);
        }
 
        // now how about PUT/POST bodies? These override what we got from GET
        $body = file_get_contents("php://input");
        $content_type = false;
        if(isset($_SERVER['CONTENT_TYPE'])) {
            $content_type = $_SERVER['CONTENT_TYPE'];
        }
        switch($content_type) {
            case "application/json;charset=UTF-8":
                $body_params = json_decode($body);
                if($body_params) {
                    foreach($body_params as $param_name => $param_value) {
                        $parameters[$param_name] = $param_value;
                    }
                }
                //$this->format = "json";
                break;
            case "application/x-www-form-urlencoded":
                parse_str($body, $postvars);
                foreach($postvars as $field => $value) {
                    $parameters[$field] = $value;
 
                }
                //$this->format = "html";
                break;
            default:
                // we could parse other supported formats here
                break;
        }
        return $parameters;
    }

?>	
