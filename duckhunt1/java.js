var directions = ["N","NE", "E", "SE", "S", "SW", "W", "NW"]
var posLeft = 450;
var posTop = 250;
var duck= document.getElementById("duck")
wacht()


function moveDuck(){
	
var number = Math.floor((Math.random() * 7)) ;
vdirections = directions[number];
console.log(posLeft)



	if(posLeft >= 1050){
		reset()
	}

	if(posTop >= 539){
		reset()
	}



	if(vdirections == "E"){
		posLeft = posLeft + 50;
		duck.style.left = posLeft + "px";
	}

	else if(vdirections == "N"){
		posTop = posTop - 50;
		duck.style.top = posTop + "px";
	}
	
	else if(vdirections == "NE"){
		posTop = posTop - 50;
		posLeft = posLeft + 50;
		duck.style.top = posTop + "px";
		duck.style.left = posLeft + "px";

	}
	else if(vdirections == "SE"){
	posLeft = posLeft + 50;
	duck.style.left = posLeft + "px";	
	posTop = posTop + 50;
		duck.style.top = posTop + "px";
	}
	else if(vdirections == "SW"){
	posLeft = posLeft - 50;
		duck.style.left = posLeft + "px";
	posTop = posTop + 50;
		duck.style.top = posTop + "px";
	}

	else if(vdirections == "NW"){
	posTop = posTop - 50;
		duck.style.top = posTop + "px";
	posLeft = posLeft - 50;
		duck.style.left = posLeft + "px";
	}
	else if(vdirections == "W"){
		posLeft = posLeft - 50;
		duck.style.left = posLeft + "px";
	}	
	


	else{ //s
		posTop = posTop + 50;
		duck.style.top = posTop + "px";
	}
}

function wacht(){
setInterval(function(){
  moveDuck()
}, 250); 
}

	function reset(){
		console.dir(duck);
		posLeft = 500
		posTop = 200
		duck.style.top = 200 + "px"
		duck.style.left = 500 + "px"
		}