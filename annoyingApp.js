var areWe = false;


while (!areWe) {
	
	var answer = prompt("Are we there yet?");
	var yesInd = answer.indexOf("yes");
	var yeahInd = answer.indexOf("yeah");

	if (yesInd >= 0 || yeahInd >= 0) {
		
		areWe = true;
	}
}
alert("Yes, now shut up!");
