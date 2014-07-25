<?
include "config.php";
include "classes/exercises.php";
$exercise = new Exercise(195);
$exercise->rebuildResultsJSON();