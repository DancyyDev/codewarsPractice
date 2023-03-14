// Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted in ascending order and the even numbers are sorted in descending order after the last odd number. For example [1,2,3,4,5,6,7,8,9] produces the output [1,3,5,7,9,8,6,4,2]. If the array contains decimals, round them down while checking for odd/even. The output must have the original numbers!

function sortItOut(arr){
    //Write your own code!
      let even = []
      let odd = []
      
      for(let i = 0; i < arr.length; i++){
        if(Math.floor(arr[i]) % 2 === 0){
          even.push(arr[i])
        } else {
          odd.push(arr[i])
        }
      }
      return odd.sort((a,b) => a-b).concat(even.sort((a,b) => b - a))
    }