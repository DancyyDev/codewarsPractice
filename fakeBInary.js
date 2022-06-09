// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
    let z =[]
    let y = x.split('')
    let a = y.map( b => {
      if(b<5){
        z.push(0)
      }else{
        z.push(1)
      }   
    })
    return z.join('')
    }