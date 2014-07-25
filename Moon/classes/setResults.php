<?

include_once DIR_CLASSES . "databaseObject.php"; 

include_once DIR_CLASSES . "setTemplates.php"; 

include_once DIR_CLASSES . "logEntries.php";

class SetResults extends databaseObjectColection {
	protected static $table_name = "sets";
	protected static $class_name = "SetResult";
	protected static $table_filtered = false;

	public static function getForLogEntry($log_entry){
		$id;
		if($log_entry instanceof LogEntry){
			$id = $log_entry->getAttr('id');
		}else{
			$id = $log_entry;
		}
		//$log_entry = LogEntries::getByID($id);
		$rows = Database::prepareAndExecute('SELECT type, rel_id FROM log_entry WHERE id=?', array($id));
		$type = $rows[0]['type'];
		if($type=='regular'){
			$rel_id = $rows[0]['rel_id'];
			$rows = Database::prepareAndExecute('SELECT * FROM sets WHERE log_entry_id=? ORDER BY set_type_id ASC', array($rel_id));
			//$rows=array();
			$ret = array();
			foreach($rows AS $row){
				$ret[] = new SetResult($row);
			}
			return $ret;			
		}

		return array();
	}
}

class SetResult extends databaseObject {
	protected $id;
	protected $set_type_id;
	protected $log_entry_id;
	protected $result;

	private $rel_columns = array();

	public function __construct($id) {
		$this -> table_name = "sets";
		$this -> gettable = array("id", "set_type_id", "log_entry_id", "result");
		$this -> settable = array("set_type_id", "log_entry_id", "result");
		$this -> public_gettable = array("id", "set_type_id", "log_entry_id", "result");
		$this -> public_settable = array("set_type_id", "log_entry_id", "result");

		//!!


		//!!

		$this -> load($id);
		//$this->setTemplate = $this->getSetTemplate();
	}

	public function public_getAttributes(){
		$ret = parent::public_getAttributes();
		//$ret['setTemplate'] = $this->setTemplate->public_getAttributes();
		return $ret;
	}

	public function getSetTemplate(){
		return new SetTemplate($this->set_type_id);
	}
	
}
