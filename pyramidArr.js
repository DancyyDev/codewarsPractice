// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s

function pyramid(n) {
    // your code here
    let count = 0
    let num = "1"
    let arr = []
    while(count < n){
      if(n === 0){
        return []
      } else {
        count++
        arr.push(num.repeat(count).split('').map(x => parseInt(x)))
      }   
    }
    return arr
  }