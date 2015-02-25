var total = 0;
var passed = 0;
var failed = 0;

var assert = {
	equals:function(expectedResult, returnResult){

         
		var myDiv = new RedOrGreen("div");

		if(expectedResult === returnResult){
			passed++;
			total = passed + failed;
			myDiv.makeGreen(' '+ returnResult);
			var newElement = document.createElement("p");
			newElement.innerHTML = "passed:" + passed + ' ' + "failed:" + failed + ' ' + "total:" + total;
		}else{
            failed++;
			total = passed + failed;
			myDiv.makeRed("<b> Expected: </b>" + expectedResult   + ' ' + "<b>but received:</b>" + ' ' + returnResult );
			var newElement = document.createElement("p");
			newElement.innerHTML = "passed:" + passed + ' ' + "failed:" + failed + ' ' + "total:" + total;
		}
			
		
		mainContainer.appendChild(newElement);
		
		
   }
}

var TestMyCode = {
      run:function(testfunction, functionToReturn){
      	
      	 functionToReturn(assert);
      	
      }
}
