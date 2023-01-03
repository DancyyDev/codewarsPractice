// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration (sec) {
    // Complete this function
    //P: is seconds
    //R: a converstion from seconds into min, hours, days and year, given enough seconds
    //E: param === 60 sec, return 1 minute or 3600 sec return 1 hour
    //
    //min === 60 sec
    //hours === 60 min / 3600 sec
    //days === 24 hrs / 86400 sec
    //years === 365 days / 31536000 sec
    
    
    let mins = 60
    let hours = 3600
    let days = 86400
    let years = 31536000
    
    let secFormat = 0
    let minsFormat = 0
    let hoursFormat = 0
    let daysFormat = 0
    let yearsFormat = 0
                                   
    if(sec === 0){
      return "now"
    }
    if(sec === years){
      yearsFormat = 1
    }
    if(sec > years){
      secFormat = sec%mins
      minsFormat = Math.floor((sec%hours)/mins)
      hoursFormat = Math.floor((sec%days)/hours)
      daysFormat = Math.floor((sec%years)/days)
      yearsFormat = Math.floor(sec/years)
      if(yearsFormat%days === 0 && yearsFormat > 1){
        return `${yearsFormat} days`
      }
      
      if(daysFormat === 0){
        yearsFormat > 1 ? yearsFormat = `${yearsFormat} years` : yearsFormat = `${yearsFormat} year`
        hoursFormat > 1 ? hoursFormat = `${hoursFormat} hours` : hoursFormat = `${hoursFormat} hour`
        minsFormat > 1 ? minsFormat = `${minsFormat} minutes` : minsFormat = `${minsFormat} minute`
        secFormat > 1 ? secFormat = `${secFormat} seconds` : secFormat = `${secFormat} second`
        return `${yearsFormat}, ${hoursFormat}, ${minsFormat} and ${secFormat}`
      }
      if(hoursFormat === 0){
        yearsFormat > 1 ? yearsFormat = `${yearsFormat} years` : yearsFormat = `${yearsFormat} year`
        daysFormat > 1 ? daysFormat = `${daysFormat} days` : daysFormat = `${daysFormat} day`
        minsFormat > 1 ? minsFormat = `${minsFormat} minutes` : minsFormat = `${minsFormat} minute`
        secFormat > 1 ? secFormat = `${secFormat} seconds` : secFormat = `${secFormat} second`
        return `${yearsFormat}, ${daysFormat}, ${minsFormat} and ${secFormat}`
      }
      if(minsFormat === 0){
        yearsFormat > 1 ? yearsFormat = `${yearsFormat} years` : yearsFormat = `${yearsFormat} year`
        daysFormat > 1 ? daysFormat = `${daysFormat} days` : daysFormat = `${daysFormat} day`
        hoursFormat > 1 ? hoursFormat = `${hoursFormat} hours` : hoursFormat = `${hoursFormat} hour`
        secFormat > 1 ? secFormat = `${secFormat} seconds` : secFormat = `${secFormat} second`
        return `${yearsFormat}, ${daysFormat}, ${hoursFormat} and ${secFormat}`
      }
      if(secFormat === 0){
        yearsFormat > 1 ? yearsFormat = `${yearsFormat} years` : yearsFormat = `${yearsFormat} year`
        daysFormat > 1 ? daysFormat = `${daysFormat} days` : daysFormat = `${daysFormat} day`
        hoursFormat > 1 ? hoursFormat = `${hoursFormat} hours` : hoursFormat = `${hoursFormat} hour`
        minsFormat > 1 ? minsFormat = `${minsFormat} minutes` : minsFormat = `${minsFormat} minute`
        return `${yearsFormat}, ${daysFormat}, ${hoursFormat} and ${minsFormat}`
      }
      
      yearsFormat > 1 ? yearsFormat = `${yearsFormat} years` : yearsFormat = `${yearsFormat} year`
      daysFormat > 1 ? daysFormat = `${daysFormat} days` : daysFormat = `${daysFormat} day`
      hoursFormat > 1 ? hoursFormat = `${hoursFormat} hours` : hoursFormat = `${hoursFormat} hour`
      minsFormat > 1 ? minsFormat = `${minsFormat} minutes` : minsFormat = `${minsFormat} minute`
      secFormat > 1 ? secFormat = `${secFormat} seconds` : secFormat = `${secFormat} second`
      
      return `${yearsFormat}, ${daysFormat}, ${hoursFormat}, ${minsFormat} and ${secFormat}`
    }
    
    if(sec === days){
      return "1 day"
    } 
    if(sec > days){
      secFormat = sec%mins
      minsFormat = Math.floor((sec%hours)/mins)
      hoursFormat = Math.floor((sec%days)/hours)
      daysFormat = Math.floor(sec/days)
      if(daysFormat%days === 0 && daysFormat > 1){
        return `${daysFormat} days`
      }
      
      if(hoursFormat === 0){
        yearsFormat > 1 ? yearsFormat = `${yearsFormat} years` : yearsFormat = `${yearsFormat} year`
        daysFormat > 1 ? daysFormat = `${daysFormat} days` : daysFormat = `${daysFormat} day`
        minsFormat > 1 ? minsFormat = `${minsFormat} minutes` : minsFormat = `${minsFormat} minute`
        secFormat > 1 ? secFormat = `${secFormat} seconds` : secFormat = `${secFormat} second`
        return `${daysFormat}, ${minsFormat} and ${secFormat}`
      }
      if(minsFormat === 0){
        yearsFormat > 1 ? yearsFormat = `${yearsFormat} years` : yearsFormat = `${yearsFormat} year`
        daysFormat > 1 ? daysFormat = `${daysFormat} days` : daysFormat = `${daysFormat} day`
        hoursFormat > 1 ? hoursFormat = `${hoursFormat} hours` : hoursFormat = `${hoursFormat} hour`
        secFormat > 1 ? secFormat = `${secFormat} seconds` : secFormat = `${secFormat} second`
        return `${daysFormat}, ${hoursFormat} and ${secFormat}`
      }
      if(secFormat === 0){
        yearsFormat > 1 ? yearsFormat = `${yearsFormat} years` : yearsFormat = `${yearsFormat} year`
        daysFormat > 1 ? daysFormat = `${daysFormat} days` : daysFormat = `${daysFormat} day`
        hoursFormat > 1 ? hoursFormat = `${hoursFormat} hours` : hoursFormat = `${hoursFormat} hour`
        minsFormat > 1 ? minsFormat = `${minsFormat} minutes` : minsFormat = `${minsFormat} minute`
        return `${daysFormat}, ${hoursFormat} and ${minsFormat}`
      }
      
      daysFormat > 1 ? daysFormat = `${daysFormat} days` : daysFormat = `${daysFormat} day`
      hoursFormat > 1 ? hoursFormat = `${hoursFormat} hours` : hoursFormat = `${hoursFormat} hour`
      minsFormat > 1 ? minsFormat = `${minsFormat} minutes` : minsFormat = `${minsFormat} minute`
      secFormat > 1 ? secFormat = `${secFormat} seconds` : secFormat = `${secFormat} second`
      return `${daysFormat}, ${hoursFormat}, ${minsFormat} and ${secFormat}`
    }
    
    if(sec === hours){
      hoursFormat = 1
      return "1 hour"
    }
    if(sec > hours){
      secFormat = sec%mins
      minsFormat = Math.floor((sec%hours)/mins)
      hoursFormat = Math.floor(sec/hours)
      if(hoursFormat%hours === 0){
        return `${hoursFormat} hours`
      }
      
       if(minsFormat === 0){
        yearsFormat > 1 ? yearsFormat = `${yearsFormat} years` : yearsFormat = `${yearsFormat} year`
        daysFormat > 1 ? daysFormat = `${daysFormat} days` : daysFormat = `${daysFormat} day`
        hoursFormat > 1 ? hoursFormat = `${hoursFormat} hours` : hoursFormat = `${hoursFormat} hour`
        secFormat > 1 ? secFormat = `${secFormat} seconds` : secFormat = `${secFormat} second`
        return `${hoursFormat} and ${secFormat}`
      }
      if(secFormat === 0){
        yearsFormat > 1 ? yearsFormat = `${yearsFormat} years` : yearsFormat = `${yearsFormat} year`
        daysFormat > 1 ? daysFormat = `${daysFormat} days` : daysFormat = `${daysFormat} day`
        hoursFormat > 1 ? hoursFormat = `${hoursFormat} hours` : hoursFormat = `${hoursFormat} hour`
        minsFormat > 1 ? minsFormat = `${minsFormat} minutes` : minsFormat = `${minsFormat} minute`
        return `${hoursFormat}, and ${minsFormat}`
      }
      
      hoursFormat > 1 ? hoursFormat = `${hoursFormat} hours` : hoursFormat = `${hoursFormat} hour`
      minsFormat > 1 ? minsFormat = `${minsFormat} minutes` : minsFormat = `${minsFormat} minute`
      secFormat > 1 ? secFormat = `${secFormat} seconds` : secFormat = `${secFormat} second`
      return `${hoursFormat}, ${minsFormat} and ${secFormat}`
    }
    
    if(sec === mins){
      return "1 minute"
    }
    if(sec > mins){
      secFormat = (sec-mins)%mins
      minsFormat = Math.floor(sec/mins)
      if(minsFormat % mins && secFormat === 0){
        return `${minsFormat} minutes`
      }
      return `${minsFormat} minute and ${secFormat} seconds`
      
    }
    
    if(sec < mins){
      return `${sec} second`
    }
  }