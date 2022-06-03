// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    let newStr = str
    for( let i = 0; i < str.length; i++) {
      if ( newStr[i] === '-' || newStr[i] === '_') {
         newStr = newStr.replace(newStr[i] + newStr[i+1], newStr[i+1].toUpperCase())
      }
    }
    return newStr
  }