var avg = function(sentence){
	var average = 0;
	var sum = 0;
	var words = sentence.split("");
	for(var i = 0; i < words[i].length; i++){
		sum += words[i].length;
	}
	average = sum/words.length;
	averageRounded = Math.ceil(average);
	return averageRounded;
}