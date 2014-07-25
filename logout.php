<?
require_once "config.php";
require_once "classes/users.php";

Users::getCurrentUser()->logout();

header('Location: /');