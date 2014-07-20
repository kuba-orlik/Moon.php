<pre>
<?
include "../config.php";

include DIR_BASE . "apiv2/apiResponse.php";
include DIR_BASE . "apiv2/URLNotation.php";
include DIR_BASE . "apiv2/apiAccess.php";
include DIR_BASE . "apiv2/access_rules.php";
include DIR_BASE . "apiv2/apiCache.php";


dd(ApiAccessRulesCollection::$collection);

dd(ApiAccessRulesCollection::getElementByURLMatch("api/workouts/32/logs"));	