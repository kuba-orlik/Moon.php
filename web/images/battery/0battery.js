console.log("begin");

var page = require('webpage').create();
page.viewportSize = { height: 100, width:1 };

page.onConsoleMessage = function (msg) { console.log(msg); };

page.open("about:blank", function(){
	page.evaluate(function(){
		window["generateElem"] = function(){
			var elem = document.createElement("img");
			elem.src="http://workout2.ikleks.pl/web/images/battery_cell.png";
			elem.style.height="100px";
			elem.style.width="41px";
			elem.style.marginRight="-25px";
			elem.style.position="relative";
			elem.style.display="inline-block";
			return elem;
		}

		window["insertElem"] = function(index){
			console.log("insert");
			var e = generateElem();
			e.style.zIndex=100-index;
			document.body.insertBefore(e);
			console.log(document.querySelectorAll("img").length);
		}

		document.body.style.whiteSpace="nowrap";
		document.body.style.marginRight="23px";
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = "img:last-child{margin-right:20px!important}";
		document.body.appendChild(css);

		insertElem(0);
	});
	page.render("0.png");
	window.setTimeout(function(){
		for(var i=1; i<=100; i++){
			console.log("render: ", i);
			page.render("battery/"+i+".png");
			page.evaluate(function(index){
				insertElem(index);
			}, i)
		}
		phantom.exit();
	}, 2000)
})

