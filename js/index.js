// When the page is DOM (Document Object Model aka the page) is done loading run the code
document.addEventListener("DOMContentLoaded", function(event) {
	runProgram();
});


function appendImages() {
	for (var i = 99; i > 0; i -= 1) {
		var img = document.createElement("IMG");
		img.src = "images/beer.png";
		img.width = 30;
		img.height = 30;
		img.id = i;
		document.getElementById("root").appendChild(img);
	}
}


function runProgram() { 
	appendImages();
	var bottles = 99;
	var interval = setInterval(function() {
			var phrase = makePhrase(bottles);
		
			//phrase text print
			document.getElementById("phrase").innerHTML = phrase;

			//remove bottle of beer
			var bottle = document.getElementById(bottles);
			bottle.parentNode.removeChild(bottle);

			if (bottles === 1) {
				clearInterval(interval);	
				document.getElementById("btn").style.display = "block";
			}

			bottles -= 1

	}, 400)


}
function clickHandler(){
	runProgram();
	document.getElementById("btn").style.display = "none";
}

function makePhrase(bottles) {
	return '<div>' + bottles + ' bottles of beer on the wall, ' + bottles + ' bottles of beer. </div><div> Take one down, Pass it around...</div><div>' + (bottles - 1) + ' bottles of beer on the wall </div>';
}