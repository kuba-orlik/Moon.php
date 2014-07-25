<?

include "Moon.php";

Moon::require_class("exercise");

$exer = new Exercise(32);

var_dump($exer);

var_dump($exer->getData());