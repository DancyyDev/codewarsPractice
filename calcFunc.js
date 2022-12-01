// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function calculations( num, operation){
    if(!operation){
      return num
    } else {
      return operation(num)
    }
  }
  
  function zero(operations)   {return calculations(0, operations)}
  function one(operations)    {return calculations(1, operations)}
  function two(operations)    {return calculations(2, operations)}
  function three(operations)  {return calculations(3, operations)}
  function four(operations)   {return calculations(4, operations)}
  function five(operations)   {return calculations(5, operations)}
  function six(operations)    {return calculations(6, operations)}
  function seven(operations)  {return calculations(7, operations)}
  function eight(operations)  {return calculations(8, operations)}
  function nine(operations)   {return calculations(9, operations)}
  
  function plus(b) {
    return function(a){
      return a + b
      }
  }
  
  function minus(b) {
    return function(a){
      return a - b
      }
  }
  
  function times(b) {
    return function(a){
      return a * b
      }
    }
  function dividedBy(b) {
    return function(a){
      return Math.floor(a / b)
      }
  }