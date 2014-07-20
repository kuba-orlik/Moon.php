<?

include_once DIR_CLASSES . "courses.php";

class CoursesController{
	
	public static function getAction($url_elements, $parameters){
		$data = array();
		if(!isset($url_elements[2])){
			//query
			$all = Courses::getAll();
			foreach($all AS $lesson){
				$data[]=$lesson->getAttributes();
			}
		}else{
			switch($url_elements[2]){
				default:
					$course = new Course($url_elements[2]);
					$data = $course->getAttributes();
					break;
			}
		}
		return $data;
	}
	
}
