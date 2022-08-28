// Task
// Yesterday you found some shoes in your room. Each shoe is described by two values:

// type indicates if it's a left or a right shoe;
// size is the size of the shoe.
// Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

// Example
// For:

// shoes = [[0, 21], 
//          [1, 23], 
//          [1, 21], 
//          [0, 23]]
// the output should be true;

// For:

// shoes = [[0, 21], 
//          [1, 23], 
//          [1, 21], 
//          [1, 23]]
// the output should be false.

// Input/Output
// [input] 2D integer array shoes
// Array of shoes. Each shoe is given in the format [type, size], where type is either 0 or 1 for left and right respectively, and size is a positive integer.

// Constraints: 2 ≤ shoes.length ≤ 50,  1 ≤ shoes[i][1] ≤ 100.

// [output] a boolean value

// true if it is possible to pair the shoes, false otherwise.

function pairOfShoes(shoes) {
    //coding and coding..
    //loop through each shoe
    // count0 === count1 // true
    // even number of shoe size // true
    let count0 = 0
    let count1 = 0
    let size = {}
    
    for(let i = 0; i < shoes.length; i++){
        if(shoes[i][0] === 0){
          count0++
        } else if (shoes[i][0] === 1){
          count1++
        } 
      }
    
    for(let j = 0; j < shoes.length; j++){
      if ( size[shoes[j][1]]){
          size[shoes[j][1]]++
        } else{
          size[shoes[j][1]] = 1
        }
    }
    
    let shoeSize = Object.values(size).map(x => x%2 ===0? true : false)
    console.log(shoeSize)
    
    if( count0 === count1 && shoes.length > 1 && !shoeSize.includes(false)) {
    console.log(count0, count1)
      return true
    } else {
    console.log(count0, count1)
      return false
    }
  }