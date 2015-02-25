//document.getElementById("myElement").style.backgroundColor = "green";
var rg = new RedOrGreen('myElement');

rg.makeRed();


if(document.getElementById("myElement").style.backgroundColor === "red"){
	//document.getElementById("myElement").style.backgroundColor = "green";
	alert("failed is red");	 
}else{
	alert("Not red");
}

rg.makeGreen();
	if(document.getElementById("myElement").style.backgroundColor === "green"){
	//document.getElementById("mySquare").style.backgroundColor = "green";
	alert("success is green");	 
}else{
	alert("Not green");
}





   