// Task:
// Give you a number array(element range:1-99, array length range: 6-40), please do a "Symmetric Sort" with it.

// rule: sort the number, the first smallest number at the left side, the second smaller number at the right side, and so on...

// Example:
// example1:                        example2:

// array=[1,2,3,4,5,6,7,8,9]        array=[1,1,2,2,3,3,4,4,5]

// after sort, should return:       after sort, should return:

//       [1,3,5,7,9,8,6,4,2]              [1,2,3,4,5,4,3,2,1]

function sc(array){
    let sortArr = array.sort((a,b)=>a-b)
    let arr1 = []
    let arr2 = []
    let arr3
    for(let i = 0; i < sortArr.length; i++){
      if( i % 2 === 0){
        arr1.push(sortArr[i])
      } else {
        arr2.push(sortArr[i])
      }
    }
    arr3 = arr2.reverse()
    return arr1.concat(arr3)
  }