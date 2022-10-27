// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]

function parse( data )
{
 let run = data.split('')
 let int = 0
 let arr = []
 console.log(run)
  for(let i = 0; i < run.length; i++){
    if(run[i] === 'i'){
      int++
    } else if(run[i] === 'd'){
      int--
    } else if(run[i] === 's'){
      int = int * int
    } else if(run[i] === 'o'){
      arr.push(int)
    }
  }
  return arr
}
