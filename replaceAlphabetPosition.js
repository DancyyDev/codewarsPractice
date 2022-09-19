// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
    //hard coding it
    //create my alphabet obj to replace the letters into numbers
    const alphabet = 'qwertyuiopasdfghjklzxcvbnm'
    let letters = alphabet.split('').sort()
    let obj = {}
    
    for(let i = 0; i < letters.length; i++){
      if(!obj[letters[i]]){
        obj[letters[i]] = i+1
      }
    }
    
    //solving the problem
    //splitting the parameters,
    //comparing the individual element in split string with the obj to convert letter into number
    const arr = text.toLowerCase().split('')
    let result = []
    
    for(let x = 0; x < arr.length; x++){
      if(obj[arr[x]] !== undefined){
        result.push(obj[arr[x]])
      }
    }
    return result.join(' ')
  }