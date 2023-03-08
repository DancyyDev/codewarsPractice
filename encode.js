// This is my first Kata in the Ciphers series. This series is meant to test our coding knowledge.

// Ciphers #1 - The 01 Cipher
// This cipher doesn't exist, I just created it by myself. It can't actually be used, as there isn't a way to decode it. It's a hash. Multiple sentences may also have the same result.

// How this cipher works
// It looks at the letter, and sees it's index in the alphabet, the alphabet being a-z, if you didn't know. If it is odd, it is replaced with 1, if it's even, its replaced with 0. Note that the index should start from 0. Also, if the character isn't a letter, it remains the same.

// Example
// encode("Hello World!"); // => "10110 00111!"
// This is because H's index is 7, which is odd, so it is replaced by 1, and so on.

// Have fun (en)coding!

function encode(str){
    //finish the function
    let code = {};
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    
    for( let i = 0; i < letters.length; i++){
      if(!code[letters[i]]){
        code[letters[i]] = i%2
      }
    }
    console.log(code[0])
    let result = []
    
    let arr = str.toLowerCase().split('')
    
    for(let j = 0; j < arr.length; j++){
      if(Object.hasOwn(code, arr[j])){
        result.push(code[arr[j]])
      } else {
        result.push(arr[j])
      }
    }
    return result.join('')
  }