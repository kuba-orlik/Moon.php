<?

include "Moon.php";

Moon::require_class("exercise");

$exercises = Exercise::getByUserID(26);

foreach($exercises AS $exercise){
	$exercise->getData();
}
AttributeCacheControl::write_to_cache();