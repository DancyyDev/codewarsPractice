function sortByArea(arr){
    // your code here
    let calulatedArea = []
    for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i]) === true){
        calulatedArea.push(Number.parseFloat((arr[i].reduce((a,b)=> a*b)).toFixed(2)))
      } else {
        calulatedArea.push(Number.parseFloat((Math.PI * arr[i]**2).toFixed(2)))
      }
    }
    return calulatedArea.sort((a,b) => a-b)
  }