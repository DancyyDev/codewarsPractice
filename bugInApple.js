// Find out "B"(Bug) in a lot of "A"(Apple).

// There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

// input: string Array apple

// output: Location of "B", [x,y]

function sc(apple){
    //loop through first list
    //loop through second list
    //find indexOf
    let bug = []
    for(let i = 0; i < apple.length; i++){
      for(let j = 0; j < apple[i].length; j++){
        if(apple[i][j]==='B')
          bug.push(i,j)
      }
    }
    return bug
  }