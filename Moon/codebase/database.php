<?


class Database{
	
	//private static $database_name = "ozorro";
	//private static $username = "rest";
	//private static $password = "rest";
	
	
	private static $database_name = DATABASE_NAME;
	private static $username = DATABASE_USR;
	private static $password = DATABASE_PWD;
	
	private static $connected = false;
	
	private static $pdo;

	private static $prepared_queries_cache = array();
		
	private static $optimize_prepares = true;

	public static function beginTransaction(){
		$db = self::connectPDO();
		$db->beginTransaction();
	}

	public static function commit(){
		$db = self::connectPDO();
		$db->commit();	
	}

	public static function rollBack(){
		$db = self::connectPDO();
		$db->rollBack();		
	}

	private static function prepare($query_template){
		$db = self::connectPDO();
		if(!self::$optimize_prepares){
			return $db->prepare($query_template);
		}else{
			if(isset(self::$prepared_queries_cache[$query_template])){
				$prp = self::$prepared_queries_cache[$query_template];
			}else{
				echo "preparing query  <br/>";
				$prp = $db->prepare($query_template);
				self::$prepared_queries_cache[$query_template] = $prp;
			}
			return $prp;			
		}
	}
	
	public static function connectPDO(){
		if(self::$connected){
			return self::$pdo;
		}else{
			$db = new PDO('mysql:host=127.0.0.1;dbname=' . self::$database_name . ';charset=utf8', self::$username, self::$password, array(PDO::ATTR_EMULATE_PREPARES => false, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
			self::$connected = true;
			self::$pdo = $db;
			$db->query("SET storage_engine=INNODB")->execute();
			return $db;			
		}
	}

	private static function replace_question_marks($query, $parameters){
		foreach($parameters AS $parameter){
			$query = preg_replace("/\?/", $parameter, $query, 1);
		}
		return $query;
	}

	private static function log($entry_content){
		$date = date('m/d/Y h:i:s a', time());
		$entry = "$date \t $entry_content \r\n";
		df("$entry <br/>");			
		//file_put_contents(DIR_CLASSES . 'log.txt', $entry, FILE_APPEND);
	}

	private static  function getTimestamp(){
		/*$utimestamp = microtime(true);
  		$timestamp = floor($utimestamp);
  		$milliseconds = round(($utimestamp - $timestamp) * 1000000);*/
  		return round(microtime(true) * 1000);
	}

	public static function prepareAndExecute($query_template, $attributes = array(), $get_id = false){
		$timestamp = self::getTimestamp();
		$db = self::connectPDO();
		self::log(self::replace_question_marks($query_template, $attributes));
		$prp = self::prepare($query_template);
		$prp->execute($attributes);
		echo $query_template . "<br/>";
		//$time_passed = self::getTimestamp()-$timestamp;
		if(!$get_id){
			if(strpos(strtoupper($query_template), 'UPDATE')===false && strpos(strtoupper($query_template), 'INSERT')===false){
				$rows = $prp->fetchAll();			
				return $rows;			
			}
		}else{
			return $db->lastInsertId();
		}
		return null;
	}

	public static function getColumnsForTable($table_name){
		$query = "SHOW COLUMNS FROM $table_name";
		return Database::execute($query);
	}

	public static function execute($query){
		echo "$query <br/>";
		$db = self::connectPDO();
		$stm = $db->query($query);
		self::log($query);
		$stm->execute();
		$rows = $stm->fetchAll();
		return $rows;
	}

	public static function generateUpdateQueryString($table_name, $id, $column_to_value_map){
		$query = "UPDATE $table_name SET ";
		//$query_parameters = array($table_name);
		$query_parameters = array();
		$last_key = key( array_slice( $column_to_value_map, -1, 1, TRUE ));
		foreach($column_to_value_map AS $column=>$new_value){
			$query .= "$column=?";
			//$query_parameters[] = $column;
			$query_parameters[] = $new_value;
			if($column!=$last_key){
				$query.=", ";
			}else{
				$query.=" ";
			}
		}
		$query.="WHERE id=?; ";
		$query_parameters[]=$id;
		return array("query"=>$query, "parameters"=>$query_parameters);
	}

	public static function getRowsWhereColumnsEqual($table, $column_to_value_map){
		$query_template = "SELECT * FROM $table WHERE ";
		$query_parameters = array();
		$last_key = key( array_slice( $column_to_value_map, -1, 1, TRUE ));
		foreach($column_to_value_map AS $column_name=>$column_value){
			$query_template.="$column_name=?";
			$query_parameters[]=$column_value;
			if($column_name == $last_key){
				$query_template .= ";";
			}else{
				$query_template.=" AND ";
			}
		}
		$rows = Database::prepareAndExecute($query_template, $query_parameters);
		return $rows;
	}

	public static function getRowsByIDs($table_name, $ids){
		$query_template = "SELECT * FROM $table_name WHERE id IN (";
		$last_id = last($ids);
		foreach($ids AS $id){
			$query_template .= "$id";
			if($id==$last_id){

			}else{
				$query_template .=", ";
			}
		}
		$query_template.=")";
		$rows = Database::execute($query_template);
		return $rows;
	}
}
