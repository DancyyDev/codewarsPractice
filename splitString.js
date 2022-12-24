// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    let stringArr = []
    let arr = str.split('')
    for(let i = 0; i < arr.length; i+=2){
      stringArr.push(arr[i]+arr[i+1])
    }
    if(str.length%2 !==0){
      stringArr.push(stringArr[stringArr.length - 1].slice(0,1)+ '_')
      stringArr.splice(stringArr.length - 2, 1)
    }
    return stringArr
  }