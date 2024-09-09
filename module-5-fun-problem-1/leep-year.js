/**
 * 1.The year is divisible by 4
  */  
function isLeepYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const leepYear = isLeepYear(2023);
const leepYear2 = isLeepYear(2024);
// console.log(leepYear2);

/* 1. those year is not divisible by 100, but the year is divisible by 4.
 2.the year is divisible by 400. then this is leep year. else it is not leepyear.
 */

function isLeepYear2(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 400 === 0){
        return true
    }
    else{
        return false;
    }
}
const leepYear3 = isLeepYear2(2028);
// console.log(leepYear3);

const leepYear4 = isLeepYear2(2025);
// console.log(leepYear4);