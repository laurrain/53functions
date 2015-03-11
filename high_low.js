var high_low = function(numlist){
//numlist = [100,13,3,6];
var calculate = {
    min: function(values) {
        if(values.length == 0) {
            return NaN;
        } else if(values.length == 1) {
            var val = values.pop();
            if ( typeof val == "number" ) {
                return val;
            } else {
                return NaN;
            }
        } else {
            var val = values.pop();
            return Math.min(val, this.min(values))
        }
    },
    max: function(values) {
        if(values.length == 0) {
            return NaN;
        } else if(values.length == 1) {
            var val = values.pop();
            if ( typeof val == "number" ) {
                return val;
            } else {
                return NaN;
            }
        } else {
            var val = values.pop();
            return Math.max(val, this.max(values))
        }
    }
 
 }
    //calculate.min([100,13,3,6]);
    //calculate.max([100,13,3,6]);
     //var numb =[n1, n2];
     return [calculate.min([100,13,3,6]),calculate.max([100,13,3,6])];

 
}
//calculate.min([100,13,3,6]); 
//calculate.max([100,13,3,6]);

 