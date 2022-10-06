// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
    // insert code here
    // creating an array/matrix
    // size is a number
    // size is the length
    // size is also the number of list we create
    // create let = 0. while let !== size, continue making list
    let num = 0
    let count = 0
    let line = []
    let table = []
    
    while( num < size){
      num++
      line.push(num)
    }
    while(table.length < size){
      count++
      table.push(line.map(x => x * count))
    }
    return table
  }