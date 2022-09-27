// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    // do magic
    let obj = {}
    for(let el of arr){
      if(obj[el]){
        obj[el]++
      } else {
        obj[el] = 1
      }
    }
    console.log(obj)
    for(let i in obj){
      if(obj[i] === 1){
       return parseFloat(i)
      }
    }
  }
  