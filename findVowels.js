// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

function vowelIndices(word){
    //your code here
    let indexV = []
    let text = word.toLowerCase().split('')
    for( let i = 0; i < text.length; i++){
      if( text[i] === 'a' ||
          text[i] === 'e' ||
          text[i] === 'i' ||
          text[i] === 'o' ||
          text[i] === 'u' ||
          text[i] === 'y') {
        indexV.push(i + 1)
      }
    }
    return indexV
  }