app.controller('user', ['$scope', 'user',
	function ($scope, user) {
		$scope.user = user;
		$scope.log = function () {}
	}
]);

app.controller('navigation', ['$scope',
	function ($scope) {
		$scope.show_navigation = false;

		$scope["switch"] = function () {
			$scope.show_navigation = !$scope.show_navigation;
		}
	}
])

app.controller('home', ['$scope', '$http', 'user',
	function ($scope, $http, user) {
		$scope.recommendations = [];

		user.refresh();

		$scope.user = user;

		$http.get('/api/recom')
			.success(function (data) {
				$scope.recommendations = data;
			})

		$scope.scores = [];
		$scope.current_score = '';
		$scope.streak_status = {};
		$scope.score_lookBehind = 30;
		$scope.score_loaded = false;

		$scope.refreshChart = function (lookBehind) {
			$http.get('/api/scoreboard?amount=' + lookBehind)
				.success(function (data) {
					$scope.scores = data;
					$scope.current_score = data[0]['me'];
					$http.get("/api/streak_status")
						.success(function (data) {
							$scope.streak_status = data;
							$scope.score_loaded = true;
						})
				})
		}

		$scope.refreshChart($scope.score_lookBehind);

		$scope.$watch('score_lookBehind', function (newVal) {
			$scope.refreshChart(newVal);
		})

	}
])

app.controller('exercise_list', ['$scope', '$http', '$routeParams',
	function ($scope, $http, $routeParams) {
		console.log($routeParams);
		$scope.exercise_list_loaded = false;
		$scope.exercises = [];
		$scope.filter = {
			muscle_part: 'all'
		}

		$scope.sort = 'days_since_last_exercise';

		$scope.muscle_parts = [{
			id: 'all',
			name: 'any'
		}];

		$scope.filterExercises = function (exercise) {
			var muscle_part = $scope.filter.muscle_part;
			if (muscle_part == 'all') {
				return true;
			} else {
				if (muscle_part == exercise.muscle_part_id) {
					return true;
				}
			}
			return false;
		}

		$scope.getMuscleName = function () {
			for (var i in $scope.muscle_parts) {
				if ($scope.muscle_parts[i].id == $scope.filter.muscle_part) {
					return $scope.muscle_parts[i].name;
				}
			}
		}

		$scope.$watch('filter.muscle_part', function (newVal) {

		})

		$http.get('/api/exercises')
			.success(function (data) {
				$scope.exercises = data;
				for (var i in data) {
					var muscle_part = {
						id: data[i].muscle_part_id,
						name: data[i].type_name
					}
					var found = false;
					for (var j in $scope.muscle_parts) {
						if ($scope.muscle_parts[j].id == muscle_part.id) {
							found = true;
						}
					}
					if (!found) {
						$scope.muscle_parts.push(muscle_part);
					}
					data[i].days_since_last_exercise = parseInt(data[i].days_since_last_exercise);
				}
				if ($routeParams.muscle_type_name != undefined && $routeParams.muscle_type_name != 'all') {
					for (var i in $scope.muscle_parts) {
						if ($scope.muscle_parts[i].name == $routeParams.muscle_type_name) {
							$scope.filter.muscle_part = $scope.muscle_parts[i].id;
						}
					}
				}
				$scope.exercise_list_loaded = true;
			});
	}
]);


