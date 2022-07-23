// Task:
// Every uppercase letter is Father, The corresponding lowercase letters is the Son.

// Give you a string s, If the father and son both exist, keep them. If it is a separate existence, delete them. Return the result.

// For example:

// sc("Aab") should return "Aa"

// sc("AabBc") should return "AabB"

// sc("AaaaAaab") should return "AaaaAaa"(father can have a lot of son)

// sc("aAAAaAAb") should return "aAAAaAA"(son also can have a lot of father ;-)

function sc(s){
  
    let result = []
    let arr = s.split('')
    for( i of arr){
      if( arr.includes(i.toUpperCase()) && arr.includes(i.toLowerCase())){
        result.push(i)
      }
    }
    return result.join('')
  }