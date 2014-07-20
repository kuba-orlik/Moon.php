<?

include_once DIR_CLASSES . "words.php";

class WordsController{
	
	public static function getAction($url_elements, $parameters){
		$data = array();
		if(isset($url_elements[2])){
			//echo particular word
			$word = new Word($url_elements[2]);
			$data = $word->getAttributes();
		}
		return $data;
	}
	
}
