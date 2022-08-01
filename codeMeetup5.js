// You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

function countLanguages(list) {
    // thank you for checking out the Coding Meetup kata :)
    //loop through each obj
    //creates new property with language +1
    //if language!== property, creat new property
    let lang = {}
    
    for( obj of list){
      if(lang[obj.language] >= 0){
        lang[obj.language]++
      } else {
        lang[obj.language] = 1
      }
    }
    return lang
  }