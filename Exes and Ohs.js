// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    //code here
  let exes = 0
  let ohs = 0
  let array = str.split('')
  for( let i = 0; i < array.length; i++) {
    if ( array[i].toLowerCase() === 'x') {
      exes++
    } else if (array[i].toLowerCase() === 'o') {
      ohs ++
    }
  }
  
  if(exes==ohs){
    return true
  } else if (exes > ohs || exes < ohs){
    return false
  } else if ( exes == 0 && ohs == 0) {
    return true
  }
}