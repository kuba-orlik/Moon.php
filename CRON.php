<?
require "config.php";
require "classes/users.php";
require "classes/PHPMailer/PHPMailerAutoload.php";
require "classes/CssToInlineStyles/CssToInlineStyles.php";

class EmailReminder{

	private static function prepareHtmlBody($user, $recom){

		$user_name = $user->getAttr("name");
		$current_points = $user->getScores(0, 1)[0]["me"];
		$points_scope = $current_points>0?"positive" : "negative";
		$current_combo = $user->getCurrentStreak();

		$battery_cell_size = 20;

		//for testing!
		//$current_combo=7;

		ob_start();
		?>
		<style>
		*, hello{
			line-height: 100%;
		}

		.card{
			padding:1rem;
			background-color:white;
			max-width: 32rem;
			margin: 1rem auto;
			border-width:0;
			border-style:solid;
			border-color:rgb(238,236,236);
			border-width:0 1rem;
			color:#555555;
			padding-bottom: 1rem;
		}

		a{
			color: #4d6f93;
			text-decoration:none;
		}

		.exercise-name{
			font-size:3rem;
			text-align:center;
			line-height:4rem;
			margin-bottom:1rem;
		}

		.hello{
			margin-top:1rem;
			font-size:3rem;
		}

		.center{
			text-align:center;
		}

		.main{
			color:#3f3f3f;
		}

		.score{
			font-size: 4rem;
			display: block;
		}

		.score.negative{
			color: #C27070;
		}

		.score.positive{
			color:#70C270;
		}

		.battery_cell{
			line-height: 100%;
			height: 80px;
			width: 33px;
			position:relative;
			display:inline-block;
		}

		.combo{
			font-size:5em;
			color: #4d6f93;
			line-height:100%;
			display:inline-block;
			vertical-align:text-bottom;
			margin-left:-23px;
		}

		.lightning, .battery{
			height: 5em;
			max-height:5em;
			vertical-align: text-bottom;
		}

		</style>
		<meta charset="utf-8">
		<div class="main" style='background-color: rgb(238,236,236); font-family:Roboto,Calibri,Helvetica,sans-serif; overflow:auto'>
			<div class="hello" style="text-align:center">
				Hello, <span class="username"><?=$user_name?></span>
			</div>
			<div class="center" style="margin-top:1rem" >
				Your current score is:
			</div>
			<div class="center">
				<span class="score  <?=$points_scope ?>">
					<?=$current_points?>
				</span>
			</div>
			<div class="card">
				<div>
					Current streak:
				</div>
				<div class="center" style="width:100%">
						<?if($current_combo>0){?>
						<img class="battery" src="<?=DOMAIN?>/web/images/battery/<?=$current_combo?>.png"/>
						<img class="lightning" src="<?=DOMAIN?>/web/images/lightning.png"/>
						<? } ?>
					<span class="combo">
						<?=$current_combo?>
					</span>
				</div>
			</div>
			<?
				foreach($recom AS $type=>$exercise){
					$exercise_id = $exercise->getAttr("id");
					$exercise_name = $exercise->getAttr("name");
					$exercise_daysAgo = $exercise->daysSinceLastSession();
			?>
			<div class="card">
				<div>
					Recommended exercise for today:
				</div>
				<div class="exercise-name">
					<a href="<?=DOMAIN?>/#exercise/<?=$exercise_id?>"><?=$exercise_name?></a>
				</div>
				<div style='text-align:center; margin-bottom:1rem'>
					last exercised <?=$exercise_daysAgo?> days ago
				</div>
				<div style='text-align:center'>
					<a href="<?=DOMAIN?>/#exercise/<?=$exercise_id?>/go" style="background-color: #4f7296;border: none;color: white;font-size: 1rem;padding: 6px 19px;border-radius: 2px;box-shadow: inset -1px -2px 0px 1px rgba(0, 0, 0, 0.3);cursor: pointer;text-decoration: none !important;-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;outline: none;transition: all 200ms;"> 
						exercise!
					</a>
				</div>
			</div>

			<?
				}
			?>
		</div>

		<?
		$html = ob_get_clean();
		$converter = new CssToInlineStyles($html);
		$converter->setUseInlineStylesBlock(true);
		$html = utf8_encode($converter->convert());
		echo $html;
		return $html;
	}

	private static function prepareHtmlTitle($user){
		$user_name = $user->getAttr("name");
		$current_points = $user->getScores(0, 1)[0]["me"];
		$title = "Hello, $user_name, you currently have $current_points workout points!";
		return $title;
	}

	private static function sendEmail($address, $subject, $content){
		/*echo "sending email to $address</br>";
		//$domain = str_replace("http://", "", DOMAIN);
		$domain = "ikleks.pl";
		$newsubject='=?UTF-8?B?'.base64_encode($subject).'?=';
		$header = 'FROM: workout@ikleks.pl' . // . $domain . "\r\n" .
    		'Reply-To: workout@ikleks.pl' . // . $domain . "\r\n" .
    		'Content-Type:text/html;charset=utf-8' . "\r\n".
    		'X-Mailer: PHP/' . phpversion();
    	echo $header;
   		$success = mail($address, $newsubject, $content, $header, "-fworkout@ikleks.pl");
		var_dump($success);
		if(!$success){
			echo "FAIL";
		}*/
		$mail = new PHPMailer();
		//$mail->CharSet = 'UTF-8';
		$mail->IsSMTP();
		$mail->CharSet = 'UTF-8';

		$mail->Host       = "127.0.0.1"; // SMTP server example
		$mail->SMTPDebug  = 1;                     // enables SMTP debug information (for testing)
		$mail->SMTPAuth   = true;                  // enable SMTP authentication
		$mail->Port       = 25;                    // set the SMTP port for the GMAIL server
		$mail->Username   = "workout@ikleks.pl"; // SMTP account username example
		$mail->Password   =  SMTP_PASSWORD; // SMTP account username example
		$mail->Subject 	  = $subject;
		$mail->Body 	  = $content;
		$mail->isHTML(true);
		//$mail->From 	  = "iKleks Coach <workout@ikleks.pl>";
		$mail->setFrom("workout@ikleks.pl", "iKleks Coach");
		$mail->AddAddress($address);
		

		$res = $mail->Send();


		var_dump($res);
		echo $mail->ErrorInfo;
	}

	private static function send_email_if_needed($user){
		$hour = date('H');
		$user_hour = $user->getAttr("reminder_hour");
		echo "$hour - $user_hour</br>";
		if($user_hour!=null){
			if($user_hour==$hour){
				$recommendations = $user->getRecommendations();
				$recom = $recommendations;
				$email_body = self::prepareHtmlBody($user, $recom);		
				$email_title = self::prepareHtmlTitle($user);	
				self::sendEmail($user->getAttr('email'), $email_title, $email_body);				
			}
		}
	}

	public static function process(){
		$all_users = Users::getAll();
		foreach($all_users AS $user){
			self::send_email_if_needed($user);
		}
	}
}

EmailReminder::process();

