<?

class google_login{
	private static $client_id = '918393444917-raorhrcn5sp5jl08dvsqnvr3bulena77.apps.googleusercontent.com';

	private static $client_secret = 'MlhFqcQlGLqX_PoYPHMMX0Wp';

	private static $redirect_uri = "http://workout2.ikleks.pl/oauth_redir.php";

	public static  function getCodeUrl(){
		return "https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=" . self::$client_id . "&redirect_uri=" . self::$redirect_uri . "&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&accesss_type=offline";
	}

	public static function getJsonAuth($code){
		$url = 'https://accounts.google.com/o/oauth2/token';
		$fields = array(
								'code' => $_GET["code"],
								'client_id' => self::$client_id,
								'client_secret' => self::$client_secret,
								'redirect_uri' => self::$redirect_uri,
								'grant_type' => "authorization_code"
						);	
		//url-ify the data for the POST
		foreach($fields as $key=>$value) { 
			$fields_string .= $key . '=' . $value . '&'; 
		}
		rtrim($fields_string, '&');
		$fields_string=	substr_replace($fields_string ,"",-1);

		//open connection
		$ch = curl_init();

		//set the url, number of POST vars, POST data
		curl_setopt($ch,CURLOPT_URL, $url);
		//echo $url."</br>";
		curl_setopt($ch,CURLOPT_POST, count($fields));
		//echo count($fields)."</br>";
		curl_setopt($ch,CURLOPT_POSTFIELDS, $fields_string);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER , true);
		//echo $fields_string."</br>";

		//execute post
		$result = curl_exec($ch);

		//close connection
		curl_close($ch);
		//echo var_dump($result);

		$jsonAuth=json_decode($result, true);
		return $jsonAuth;
	}

	public static function getToken($code){
		$jsonAuth = self::getJsonAuth($code);
		return $jsonAuth["access_token"];
	}

	public static function getUserData($code){
		//echo var_dump($jsonAuth)."!!";
		$token = self::getToken($code);
		$dataEnc=file_get_contents("https://www.googleapis.com/oauth2/v1/userinfo?access_token=".$token);
		$data = json_decode($dataEnc);
		return $data;
	}
}