app.directive('sparkline', function(){
	return {
		restrict: 'E',
		replace: true,	
		scope:{
			data: "=data",
			tiny: "=tiny",
			width: "@",
			height: "@",
			zero: "@",
			stroke: "@"
		},
		template: "",
		controller: function($scope, $element, $attrs, $transclude){
			// create an SVG element inside the #graph div that fills 100% of the div

			// create a simple data array that we'll plot with a line (this array represents only the Y values, X will just be the index location)
			//var data = [1,2,3,4,5,4,5,6,5,6,7,8,7,8,9,10, 7, 6, 7.5, 8, 8.5];
			var data = $scope.data;

			console.log(data);

			$scope.$watch('data', function(newVal){
				$scope.generate(newVal);
			})

			$scope.generate = function(data){
				console.log('generate begin');
				console.log(data);
				var max = - Infinity;
				var min = Infinity;

				for(var i in data){
					data[i] = parseFloat(data[i]);	
					if(data[i]>max){
						max = data[i];
					}
					if(data[i]<min){
						min = data[i];
						console.log('new min: ', min);
					}
				}

				if($attrs.width==undefined){
					var width = 460;					
				}else{
					var width = $attrs.width;
				}

				if($attrs.height==undefined){
					var height = 180;					
				}else{
					var height = $attrs.height;
				}

				var position = 'absolute';

				if($scope.tiny==true){
					width = 100;
					height = 20;
					position = 'relative'
				}

				var graph = d3.select($element[0]).append("svg:svg").attr("width", "100%").attr("height", "100%").attr('viewBox', '0 0 ' + width + ' ' + height).attr('preserveAspectRatio', 'none').attr('style', 'width: 100%;height: 100%;display: block;position:' + position + ';top: 0px;left: 0px;');

				console.log(min, max);

				if($attrs.zero=="true"){
					var lower_end = 0;
				}else{
					var lower_end = min;
				}

				// X scale will fit values from 0-10 within pixels 0-100
				var x = d3.scale.linear().domain([0, data.length-1]).range([0, width]);
				// Y scale will fit values from 0-10 within pixels 0-100
				var y = d3.scale.linear().domain([lower_end, max]).range([height, 0]);

				// create a line object that represents the SVN line we're creating
				var line = d3.svg.line()
					// assign the X function to plot our line as we wish
					.x(function(d,i) { 
						// verbose logging to show what's actually being done
						// return the X coordinate where we want to plot this datapoint
						return x(i); 
					})
					.y(function(d) { 
						// verbose logging to show what's actually being done
						// return the Y coordinate where we want to plot this datapoint
						return y(d); 
					})
			
					// display the line by appending an svg:path element with the data line we created above
					graph.append("svg:path").attr("d", line(data));
				}
		}
	};
})




