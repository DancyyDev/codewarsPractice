// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	// your code
  //
  let string = s.toLowerCase().split('')
  console.log(string)
  let arr = []
  for(let i = 0; i< string.length; i++){
    arr.push(string[i].charAt(0).toUpperCase() + string[i].repeat(i))
  }
  return arr.join('-')
}