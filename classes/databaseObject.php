<?
include_once "database.php";
include_once "attribute.php";

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
		if($class_name==null) $class_name=static::$class_name;
		$db = Database::connectPDO();
		$query = "SELECT * FROM " . static::$table_name . " WHERE $column = ?";
		if(isset($sort_attr['sorted']) && $sort_attr['sorted']){
			$query.=" ORDER BY " . $sort_attr->sort_column . " " . $sort_attr->sort_order;
		}
		$prp = $db->prepare($query);
		$prp->execute(array($value));//->fetchAll();//->fetchAll();
		$rows = $prp->fetchAll();
		$ret = array();
		foreach($rows AS $row){
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
		$db = Database::connectPDO();
		$prp = $db->prepare($query);
		$prp->execute(array($object_id));
		return array();
	}	

	public static function exists($id, $attribute_name="id"){
		$query = "SELECT ? FROM " . static::$table_name . " WHERE id=?";
		$db = Database::connectPDO();
		$prp = $db->prepare($query);
		$prp->execute(array($attribute_name, $id));
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

abstract class databaseObject{
	protected $id;

	private static $table_prefix = ""; //"class by design"
	
	private $attributes_storage = array(); 

	private static $attributes;
	public static $machine_name; 

	private function checkTableStructure(){
	}

	private function validate(){
		if(!isset(static::$machine_name)){
			throw new Exception("DatabaseObjectInvalidException: '\$machine_name' not set");
		}
		if(!isset(static::$attributes)){
			throw new Exception("DatabaseObjectInvalidException: '\$attributes' not set for class of machine_name '" . static::$machine_name . "'");
		}
	}

	private function parse_attributes(){
		foreach(static::$attributes AS $attribute_notation){
			$new_attr = new Attribute($attribute_notation);
			$new_attr_name = $new_attr->name;
			$this->attributes_storage[$new_attr_name] = $new_attr;
		}
	}

	protected static function getClassName(){
		return get_called_class();
	}

	private function validate_obligatory_methods(){
		foreach($this->attributes_storage AS $attribute){
			if($attribute->mode[0]=="c"){
				$method_name = "get" . ucfirst($attribute->name);
				if(!method_exists($this, $method_name)){
					$attribute_name = $attribute->name;
					throw new Exception("DatabaseObjectException: if attribute $attribute_name is in 'c' (computed) mode, it has to be accessiblewith a get[ParamName] method.");
				}
				$reflection = new ReflectionMethod($this, $method_name);
				$class_name = static::getClassName();
				if($reflection->isPublic()){
					throw new Exception("DatabaseObjectException: method $method_name in class $class_name mustn't be public.");	
				}
			}
		}
	}
	
	public function __construct($data){
		$this->validate();
		$this->parse_attributes();
		$this->validate_obligatory_methods();
		$this->load($data);
	}

	private function attribute_exists($attribute_name){
		return isset($this->attributes_storage[$attribute_name]);
	}

	private function insertData($data){
		foreach($data AS $key=>$value){
			/*if(isset($data[$key])){
			 	$this->$key = $data[$key];
			}*/		
			if($this->attribute_exists($key)){
				$this->setRawAttribute($key, $value);
				$temp_attr = $this->attributes_storage[$key];
				if($temp_attr->is_cached() && $value==Null){
					$function_name = self::getGetFunctionName($key);
					$temp_attr->setValue($this->$function_name());
				}
			}
		}
	}

	private static function getGetFunctionName($attribute_name){
		return "get" . ucfirst($attribute_name);
	}

	private function setRawAttribute($attr_name, $attr_value, $raw=true){
		if($this->attribute_exists($attr_name)){
			if($raw){
				$this->attributes_storage[$attr_name]->setRawValue($attr_value);				
			}else{
				$this->attributes_storage[$attr_name]->setValue($attr_value);				
			}
		}else{
			throw new Exception("DatabaseObjectException: attribute $attr_name does not exists in class " . static::getClassName() . " for machine name " . static::$machine_name);
		}
	}

	public function setAttribute($attr_name, $attr_value){
		$this->setRawAttribute($attr_name, $attr_value, false);
	}

	private function getTableName(){
		return databaseObject::$table_prefix . static::$machine_name;
	}

	private function generateQueryColumnsString(){
		$attribute_names = array("id");
		foreach($this->attributes_storage AS $attribute){
			$attribute_names[] = $attribute->name;
		}
		$ret = "";
		foreach($attribute_names AS $attribute_name){
			$ret.=$attribute_name;
			if($attribute_name!=end($attribute_names)){
				$ret.=", ";
			}
		}
		return $ret;
	}

	private function getMissingColumns(){
		
	}

	private function rebuildTableStructure(){
		$missing_columns = $this->getMissingColumns();
	}

	private function getRow($id){
		$db = Database::connectPDO();
		$attribute_list = self::generateQueryColumnsString();
		$query = "SELECT $attribute_list FROM ". $this->getTableName() . " WHERE id=?";
		try{
			$rows= Database::prepareAndExecute($query, array($id));			
		}catch(Exception $e){
			$error_no = $e->errorInfo[0];
			if($error_no =="42S22"){
				$this->rebuildTableStructure();
			}
		}
		return $rows[0];
	}

	private function load($attrib){
		$attrib_type = gettype($attrib);
		if($attrib_type=="integer" || $attrib_type=="string"){
			//attrib is id
			$data = $this->getRow($attrib);
			$this->id = $attrib;
		}else{
			//attrib is row
			$data = $attrib;
			if(!isset($data["id"])){
				throw new Exception("DatabaseObjectException: Reading object from array, but id attribute is not present.");
			}
			$this->id = $data["id"];
		}
		$this->insertData($data);	
	}

	public function fromRow($row){
		$ret = new static(null);
		$ret->insertData($row);
		return $ret;
	}
	
	public function getAttr($attr_name){
		if($this->attribute_exists($attr_name)){
			return $this->attributes_storage[$attr_name]->getValue();		
		}else{
			return NULL;
		}
	}
	
	public function setAttr($key, $value){
		self::set(array($key=>$value));
	}

	public function set($array){
		$table = $this->getTableName();
		/*foreach($array AS $key=>$value){
				$this->$key = $array[$key];
				$db = Database::connectPDO();
				$query = "UPDATE " . $table . " SET $key=? WHERE id=?";
				$stmt = $db->prepare($query);
				$stmt->execute(array($value, $this->getAttr("id")));
		}*/
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

	public function getData(){
		$ret = array();
		$ret["id"] = $this->id;
		foreach($this->attributes_storage AS $key=>$value){
			$ret[$key] = $value->getValue();
		}
		return $ret;
	}

	//abstract function cache_invalidation_on_change($attribute_name, $new_value);
}

