// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(flrs) {
    // build here
    // create an array
    //push white spaces and star into array
    //each floor has odd num of stars
    // [0] = x*x
    // [1] = ***
    const star = "*"
    const space = " "
    
    return Array.from({length: flrs}, ( _, b )=>
      space.repeat(flrs - b - 1) + star.repeat(b + b + 1) + space.repeat(flrs - b - 1)
    )
  }