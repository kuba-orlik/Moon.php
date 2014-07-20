<?

include_once DIR_CLASSES . "databaseObject.php"; 

include_once DIR_CLASSES . "exercises.php"; 

class SetTemplates extends databaseObjectColection {
	protected static $table_name = "set_templates";
	protected static $class_name = "SetTemplate";
	protected static $table_filtered = false;

	public static function getForExercise($exercise){
		$id;
		if($exercise instanceof Exercise){
			$id = $exercise->getAttr('id');
		}else{
			$id = $exercise;
		}
		$id = (int)$id;
		$rows = Database::execute("SELECT * FROM set_templates WHERE exercise_id=$id");
		$ret = array();
		foreach($rows AS $row){
			//$temp_id = $row['id'];
			$setT = new SetTemplate($row);
			$ret[] = $setT;
		}
		return $ret;
	}
	
}

class SetTemplate extends databaseObject {
	protected $id;
	protected $name;
	protected $exercise_id;
	protected $orderL;
	protected $unit;

	private $rel_columns = array();

	public function __construct($id) {
		$this -> table_name = "set_templates";
		$this -> gettable = array("id", "name", "exercise_id", "orderL", "unit");
		$this -> settable = array("name", "exercise_id", "orderL", "unit");
		$this -> public_gettable = array("id", "name", "exercise_id", "orderL", "unit");
		$this -> public_settable = array("name", "orderL", "unit", 'exercise_id');
		$this -> load($id);
	}

	public function getExercise(){
		return new Exercise($this->exercise_id);
	}

	public function isAccessibleBy($user){
		return $this->getExercise()->isAccessibleBy($user);
	}
	
}
