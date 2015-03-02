TestMyCode.run("testing hello function", function(assert){
    var result = hello();
    assert.equals("hello world", result);
  
});

TestMyCode.run("testing hello_uppercase function", function(assert){
   var result = hello_uppercase("Laurrain");
    assert.equals("hello,LAURRAIN!",result);
  
});

TestMyCode.run("testing hello_joe function", function(assert){
if(assert){
    assert.equals("Hello!",hello_joe("Bob"));
    assert.equals("Hello!",hello_joe("Joe"));
}else if(assert){
    assert.equals("Hello, LAURRAIN!", hello_joe("LAURRAIN" ));
  }
});

TestMyCode.run("testing number_list function", function(assert){

    assert.equals("1,2,3,4,5,6,7,8,9,10", number_list(10));
  
});

TestMyCode.run("testing sum of a list function", function(assert){

    assert.equals("1,3,6,10,15,21,28,36", sum_numbers(8));
  
});