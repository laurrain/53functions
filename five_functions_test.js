QUnit.test("testing hello function", function(assert){
    var result = hello();
    assert.equal(result, "hello world", "We are expecting 'hello world'");
  
});

QUnit.test("testing hello_uppercase function", function(assert){
   var result = hello_uppercase("Laurrain");
    assert.equal(result, "hello,LAURRAIN!", "we are expecting the name in uppercase");
  
});

QUnit.test("testing hello_joe function", function(assert){
if(assert){
    assert.equal(hello_joe("Bob"), "Hello!", "We are expecting Hello,");
    assert.equal(hello_joe("Joe"), "Hello!", "We are expecting Hello,");
}else if(assert){
    assert.equal(hello_joe("LAURRAIN" ),"Hello, LAURRAIN!", "We are xpecting Hello, LAURRAIN" );
  }
});

QUnit.test("testing number_list function", function(assert){

    assert.equal(number_list(10), "1,2,3,4,5,6,7,8,9,10");
  
});

QUnit.test("testing sum of a list function", function(assert){

    assert.equal(sum_numbers(8), "1,3,6,10,15,21,28,36");
  
});


