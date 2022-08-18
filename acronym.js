// Write function which takes a string and make an acronym of it.

// Rule of making acronym in this kata:

// split string to words by space char
// take every first letter from word in given string
// uppercase it
// join them toghether
// Eg:

// Code wars -> C, w -> C W -> CW

function toAcronym(inp){
    // ...
    let arr = inp.toUpperCase().split(' ')
    console.log(arr)
    let acr = []
    for(let i = 0; i < arr.length; i++){
      acr.push(arr[i][0])
    }
    return acr.join('')
  }