app.controller('new_exercise', ['$scope', '$http',
	function ($scope, $http) {

		$scope.exercise_list_loaded;
		$scope.muscle_parts = [];

		$scope.exercise_data = {
			name: "",
			muscle_part_id: "",
			muscle_part_name_custom: "",
			use_custom_muscle: false,
			template: {
				type: 'traditional',
				params: {
					traditional: {
						set_amount: 5
					},
					outside: {
						distance: true,
						avg_speed: true,
						calories: false,
						max_speed: false
					},
					fancy: {
						rows: [{
							name: "",
							unit: ""
						}]
					}
				}
			}
		}

		$scope.create = function () {
			var data = $scope.exercise_data;
			var params = {
				name: data.name
			};
			if (data.use_custom_muscle) {
				$http.post('/api/muscleParts', {
					name: data.muscle_part_name_custom
				})
					.success(function (data) {
						var muscle_id = data.id;
						$scope.postExercise(muscle_id);
					});
			} else {
				$scope.postExercise(data.muscle_part_id);
			}
		}

		$scope.postExercise = function (muscle_part_id) {
			var data = $scope.exercise_data;
			var params = {
				name: data.name,
				muscle_part_id: muscle_part_id
			};
			$http.post('/api/exercises', params)
				.success(function (data) {
					var exe_id = data.id;
					$scope.createSets(exe_id);
				})
		}

		$scope.createSets = function (exercise_id) {
			var data = $scope.exercise_data.template;
			var set_array = [];
			switch (data.type) {
			case 'traditional':
				for (var i = 1; i <= data.params.traditional.set_amount; i++) {
					var set = {
						name: "set #" + i,
						exercise_id: exercise_id,
						orderL: i,
						unit: 'reps'
					}
					set_array.push(set);
				}
				break;
			case 'outside':
				var subdata = data.params.outside;
				if (subdata.avg_speed) {
					set_array.push({
						name: 'avg speed',
						exercise_id: exercise_id,
						orderL: 2,
						unit: 'km/h'
					})
				};
				if (subdata.calories) {
					set_array.push({
						name: 'calories burned',
						exercise_id: exercise_id,
						orderL: 3,
						unit: 'kcal'
					})
				};
				if (subdata.distance) {
					set_array.push({
						name: 'distance',
						exercise_id: exercise_id,
						orderL: 1,
						unit: 'km'
					})
				}
				if (subdata.max_speed) {
					set_array.push({
						name: 'max speed',
						exercise_id: exercise_id,
						orderL: 4,
						unit: 'km/h'
					})
				}
				break;
			case "fancy":
				var custom_templates = data.params.fancy.rows;
				for (var i in custom_templates) {
					set_array.push({
						name: custom_templates[i].name,
						orderL: i + 1,
						unit: custom_templates[i].unit,
						exercise_id: exercise_id
					});
				};
				break;
			}
			console.log(set_array);
			var amount_saved = 0;
			for (var i in set_array) {
				$http.post("/api/setTemplates", set_array[i])
					.success(function () {
						amount_saved++;
						if (amount_saved == set_array.length) {
							$scope.finish_saving(exercise_id);
						}
					})
			}
		}

		$scope.finish_saving = function (exercise_id) {
			document.location.hash = '/exercise/' + exercise_id;
		}

		$scope.status = {};

		$scope.add_fancy_row = function () {
			$scope.exercise_data.template.params.fancy.rows.push({
				name: "",
				unit: ""
			})
		}

		$scope.remove_fancy_row = function (index) {
			$scope.exercise_data.template.params.fancy.rows.splice(index, 1);
		}

		$scope.validateTemplate = function () {
			var data = $scope.exercise_data;
			var template = data.template;
			switch (template.type) {
			case "traditional":
				if (parseInt(template.params.traditional.set_amount) > 0) {
					return {
						status: "ok"
					}
				} else {
					return {
						status: "error"
					}
				}
				break;
			case "outside":
				var correct = true;
				for (var i in template.params.outside) {
					if (typeof template.params.outside[i] != "boolean") {
						correct = false;
					}
				}
				if (correct) {
					return {
						status: "ok"
					}
				} else {
					return {
						status: "error"
					}
				}
				break;
			case "fancy":
				var rows = template.params.fancy.rows;
				var correct = true;
				for (var i in rows) {
					if (rows[i].name.length == 0 || rows[i].unit.length == 0) {
						correct = false;
					}
				}
				if (correct) {
					return {
						status: "ok"
					}
				} else {
					return {
						status: "error"
					}
				}
				break;
			}
		}

		$scope.validateName = function (name) {
			var status = 'ok';
			var message = "ok!";
			if (name == "") {
				return {};
			}
			if (name.length < 4 && name.length > 0) {
				status = 'error';
				message = 'too short!'
			}
			for (var i in $scope.exercises) {
				if ($scope.exercises[i].name.toLowerCase() == name.toLowerCase()) {
					status = 'error'
					message = 'already exists!';
				}
			}
			return {
				status: status,
				message: message
			}
		}

		$scope.getStatus = function () {
			var name_ok = $scope.validateName($scope.exercise_data.name)
				.status != 'error' && $scope.exercise_data.name.length > 4;
			var type_ok = $scope.exercise_data.muscle_part_id != "" || ($scope.exercise_data.use_custom_muscle && $scope.exercise_data.muscle_part_name_custom != "");
			var template_ok = $scope.validateTemplate()
				.status != 'error';
			return {
				name_ok: name_ok,
				type_ok: type_ok,
				template_ok: template_ok
			}
		}

		$scope.statusOK = function () {
			var status = $scope.getStatus();
			for (var i in status) {
				if (status[i] == false) {
					return false;
				}
			}
			return true;
		}

		$http.get('/api/exercises')
			.success(function (data) {
				$scope.exercises = data;
				for (var i in data) {
					var muscle_part = {
						id: data[i].muscle_part_id,
						name: data[i].type_name
					}
					var found = false;
					for (var j in $scope.muscle_parts) {
						if ($scope.muscle_parts[j].id == muscle_part.id) {
							found = true;
						}
					}
					if (!found) {
						$scope.muscle_parts.push(muscle_part);
					}
				}
				$scope.exercise_list_loaded = true;
			});


	}
]);

