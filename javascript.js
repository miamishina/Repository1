var myArray = [ [0,0,0], [0,0,0], [0,0,0] ];

function changeImage(z) {
	
    var image = document.getElementById(z);
	
	var x = image.getAttribute('data-x');
	var y = image.getAttribute('data-y');
	
    if (image.src.match("base")) {
        image.src = "krestic.jpg";
		myArray[x][y] = 1;
		
		//checkWin();
		
		computerPlayerDoStep(x, y);
		
		//checkWin();
    } else {
		alert ('В это поле уже сделан ход!' + myArray);
	}
	
}

//checkWin = function() {
		
//}

computerPlayerDoStep = function(x, y) {	


	for (var i=-1;i<2;i++){
		for (var j=-1;j<2;j++){
			var m = x+i;
			var l = y+j;
			if (myArray[m][l] && myArray[m][l]===0) {
				var el = document.querySelector('[data-x="' + m + '"][data-y="' + l + '"]');
				if(el) {
					el.src = 'nolik.jpg';
					myArray[m][l] = 2;
					i = 3;
					j = 3;
				}
			}
		}
	}
}

