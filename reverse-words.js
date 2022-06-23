// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  let strA = str.split(' ')
  console.log(strA)
  let strB = strA.map(x => x.split('').reverse().join(''))
  return strB.join(' ')
}