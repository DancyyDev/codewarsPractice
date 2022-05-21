// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n) {
    //code here
    let arrTwo = []
    let arrOne = []
    let nNew = n.toString()
    if(n.length === 1) {
      arrOne.push(n)
    }
    let newNew = nNew.split('')
    let newNewNew = newNew.reverse()
    for(let i = 0; i < newNewNew.length; i++) {
      arrTwo.push(parseInt(newNewNew[i]))
    }
    return arrTwo
  }