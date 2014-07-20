/*var better_resource_module = angular.module('better_resource', ['ngResource']);

better_resource_module.factory('btrResource', ['$resource', '$rootScope', function($resource, $rootScope){
	function factory(url, param_defaults, actions){
		var test = $resource(url, param_defaults, actions);

	    test.orig_get = test.get;

	    test.orig_query = test.query;

	    function setUpChangeWatch(instance){
				instance.unsaved = false;
	    		$rootScope.$watch(function(){
	    			return instance;
	    		}, function(newValue, oldValue) {
	    			//console.log('comparing');
			       	if(angular.equals(newValue, oldValue)){
			       		return;
			       	}
			       var changed_indexes = [];
			       for(var i in newValue){
			       		console.log(i);
				   		if(!angular.equals(newValue[i], oldValue[i])){
				   			//console.log("change:", i);
				       		changed_indexes.push(i);
				       	}
			       }
			       var dont_check = ['unsaved', '$$hashKey', 'howl', 'playing'];
			       var dont_check_sum = 0;
			       for(var i in dont_check){
			       		for(var j in changed_indexes){
			       			if(changed_indexes[j]==dont_check[i]){
			       				dont_check_sum++;
			       			}
			       		}
			       }
			       if(newValue != null && oldValue != null && !(changed_indexes.length==dont_check_sum)){
			        	//console.log('detected change. setting unsaved to true', changed_indexes);
			            instance.unsaved = true;
			        }
			       
			    }, true);

	    }

	    test.query = function(options, callback){
	    	var ret = test.orig_query(options, function(data){
	    		for(var i in data){
	    			setUpChangeWatch(data[i]);
	    		}
	    		if(callback!=undefined){
	    			callback();
	    		}
	    	});
	    	return ret;
	    }

	    test.get = function(options, callback){
	    	var instance = test.orig_get(options, function(){
	    		setUpChangeWatch(instance);
			    if(callback!=undefined){
			    	callback();
		    	}
	    	});
		    return instance;
	    }

	    test.prototype.orig_save = test.prototype.$save;

	    function callIfDefined(callback){
	    	if(callback!=undefined){
    			callback();
			}
	    }

	    test.prototype.$save = function(callback){
	    	////console.log('inside save');
	    	if(this.unsaved){
		    	var ret= this.orig_save( function(){
		    		this.unsaved = false;    
		    		callIfDefined(callback)		
		    	})	    		
	    	}else{	
	    		var ret = this;
	    		callIfDefined(callback)
	    	}
			return ret;
	    }

	    return test; 
	}

	return factory;
}])*/

var better_resource_module = angular.module('better_resource', ['ngResource']);

better_resource_module.factory('btrResource', ['$resource', '$rootScope', function($resource, $rootScope){
	function factory(url, param_defaults, actions){
		var test = $resource(url, param_defaults, actions);

	    test.orig_get = test.get;

	    test.orig_query = test.query;

	    function setUpChangeWatch(instance){
	    		console.log('setting up watch');
				instance.unsaved = false;
	    		$rootScope.$watch(function(){
	    			//return angular.toJson(instance);
	    			return instance;
	    		}, function(newValue, oldValue) {
	    			//console.log('watch fired');
			       if(angular.equals(newValue, oldValue)){
			       		return;
			       }
			       var changed_indexes = [];
			       for(var i in newValue){
			       		//console.log(i);
				   		if(!angular.equals(newValue[i], oldValue[i])){
				       		changed_indexes.push(i);
				       	}
			       }
			       var dont_check = ['unsaved', '$$hashKey'];
			       var dont_check_sum = 0;
			       for(var i in dont_check){
			       		for(var j in changed_indexes){
			       			if(changed_indexes[j]==dont_check[i]){
			       				dont_check_sum++;
			       			}
			       		}
			       }
			       if(newValue != null && oldValue != null && !(changed_indexes.length==dont_check_sum)){
			        	console.log('detected change. setting unsaved to true', changed_indexes);
			            instance.unsaved = true;
			        }
			       
			    }, true);

	    }

	    test.query = function(options, callback){
	    	var ret = test.orig_query(options, function(data){
	    		//console.log(data);
	    		for(var i in data){
	    			setUpChangeWatch(data[i]);
	    		}
	    		if(callback!=undefined){
	    			callback();
	    		}
	    	});
	    	return ret;
	    }

	    test.get = function(options, callback){
	    	var instance = test.orig_get(options, function(){
	    		setUpChangeWatch(instance);
			    if(callback!=undefined){
			    	callback();
		    	}
	    	});
		    return instance;
	    }

	    test.prototype.orig_save = test.prototype.$save;

	    function callIfDefined(callback){
	    	if(callback!=undefined){
    			callback();
			}
	    }

	    test.prototype.$save = function(callback){
	    	//console.log('inside save');
	    	if(this.unsaved){
		    	var ret= this.orig_save( function(){
		    		this.unsaved = false;    
		    		callIfDefined(callback)		
		    	})	    		
	    	}else{	
	    		var ret = this;
	    		callIfDefined(callback)
	    	}
			return ret;
	    }

	    return test; 
	}

	return factory;
}])