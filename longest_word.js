var longest_word = function(sentence){
	var words = sentence.split(" ");
	var longer_word = words[0];
	for(var i = 0; i < words.length; i++){
		if(words[0].length < words[i].length){
			words[0] = words[i].length;
			longer_word = words[i];
		}
	};
	return longer_word.length;
}