<?
/*
include_once "database.php";

class databaseObjectColection{
	
	//protected static $table_name;
	//protected static $class_name;
	protected static $filtered; //boolean
	protected static $filter_column;
	protected static $filter_value;
	
	public static function getAll($sort_attr=array()){
		if(self::$filtered){
			return self::getFiltered(static::$filter_column, static::$filter_value);
		}else{
			return self::getUnfiltered($sort_attr);
		}
	}
	
	protected static function getUnfiltered($sort_attr){		
		$db = Database::connectPDO();
		$query = "SELECT id FROM " . static::$table_name;
		if(isset($sort_attr['sorted']) && $sort_attr['sorted']){
			$query.=" ORDER BY " . $sort_attr->sort_column . " " . $sort_attr->sort_order;
		}
		$rows = $db->query($query );//->fetchAll();
		$ret = array();
		foreach($rows AS $row){
			$ret[] = new static::$class_name($row["id"]);
		}
		return $ret;
	}
	
	protected static function getFiltered($column, $value, $class_name=null){
		if($class_name==null) $class_name=static::$class_name;
		$db = Database::connectPDO();
		$query = "SELECT id FROM " . static::$table_name . " WHERE $column = ?";
		if(isset($sort_attr['sorted']) && $sort_attr['sorted']){
			$query.=" ORDER BY " . $sort_attr->sort_column . " " . $sort_attr->sort_order;
		}
		$rows = Database::prepareAndExecute($query, array($value));
		$ret = array();
		foreach($rows AS $row){
			$ret[] = new $class_name($row["id"]);
		}
		return $ret;
	}
	
	public static function create(){
		$query = "INSERT INTO " . static::$table_name . " VALUES ()";
		//$db = Database::connectPDO();
		$id = Database::prepareAndExecute($query, array(), true);
		//$id = $db->lastInsertId();
		return new static::$class_name($id);
	}

	public static function delete($object_id){
		$query = "DELETE FROM " . static::$table_name . " WHERE id=?";
		Database::prepareAndExecute($query, array($object_id));
		return array();
	}	

	public static function exists($id){
		$query = "SELECT id FROM " . static::$table_name . " WHERE id=?";
		$rows = Database::prepareAndExecute($query, array($id));
		return count($rows)!=0;
	}

	public static function put($attributes, $public=true){
		$needs_creating = false;
		$id = $attributes['id'];
		if(!isset($id) || $id==null || $id==0){
			$needs_creating=true;
		}
		if($needs_creating){
			$object = static::create();
		}else{
			$object = new static::$class_name($id);
		}
		if($public){
			$object->public_set($attributes);
		}else{
			$object->set($attributes); 
		}
		return $object;
	}
}

class databaseObject{
	protected $table_name;
	protected $settable = array();
	protected $gettable = array();
	
	protected function load($id){
		$db = Database::connectPDO();
		$id = (int)$id;
		$query = "SELECT * FROM ". $this->table_name . " WHERE id=$id";
		$rows = Database::execute($query);
		foreach($this AS $key=>$value){
			if(isset($rows[0][$key]) && $key!="id"){
			 	$this->$key = $rows[0][$key];
			}
				
		}	
		$this->id = $id;
		if(sizeof($rows)==0){
			return false;
		}else{
			return true;
		}
	}
	
	public function getAttr($attr){
		if(in_array($attr, $this->gettable) && isset($this->$attr)){
			return $this->$attr;			
		}else{
			return NULL;
		}
	}
	
	public function set($array){
		$table = $this->table_name;
		foreach($array AS $key=>$value){
			if(in_array($key, $this->settable)){
				$this->$key = $array[$key];
				$query = "UPDATE " . $table . " SET $key=? WHERE id=?";
				Database::prepareAndExecute($query, array($value, $this->id));
			}
		}
	}
	
	public function public_set($array){
		$allowed = array();
		foreach($array AS $key=>$value){
			if(in_array($key, $this->public_settable)){
				$allowed[$key] = $value;
			}
		}
		$this->set($allowed);
	}
	
	public function public_getAttributes(){
		$ret = array();
		foreach($this->public_gettable AS $attr){
			$ret[$attr] = $this->getAttr($attr);
		}
		return $ret;
	}
	
	public function getAttributes(){
		$ret = array();
		foreach($this->gettable AS $attr){
			$ret[$attr] = $this->getAttr($attr);
		}
		return $ret;
	}
}
*/

