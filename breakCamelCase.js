// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(str) {
  
    let arrOrg = str.split('')
    let arrLower = str.toLowerCase().split('')
    
    for(let i = 0; i < arrOrg.length; i++){
      if(arrLower[i] !== arrOrg[i]){
        arrOrg[i] = " " + arrOrg[i]
      }
    }
    return arrOrg.join('')
  }