app.directive('pointschart', function(){
	return {
		restrict: 'E',
		replace: true,	
		scope:{
			data: "=data"
		},
		template: "",
		controller: function($scope, $element, $attrs, $transclude){
			
			$scope.$watch('data', function(newVal){
				console.log(newVal);
				$scope.generate(newVal);
			})

			$scope.generate = function(data){
				var margin = {top: 10, right: 0, bottom: 1, left: 0},
					width = 700 - margin.left - margin.right,
					height = 284 - margin.top - margin.bottom;

				var parseDate = d3.time.format("%Y-%m-%d").parse;

				var x = d3.time.scale()
					.range([0, width]);

				var y = d3.scale.linear()
					.range([height, 0]);

				var color = d3.scale.category10();

				var xAxis = d3.svg.axis()
					.scale(x)
					.orient("bottom");

				var yAxis = d3.svg.axis()
					.scale(y)
					.orient("left");

				var line = d3.svg.line()
					//.interpolate("basis")
					.x(function(d) { return x(d.date); })
					.y(function(d) { return y(d.temperature); });

				var svg = d3.select($element[0]).html('').append("svg")
					.attr("width", '100%')
					.attr("height", height + margin.top + margin.bottom)
					.attr('viewBox', '0 0 ' + width + ' ' + height)
				  .append("g")
					.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			  color.domain(d3.keys(data[0]).filter(function(key) { return key !== "date"; }));

			  var users = [];

			  for(var i in data[0]){
			  	if(i!='date'){
			  		users.push(i);
			  	}
			  }


			  data.forEach(function(d) {
				d.date = parseDate(d.date);
			  });

			  var cities = color.domain().map(function(name) {
				return {
				  name: name,
				  values: data.map(function(d) {
					return {date: d.date, temperature: +d[name]};
				  })
				};
			  });	



			  x.domain(d3.extent(data, function(d) { return d.date; }));

			  y.domain([
				d3.min(cities, function(c) { return d3.min(c.values, function(v) { return v.temperature; }); }),
				d3.max(cities, function(c) { return d3.max(c.values, function(v) { return v.temperature; }); })
			  ]);

			  svg.append("g")
				  .attr("class", "x axis")
				  .attr("transform", "translate(0," + height + ")")
				  .call(xAxis);

			  svg.append("g")
				  .attr("class", "y axis secondary")
				  .attr('transform', 'translate(44, 0)')
				  .call(yAxis);

			  var city = svg.selectAll(".city")
				  .data(cities)
				.enter().append("g")
				  .attr("class", "user");


			  city.append("path")
				  .attr("class", "line")
				  .attr("d", function(d) { return line(d.values); })
		//		  .style("stroke", function(d) { return color(d.name); });

				var legend_width = 80;
				var legend_element_height = 10;
				var legend_vertical_spacing = 8;
				var legend_horizontal_spacing = 5;
				//var legend_height = users.length*(legend_element_height + legend_vertical_spacing);

				 var legend = svg.append('g')
				 	.attr('class', 'legend secondary');

			 	var legend_rect = legend.append('rect')
			 		.attr('width', legend_width)
			 		.attr('height', users.length*15)
			 		.attr('style', 'fill:rgba(255,255,255,0.7)');
				 for(var i in users){
				 	legend.append('rect')
				 		.attr('width', 10)
				 		.attr('height', 10)
				 		.attr('transform', 'translate(' + legend_horizontal_spacing + ', ' + i*15 + ")")
				 		.attr('style', 'fill:' + color(users[i]));
			 		legend.append('text')
			 			.text(users[i])
			 			.attr('transform', 'translate(18, ' + (i*15+10) + ")");
				 }

				 var full_legend_width = legend[0][0].getBoundingClientRect().width;
				 var full_legend_height = legend[0][0].getBoundingClientRect().height;


				 legend_rect.attr('width', full_legend_width);

				 legend.attr('transform', 'translate(' + (width - full_legend_width - 40) + ", " + (height - full_legend_height) + ")" );
		 	}
		}
	};
})


app.directive('recommendationcard', function(){
	return {
        restrict: 'E',
        replace: true,	
        scope:{
        	recom: "=",
        },
        template: 
        	"<div class='card' style='position:relative; text-align:center'>" +
			"<span style='align-self:flex-start; z-index:2'><span ng-show='recom.type!=\"most_neglected\"'>Recommended</span><span ng-show='recom.type==\"most_neglected\"'>Most neglected</span> exercise:</span>" +
			"<span style='font-size:2.8rem; z-index:2'>" +
				"<a href='#/exercise/{{recom.exercise.id}}'>{{recom.exercise.name}}</a>" +
			"</span>" +
			"<span style='margin-top: -4px;padding-bottom: 8px; z-index:2'>" +
				"last exercised: {{recom.exercise.days_since_last_exercise}} days ago" +
			"</span>" +
			"<a class='button' style='z-index:2' href='#/exercise/{{recom.exercise.id}}/go'>exercise!</a>" +
			"<span style='margin-bottom: -8px; z-index:2;color:gray;font-weight:100'>" +
				"{{recom.exercise.estimated_duration/60 | number: 0}}min" +
			"</span>" +
			"<a class='secondary' href='#/exercises/{{recom.exercise.muscle_part_name}}' style='align-self:flex-end; z-index:2; transition-delay:100ms'>other exercises for {{recom.exercise.muscle_part_name}}</a>" +
			"<sparkline class='secondary' data='recom.exercise.results' style='width:100%; height:100%; position:absolute; top:0px; left:0px;'></sparkline>"+
		"</div>",
		controller: function($scope, $element, $attrs, $transclude){
			console.log($scope.recom)
		}
    };
})

.directive('goto', ['$location', function($location) {
    return {
        link: function(scope, element, attrs) {
            element.on('click', function() {
                scope.$apply(function() {
                	//alert(attrs.goto);
                    $location.path(attrs.goto);
                });
            });
        }
    }
}]);