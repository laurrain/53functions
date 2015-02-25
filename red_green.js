

function RedOrGreen(element){
var newElement = document.createElement(element);	
var containerDiv = document.createElement("div");
containerDiv.style.width = "100px";
containerDiv.style.height = "100px";
containerDiv.style.display = "inline-box";
containerDiv.style.border = "none";
document.getElementById("mainContainer").appendChild(containerDiv);

this.makeGreen = function(res){
	newElement.style.backgroundColor = "green";
	newElement.innerHTML = "passed!" + res;
};

 this.makeRed = function(err){
    newElement.style.backgroundColor = "red";
	newElement.innerHTML = "failed!" + err;
    
   };

   containerDiv.appendChild(newElement);  
}



