<?

include_once DIR_CLASSES . "chapters.php";

class ChaptersController{
	
	public static function getAction($url_elements, $parameters){
		$data = array();
		if(!isset($url_elements[2])){
			//query
			$all = Chapters::getAll();
			foreach($all AS $lesson){
				$data[]=$lesson->getAttributes();
			}
		}else{
			switch($url_elements[2]){
				default:
					$course = new Chapter($url_elements[2]);
					$data = $course->getAttributes();
					break;
			}
		}
		return $data;
	}
	
}
