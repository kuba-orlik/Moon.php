<?

include "config.php";
include "classes/exercises.php";

$exer = new Exercise(32);

var_dump($exer);

var_dump($exer->getData());