app.controller('exercise', ['$scope', '$http', '$routeParams',
	function ($scope, $http, $routeParams) {
		$scope.data_loaded = false;

		$scope.log_loaded = false;

		$scope.round = Math.round;

		$http.get('/api/exercises/' + $routeParams.id)
			.success(function (data) {
				$scope.data_loaded = true;
				$scope.exercise = data;
				$scope.exercise.show_in_recom = parseInt($scope.exercise.paused) == 0;
			})

		$http.get('/api/exercises/' + $routeParams.id + "/log?count=10")
			.success(function (data) {
				$scope.log_loaded = true;
				$scope.log = data;
			})

		$scope.adjust_paused = function () {
			$scope.exercise.paused = $scope.exercise.show_in_recom ? 0 : 1;
			$http.post("/api/exercises/" + $routeParams.id, $scope.exercise);
		}

		$scope.negatePaused = function () {
			$scope.exercise.show_in_recom = !$scope.exercise.show_in_recom;
			$scope.adjust_paused();
		}
	}
])

app.controller('exercise_go', ["$scope", "$http", "$routeParams", "music_player", "$rootScope", 'metronome', 'user', 'notifSound',
	function ($scope, $http, $routeParams, music_player, $rootScope, metronome, user, notif) {
		$scope.exercise_loaded = false;

		var d = new Date();
		$scope.start_time = d.getTime();

		$scope.exercise;

		$scope.template;

		$scope.metronome_active = false;

		$scope.music_paused = false;

		$scope.current_set_no = 0;

		$scope.current_set_template = {};

		$scope.last_result = {};

		$scope.timer = user.timer

		$scope.results = [];

		$scope.mode = 'set'; //set|timer

		$scope.time_waited = 0;

		$scope.time_waited_checkpoint;

		$scope.startTimer = function (amount) {
			$scope.mode = 'timer';
			$scope.timer = amount;
			var d = new Date();
			var start = d.getTime();
			$scope.time_waited_checkpoint = start;
			$scope.timerTick(start, amount);
		}

		$scope.timerTick = function (start, amount) {
			var d = new Date();
			var cur = d.getTime();
			var dif = Math.floor((cur - start) / 1000);
			$scope.time_waited += cur - $scope.time_waited_checkpoint;
			$scope.time_waited_checkpoint = cur;
			$scope.timer = amount - dif;
			if (dif < amount && $scope.mode == 'timer') {
				setTimeout(function () {
					$scope.timerTick(start, amount);
					$scope.$apply();
				}, 1000);
			}
			if (dif >= amount) {
				notif.play();
				$scope.nextSet();
			}
		}

		$scope.next = function () {
			$scope.music_fadeOut(100);
			metronome.pause();
			if ($scope.current_set_no == $scope.exercise.setTemplates.length) {
				$scope.finish();
			} else {
				$scope.startTimer(user.timer);
			}
		}

		$scope.metronome = {
			play: function () {
				metronome.play();
			},
			pause: function () {
				metronome.pause();
			}
		}

		$scope.$watch('metronome_active', function (newVal) {
			if (newVal) {
				$scope.metronome.play();
				$scope.setMusicVolume(5);
			} else {
				$scope.metronome.pause();
				$scope.setMusicVolume(100);
			}
		})

		$scope.setMusicVolume = function (volume) {
			music_player.setVolume(volume);
		}

		$scope.$watch('music_paused', function (newVal) {
			if (newVal) {
				$scope.music_pause();
			} else {
				$scope.music_play();
			}
		})

		function handleChange() {
			if (document.location.hash.indexOf('/go') == -1) {
				$scope.music_fadeOut(500);
				metronome.pause();
				console.log('fadingOut');
			}
		};

		window.onhashchange = handleChange;
		window.onclick = handleChange;

		$scope.music_fadeOut = function (dur) {
			music_player.fadeOut(dur);
			setTimeout(function () {
				$scope.music_pause();
			}, dur);
		}

		$scope.nextSet = function () {
			if ($scope.current_set_no < $scope.exercise.setTemplates.length) {
				$scope.mode = 'set';
				$scope.music_play();
				$scope.current_set_template = $scope.template[$scope.current_set_no];
				$scope.current_set_no += 1;
			} else {
				$scope.finish();
			}
		}

		$scope.finish = function () {
			$scope.mode = 'finish';
			var d = new Date();
			$scope.end_time = d.getTime();
		}

		$scope.music_pause = function () {
			music_player.pause();
			$scope.music_paused = true;
		}

		$scope.music_play = function () {
			music_player.play();
			$scope.music_paused = false;
		}

		$scope.music_reset = function () {
			music_player.reset();
		}

		$scope.saving = false;
		$scope.saved = false;

		$scope.save = function () {
			console.log('saving');
			var params = {
				exercise_id: $scope.exercise.id,
				result: $scope.results,
				type: 'regular',
				begin_time: Math.round($scope.start_time / 1000),
				duration_s: Math.floor(($scope.end_time - $scope.start_time - $scope.time_waited) / 1000)
			}
			$scope.saving = true;
			$http.post('/api/log/', params)
				.success(function (data) {
					$scope.saving = false;
					$scope.saved = true;
				});
		}

		$http.get('/api/exercises/' + $routeParams.id)
			.success(function (data) {
				$scope.exercise = data;
				$scope.template = data.setTemplates;
				var c = 0;
				for (var i in $scope.template) {
					c++;
				}
				$scope.current_set_template = data.setTemplates[0];
				$scope.template.length = c;
				$http.get('/api/exercises/' + $routeParams.id + '/log?count=1')
					.success(function (data) {
						$scope.last_result = data[0];
						$scope.exercise_loaded = true;
						$scope.music_reset();
						$scope.nextSet();
						for (var i = 0; i < c; i++) {
							//$scope.results[i] = Math.ceil($scope.last_result.results[i].result*$scope.exercise.multiplier);
							$scope.results[i] = $scope.exercise.recommendations[i];
						}
					})
			})
	}
]);


