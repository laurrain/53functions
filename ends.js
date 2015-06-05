var ends = function(sentence){
	var words = sentence.toUpperCase().split(" ");
	var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var letter = '';
	var mostLetterEnd = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	for(var i = 0; i < words[i].length; i++){
		for(var j = 0; j < letters.length; j++){
			if(letters[j] === words[i][words[i].length-1]){
				mostLetterEnd[j] += 1;
			}
		};
	};

		var max = mostLetterEnd[0]
		for(var i = 0; i < mostLetterEnd.length; i++){
			if(max < mostLetterEnd[i+1]){
				max = mostLetterEnd[i+1];
				letter = letters[i+1]
			}
		}
	return letter;
}
