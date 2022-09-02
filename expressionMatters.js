// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

function expressionMatter(a, b, c) {
    let math1 = a + b + c
    let math2 = a * b * c
    let math3 = a + b * c
    let math4 = a * b + c
    let math5 = (a + b) * c
    let math6 = (a * b) + c
    let math7 = a + (b * c)
    let math8 = a * (b + c)
    let arr = [math1, math2, math3, math4, math5, math6, math7, math8]
    console.log(arr.sort((a,b) => a-b))
    console.log(arr.slice(-1))
    return arr[7]
  }