<?

include "Moon.php";

Moon::require_class("exercise");

$exer = new Exercise(31);

var_dump($exer->getData());

AttributeCacheControl::write_to_cache();