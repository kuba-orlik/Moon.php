<?

function df($message){
 	if(DEBUG){
 		echo($message) . "<br>";
 	}
 }

 function dd($variable, $title=null){
 	if(DEBUG){
 		if($title!=null){
 			echo "$title: <br>";
 		}
 		var_dump($variable);
 	}
 }

define('DIR_BASE',      dirname( dirname( __FILE__ ) ) . '/workout/'); 
define('DIR_CLASSES',    DIR_BASE . 'classes/');
define('DATABASE_NAME', 'kuba_workout2');
define('DATABASE_USR', 'kuba_workout');
define('DATABASE_PWD', 'xxlxxlxxl8workout');
define('DOMAIN', "http://workout2.ikleks.pl");
define('DEFAULT_TIMER', 300);

define('SMTP_PASSWORD', "xxlxxlxxl8workout");
 

 ini_set("SMTP", "sun05.interpress.pl");
 ini_set("sendmail_from", "workout@ikleks.pl");

 define("DEBUG", false);

  