include_once "database.php";

class databaseObjectColection{
	
	//protected static $table_name;
	//protected static $class_name;
	protected static $filtered; //boolean
	protected static $filter_column;
	protected static $filter_value;
	
	public static function getAll($sort_attr=array()){
		/*
		 * $sort_attr = array(
		 * 	sorted=>true,
		 * 	sort_column=>'last_modified',
		 * 	sort_order=>'ASC'
		 * )
		 * 
		 */
		if(self::$filtered){
			return self::getFiltered(static::$filter_column, static::$filter_value);
		}else{
			return self::getUnfiltered($sort_attr);
		}
	}

	public static function getTotalAmount($filterArray=null){
		$condition = self::parse_condition($filterArray);
		$query = "SELECT count(id) FROM words ". $condition["query_part"];
		$rows = Database::prepareAndExecute($query, $condition["attributes"]);
		return $rows[0][0];	
	}

	private static function parse_condition($params){
		$params_count = count($params);
		if($params_count%2!=0){
			throw new Exception("first parameter to get() function should be an array with even amount of elements");
		}
		$condition = "";
		$to_query = array();
		for($i=0; $i<$params_count; $i+=2){
			if(!in_array($params[$i], array("amount", "offset"))){
				if(count($to_query)!=0){
					$condition .= " AND ";
				}else{
					$condition.=' WHERE ';
				}
				//echo "i: " . $i . "</br>";
				//echo "t:" . $params[$i] . "</br>";
				$condition .= $params[$i] . "=?";
				$to_query[]=$params[$i+1];				
			}
		}
		return array(
			"query_part"=>$condition,
			"attributes"=>$to_query
		);
	}

	private static function parse_sort($params){
		$params_count = count($params);
		if($params_count%2!=0){
			throw new Exception("second parameter to get() function should be an array with even amount of elements");
		}
		$sort="";
		for($i=0; $i<$params_count; $i+=2){
			if($i==0){
				$sort.=" ORDER BY ";
			}else{
				$sort .= ", ";
			}
			$sort.=$params[$i] . " " .  $params[$i+1];
		}
		return $sort;
	}

	private static function parse_query($params, $sort=array(), $verb="SELECT *"){
		$condition = self::parse_condition($params);
		$sort = self::parse_sort($sort);
		//$table_name = self::getInsertTableName();
		$query = $query = "$verb FROM " . static::$table_name . " " . $condition["query_part"] . " " . $sort;
		return array(
			"query"=>$query,
			"attributes"=>$condition["attributes"]
		);
	}

	public static function get($filterArray, $offset=0, $amount=50){
		$offset = (int)$offset;
		$amount = (int)$amount;

		foreach($filterArray AS $index=>$value){
			if($value=="offset"){
				$offset = $filterArray[$index+1];
				unset ($filterArray[$index]);
				unset ($filterArray[$index+1]);
				break;
			}
			
		}

		foreach($filterArray AS $index=>$value){
			if($value=="amount"){
				$amount = $filterArray[$index+1];
				unset ($filterArray[$index]);
				unset ($filterArray[$index+1]);
				break;
				//die($amount);
			}
		}

		$filterArray = array_values($filterArray);

		$query = self::parse_query($filterArray, array(), "SELECT *");
		$query["query"].=" LIMIT $offset, $amount";
		//echo $query["query"];
		$rows = Database::prepareAndExecute($query["query"], $query["attributes"]);
		$ret = array();
		foreach($rows AS $row){
			//$ret[]=new static::$class_name($row["id"]);
			
			$ret[]=new static::$class_name($row);

			//$class_temp = static::$class_name;
			//$ret[]=$class_temp::fromRow($row);
		}
		return $ret;
	}
	
	protected static function getUnfiltered($sort_attr){		
		$db = Database::connectPDO();
		$query = "SELECT * FROM " . static::$table_name;
		if(isset($sort_attr['sorted']) && $sort_attr['sorted']){
			$query.=" ORDER BY " . $sort_attr->sort_column . " " . $sort_attr->sort_order;
		}
		$rows = $db->query($query );//->fetchAll();
		$ret = array();
		foreach($rows AS $row){
			$ret[] = new static::$class_name($row);
		}
		return $ret;
	}
	
