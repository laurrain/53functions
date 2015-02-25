function sum_numbers(n){
   var sum = 0;
   var list = [];
  for (var i = 1; i <= n; i++) {
	  sum += i;
      list.push(sum);
  }
  
return list.toString();

}