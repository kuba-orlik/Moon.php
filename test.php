<?

/*$query = "lol  UPDATE users SET login_token=5c38b71b66ca87ed9c1279bde5aebe53 WHERE id=26 ";

echo strtoupper($query);

var_dump(strpos(strtoupper($query), "SET"));

$date = "2013-12-31";
//$date1 = str_replace('-', '/', $date);
var_dump(strtotime($date1));
$tomorrow = date('Y-m-d',strtotime($date . "-2 days"));

echo $tomorrow;*/

//phpinfo();

//include 'config.php';

//include "classes/points.php";
//include "classes/exercises.php";

//echo Points::cmpDates('2013-12-25', '2013-12-24');


//Points::recalculateForUser(26); 

/*$user = new User(26);

$exercises = $user->getExercises();

foreach($exercises AS $exercise){
	$exercise->refreshCachedData();
}*/

/*include "api/apiCache.php";

var_dump(new ApiCacheNotation('/api/exercises/#id/#action'));

$matches = array();

preg_match_all("/\/api\/exercises\/([^\/]+)\/([^\/]+)[\/]?/", "/api/exercises/132/logs/", $matches);

var_dump($matches);*/



echo('Text the user will see');
$size = ob_get_length();
header("Content-Length: $size");
ob_end_flush(); // Strange behaviour, will not work
flush(); // Unless both are called !
// Do processing here 
sleep(30);
echo('Text user will never see');