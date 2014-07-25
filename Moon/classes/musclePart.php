<?

Moon::require_classes("setTemplate", "exercise");


class MusclePart extends databaseObject {
	protected $name;
	protected $user_id;

	private $rel_columns = array();

	public function __construct($id) {
		$this -> table_name = "muscle_parts";
		$this -> gettable = array("id", "name", "user_id");
		$this -> settable = array("name", "user_id");
		$this -> public_gettable = array("id", "name");
		$this -> public_settable = array("name");
		$this -> load($id);
	}

	public function getExercises(){
		return Exercises::getByMusclePart($this);
	}
	
	public function getAmountOfUnpausedExercises(){
		$query = "SELECT count(*) FROM muscle_parts LEFT JOIN exercises on muscle_parts.id=exercises.muscle_part_id WHERE muscle_parts.id=? AND paused=0";
		$rows = Database::prepareAndExecute($query, array($this->id));
		return $rows[0][0];
	}

	public function isAccessibleBy($user){
		if($user instanceof User){
			$user_id = $user->getAttr('id');
		}else{
			$user_id = $user;
		}
		if($user_id == $this->user_id){
			return true;
		}else{
			return false;
		}
	}

	public function public_getAttributes(){
		return parent::public_getAttributes();
	}

	public function getMostNeglectedExercise(){
		$id=$this->id;
		$query = "SELECT datediff(curdate(), max(begin_time)) as days_ago, name, muscle_part_id, exercise_id, paused FROM `log_entry_regular` left join exercises on exercise_id=exercises.id left join log_entry ON log_entry.rel_id=log_entry_regular.id GROUP BY exercise_id HAVING muscle_part_id=$id AND paused=0 ORDER BY days_ago DESC LIMIT 0,1";
		$rows = Database::execute($query);
		return new Exercise($rows[0]['exercise_id']);
	}

	public static function getForUser($user){
		if($user instanceof User){
			$user_id = $user->getAttr('id');
		}else{
			$user_id = $user;
		}
		$rows = Database::prepareAndExecute('SELECT * FROM muscle_parts WHERE user_id=?', array($user_id));
		$ret = array();
		foreach($rows AS $row){
			$ret[] = new MusclePart($row);
		}
		return $ret;
	}

}
