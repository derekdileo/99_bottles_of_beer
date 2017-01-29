// When the page is DOM (Document Object Model aka the page) is done loading run the code
document.addEventListener("DOMContentLoaded", function(event) {
	runProgram();
});

function appendImages() {
	for (var i = 99; i > 0; i -= 1) {
		var img = document.createElement("IMG");
		img.src = "images/beer.png";
		img.width = 20;
		img.height = 20;
		img.id = i;
		document.getElementById("root").appendChild(img);
	}
}


function runProgram() {
	console.log('Running Program...') 

	appendImages();
	var bottles = 99;
	var interval = setInterval(function() {
			var phrase = sentence(bottles);
		
			//phrase text print
			document.getElementById("phrase").innerHTML = phrase;

			//remove bottle of beer
			var element = document.getElementById(bottles);
			element.parentNode.removeChild(element);
			if (bottles === 0) {
				clearInterval(interval)
			}

			bottles -= 1

	}, 9000)

	alert('No more bottles');
}

function sentence(bottles) {
	return bottles + ' bottles of beer on the wall, ' + bottles + ' bottles of beer. Take one down, pass it around, ' + (bottles - 1) + ' bottles of beer on the wall\n';
}