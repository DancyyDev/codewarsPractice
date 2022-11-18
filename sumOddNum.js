// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
    // TODO
    //for loop for every row
    let int = 1
    let arr = []
    
    for(let i = 0; i < n; i++){
      arr.push([int])
      int += 2
      for(let j = 0; j < i; j++){
        arr[i].push(int)
        int += 2
      } 
    }
    return arr[n - 1].reduce((a,z) => a + z)
  }