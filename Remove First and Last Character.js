// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    //You got this!
     return str.split('').slice(1,-1).join('') // in slice() the (1, -1) removes from the 1 index and ends at the -1 index which in this case is the last index of the array, thats wild.
   };
   
   //still learning