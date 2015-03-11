var reverse = function(anyString){
	 var str = '';
  for (var i = anyString.length - 1; i >= 0; i--)
    str += anyString[i];
  return str;
}