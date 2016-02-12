var myArray = [ [0,0,0], [0,0,0], [0,0,0] ];

function changeImage(z) {
	
    var image = document.getElementById(z);
	
	var x = image.getAttribute('data-x');
	var y = image.getAttribute('data-y');
	
    if (image.src.match("base")) {
        image.src = "krestic.jpg";
		myArray[x][y] = 1;
		
		//checkWin();
		
		computerPlayerDoStep();
		
		//checkWin();
    } else {
		alert ('В это поле уже сделан ход!' + myArray);
	}
	
}

//checkWin = function() {
		
//}

computerPlayerDoStep = function() {	
	
	for (var i=0;i<3;i++){
		for (var j=0;j<3;j++){
			console.log(myArray[i][j]);
			if (myArray[i][j]===0) {
				var el = document.querySelector('[data-x="' + i + '"][data-y="' + j + ']'");
				if(el) {
				el.src = 'nolik.jpg';
				myArray[i][j] = 2;
				i = 4;
				j = 4;
				}
			}
	}}

}