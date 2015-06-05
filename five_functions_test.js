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

    assert.equal(sum_numbers(8), "1,3,6,10,15,21,28,36","Expecting sum equal 8");
  
});

QUnit.test("testing string lenght", function(assert){

    assert.equal(length("frank Bower"), "11", "we are expecting 11");
  
});

QUnit.test("testing string uppercase", function(assert){

    assert.equal(upper("frank Bower"), "FRANK BOWER", "we are expecting FRANK BOWER");
  
});

QUnit.test("testing reverse string", function(assert){

    assert.equal(reverse("frank Bower"), "rewoB knarf", "we are expecting rewoB knarf");
  
});

QUnit.test("testing string number", function(assert){

    assert.equal(hello_list(10), "hello world","expecting sum number string equal 10");
  
});

QUnit.test("testing high and low numbers", function(assert){
    assert.deepEqual(high_low([100,13,3,6]), [3, 100], "Expecting 3 and 10");
 
});

QUnit.test("testing number of words in a sentence", function(assert){
    assert.deepEqual(count_words("see how He love us"), 5, "Expecting 5");
 
});

QUnit.test("testing the longest word in a sentence", function(assert){
    assert.deepEqual(longest_word("see  how He love us"),"love4", "expected love 4");
 
});

QUnit.test("testing the length a sentence return the average word length rounded up&down", function(assert){
    assert.deepEqual(word_length("see how He love us!"), [0,1]);
 
});

QUnit.test("testing the length a sentence return the average word length rounded up", function(assert){
    assert.deepEqual(avg("see how He love us!"), 1);
});

QUnit.test("takes a sentence as a parameter and return the letter most words starts with", function(assert){
    assert.deepEqual(start("see how he love us to see his greatfullness!"), "H");
 
});

QUnit.test("takes a sentence as a parameter and return the letter most words end with", function(assert){
    assert.deepEqual(ends("see how he love us to see his greatfullness!"), "E");
 
});