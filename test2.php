<pre>
<?

include "api/apiCache.php";

new ApiCacheRule("/api/workouts/#id");

new ApiCacheRule("/api/history/log/#lol");

new ApiCacheRule("/hamster/a/#dentist");


var_dump(ApiCacheRuleCollection::$collection);