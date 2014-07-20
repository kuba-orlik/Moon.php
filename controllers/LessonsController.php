<?

include_once DIR_CLASSES . "lessons.php";
include_once DIR_CLASSES . "users.php";


class LessonsController{
	
	public static function getAction($url_elements, $parameters){
		$data = array();
		if(!isset($url_elements[2])){
			//query
			$all = Lessons::getAll();
			foreach($all AS $lesson){
				$data[]=$lesson->getAttributes();
			}
		}else{
			switch($url_elements[2]){
				default:
					$lesson = new Lesson($url_elements[2]);
					$data = $lesson->public_getAttributes();
					break;
			}
		}
		return $data;
	}
	
}