app.controller('history', ['$scope', '$http',
	function ($scope, $http) {
		$scope.history = [];

		$scope.history_loaded = false;

		$http.get('/api/points?count=100')
			.success(function (data) {
				$scope.history = data;
				$scope.history_loaded = true;
			})
	}
])

app.controller('exercise_log', ['$scope', '$http', '$routeParams',
	function ($scope, $http, $routeParams) {
		$scope.loaded = false;
		$scope.exercises = [];
		$scope.results = [];

		$scope.type = 'regular';

		$scope.types = [{
			id: 'regular',
			name: 'preset routine'
		}, {
			id: 'custom',
			name: 'custom'
		}];

		$scope.saved = false;

		$http.get('/api/exercises')
			.success(function (data) {
				$scope.exercises = data;
				var chosen_id = $routeParams.id;
				for (var i in data) {
					if (data[i].id == chosen_id) {
						$scope.exercise = data[i];
					}
				}
				$http.get('/api/muscleParts')
					.success(function (data) {
						$scope.loaded = true;
						$scope.muscle_parts = data;
					})
			});

		$scope.save = function () {
			var date = Math.round(Date.parse($scope.begin_time) / 1000);
			var exercise_id = $scope.exercise.id;
			var results = $scope.results;
			var duration = $scope.duration_s;
			var params = {
				type: $scope.type,
				begin_time: date,
				exercise_id: exercise_id,
				result: results,
				duration_s: duration,
				muscle_part_id: $scope.muscle_part_id,
				name: $scope.custom_name
			}
			if ($scope.type == 'regular') {
				params.result = results;
			} else {
				params.result = $scope.custom_result;
			}
			$http.post('/api/log', params)
				.success(function (data) {
					$scope.saved = true;
					//alert('hash');
					document.location.hash = "/logs/" + JSON.parse(data);
				})
		}
	}
]);

app.controller('log', ['$scope', '$http', '$routeParams',
	function ($scope, $http, $routeParams) {
		$scope.log = {};



		$scope.exercise = {};

		$scope.loaded = false;

		$http.get('/api/log/' + $routeParams.logId)
			.success(function (data) {
				$scope.log = data;
				if (data.type == 'regular') {
					$http.get('/api/exercises/' + data.exercise_id)
						.success(function (data) {
							$scope.exercise = data;
							$scope.loaded = true;
						})
				} else {
					$scope.loaded = true;
				}
			})
	}
])