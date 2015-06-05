var start = function(sentence){
	var words = sentence.toUpperCase().split(" ");
	var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var letter = '';
	var mostLetterStart = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(var i = 0; i < words[i].length; i++){
		for(var j = 0; j < letters.length; j++){
			if(letters[j] === words[i][0]){
				mostLetterStart[j] += 1;
			}
		};
	};

		var max = mostLetterStart[0]
		for(var i = 0; i < mostLetterStart.length; i++){
			if(max < mostLetterStart[i+1]){
				max = mostLetterStart[i+1];
				letter = letters[i+1]
			}
		}
	return letter;
}


