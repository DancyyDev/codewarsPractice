// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    //...
    let test = string.toLowerCase().split(/[^a-z]+/g).join('').split('').sort()
    let count = 0
    let arr1 = {}
    
    for(let i = 0; i < test.length; i++){
      if(arr1[test[i]]){
        arr1[test[i]]++
      } else {
        arr1[test[i]] = 1
      }
    }
    
    for(el in arr1){
      count++
    }
    
    return count === 26
  }