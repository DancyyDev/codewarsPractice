// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

// Examples:

// vowelOne( "abceios" ) // "1001110"

// vowelOne( "aeiou, abc" ) // "1111100100"

function vowelOne(s){
    // ...
    let result = []
    let str = s.toLowerCase()
    for(let i = 0; i < s.length; i++){
      if(str[i] === "a" ||
         str[i] === "e" ||
         str[i] === "i" ||
         str[i] === "o" ||
         str[i] === "u" ){
         result.push('1')
      } else {
        result.push('0')
      }
    }
    return result.join('')
  }