<?

include "Moon.php";

Moon::require_class("exercise");

Moon::start_ob_cache();

Moon::transaction_start();

$exercise = new Exercise(32);

var_dump($exercise->getData());

Moon::end_ob_cache_and_terminate();


AttributeCacheControl::write_to_cache();

//Database::rollBack();
Moon::transaction_commit();