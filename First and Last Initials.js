// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){

    // code away
    let firstLast = name.split(' ')
    let firstIni = firstLast[0].substring(0, 1).toUpperCase()
    let lastIni = firstLast[1].substring(0, 1).toUpperCase()
    return `${firstIni}.${lastIni}`
}