	protected static function getFiltered($column, $value, $class_name=null){
		//echo $column . " " . $value . "<br/>";
		if($class_name==null) $class_name=static::$class_name;
		$db = Database::connectPDO();
		$query = "SELECT * FROM " . static::$table_name . " WHERE $column = ?";
		//echo "$query <br/>";
		if(isset($sort_attr['sorted']) && $sort_attr['sorted']){
			$query.=" ORDER BY " . $sort_attr->sort_column . " " . $sort_attr->sort_order;
		}
		$prp = $db->prepare($query);
		$prp->execute(array($value));//->fetchAll();//->fetchAll();
		$rows = $prp->fetchAll();
		$ret = array();
		foreach($rows AS $row){
			//var_dump($row);
			$ret[] = new $class_name($row);
		}
		return $ret;
	}
	
	public static function create(){
		$query = "INSERT INTO " . static::$table_name . " VALUES ()";
		$db = Database::connectPDO();
		$rows = $db->query($query);
		$id = $db->lastInsertId();
		return new static::$class_name($id);
	}

	public static function delete($object_id){
		$query = "DELETE FROM " . static::$table_name . " WHERE id=?";
		//echo $query;
		$db = Database::connectPDO();
		$prp = $db->prepare($query);
		$prp->execute(array($object_id));
		return array();
	}	

	public static function exists($id){
		$query = "SELECT id FROM " . static::$table_name . " WHERE id=?";
		$db = Database::connectPDO();
		$prp = $db->prepare($query);
		$prp->execute(array($id));
		$rows = $prp->fetchAll();
		return count($rows)!=0;
	}

	public static function put($attributes, $public=true){
		$needs_creating = false;
		$id = $attributes['id'];
		if(!isset($id) || $id==null || $id==0){
			$needs_creating=true;
		}
		if($needs_creating){
			$object = static::create();
		}else{
			$object = new static::$class_name($id);
		}
		if($public){
			$object->public_set($attributes);
		}else{
			$object->set($attributes); 
		}
		return $object;
	}
}

class databaseObject{
	protected $table_name;
	protected $settable = array();
	protected $gettable = array();
	
	protected function insertData($data){
		foreach($this AS $key=>$value){
			if(isset($data[$key])){
			 	$this->$key = $data[$key];
			}		
		}
	}

	private function getRow($id){
		$db = Database::connectPDO();
		$query = "SELECT * FROM ". $this->table_name . " WHERE id=?";
		$rows= Database::prepareAndExecute($query, array($id));
		//$stmt = $db->prepare($query);
		//$stmt->execute(array($id));
		//$rows = $stmt->fetchAll();
		return $rows[0];
	}

	protected function load($attrib){
		$attrib_type = gettype($attrib);
		if($attrib_type=="integer" || $attrib_type=="string"){
			//attrib is id
			$data = $this->getRow($attrib);
			$this->id = $id;
		}else{
			//attrib is row
			$data = $attrib;
		}
		$this->insertData($data);	
	}

	public function fromRow($row){
		$ret = new static(null);
		$ret->insertData($row);
		return $ret;
	}
	
	public function getAttr($attr){
		if(in_array($attr, $this->gettable) && isset($this->$attr)){
			return $this->$attr;			
		}else{
			return NULL;
		}
	}
	
	public function setAttr($key, $value){
		self::set(array($key=>$value));
	}

	public function set($array){
		$table = $this->table_name;
		foreach($array AS $key=>$value){
			if(in_array($key, $this->settable)){
				//echo $key . "<br/>";
				$this->$key = $array[$key];
				$db = Database::connectPDO();
				$query = "UPDATE " . $table . " SET $key=? WHERE id=?";
				$stmt = $db->prepare($query);
				$stmt->execute(array($value, $this->getAttr("id")));
			}
		}
	}
	
	public function public_set($array){
		$allowed = array();
		foreach($array AS $key=>$value){
			if(in_array($key, $this->public_settable)){
				$allowed[$key] = $value;
			}
		}
		$this->set($allowed);
	}
	
	public function public_getAttributes(){
		$ret = array();
		foreach($this->public_gettable AS $attr){
			$ret[$attr] = $this->getAttr($attr);
		}
		return $ret;
	}
	
	public function getAttributes(){
		$ret = array();
		foreach($this->gettable AS $attr){
			$ret[$attr] = $this->getAttr($attr);
		}
		return $ret;
	}
}

