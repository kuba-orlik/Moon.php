<?

new ApiAccessRule(
	"/api/workouts/#id",
	function(){return "all";});

new ApiAccessRule(
	"/api/workouts/#id/logs",
	function(){return "all";});