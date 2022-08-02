// Give you three numbers:a b c,please return an equation(Operators include +,-,*,/), return type is string.

// For example:

// sc(1,2,3) should return "1+2=3" or "2+1=3" or "3-2=1" or "3-1=2"

// sc(2,2,4) should return "2+2=4" or "2*2=4" or "4/2=2" or "4-2=2"

// sc(6,2,3) should return "2*3=6" or "3*2=6" or "6/2=3" or "6/3=2"

// Return one of the possible answer, you can pass the test.

// If there is no equation between a,b,c, return ""

function sc(a,b,c){
    //Good Luck
    return algebra(a,b,c) || algebra(a,c,b) || algebra(b,a,c) || algebra(b,c,a) || algebra(c,a,b) || algebra(c,b,a) || '';
  }
  
  function algebra(a,b,c){
    if(a+b === c){
      return `${a}+${b}=${c}`
    } else if(a-b === c){
      return `${a}-${b}=${c}`
    } else if(a*b === c){
      return `${a}*${b}=${c}`
    } else if(a/b === c){
      return `${a}/${b}=${c}`
    }
  }