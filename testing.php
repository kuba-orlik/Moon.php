<?

include "Moon.php";

Moon::require_class("exercise");

Moon::start_ob_cache();

Moon::transaction_start();

$exercises = Exercise::getByUserID(26, "assoc");

var_dump($exercises);

Moon::end_ob_cache_and_terminate();


AttributeCacheControl::write_to_cache();

//Database::rollBack();
Moon::transaction_commit();