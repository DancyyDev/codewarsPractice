// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

String.prototype.camelCase=function(){
    //your code here
    const arr = this.split(' ')
    const result = []
    for(let i = 0; i < arr.length; i++){
      result.push(arr[i].slice(0,1).toUpperCase()+ arr[i].slice(1))
    }
    return result.join('')
  }