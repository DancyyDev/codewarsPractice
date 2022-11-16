// Help the frog to find a way to freedom
// You have an array of integers and have a frog at the first position

// [Frog, int, int, int, ..., int]

// The integer itself may tell you the length and the direction of the jump

// For instance:
//  2 = jump two indices to the right
// -3 = jump three indices to the left
//  0 = stay at the same position
// Your objective is to find how many jumps are needed to jump out of the array.

// Return -1 if Frog can't jump out of the array

// Example:
// array = [1, 2, 1, 5]; 
// jumps = 3  (1 -> 2 -> 5 -> <jump out>)

function solution(a) {
    // Your code here
    let jumps = 0
    if(a[0] < 0){
      jumps++
      return jumps
    }
    
    let i = 0
    let nextJump = 0
    let c = 0
    
    while( i < a.length){
      nextJump = a[i]
      c = a[nextJump+i]
      jumps++
      i += a[i]
      
      if(jumps > a.length || nextJump + c === 0){
        return -1
      }
      if(i < 0){
        return jumps
      }
    }
    return jumps
  }