function doubleOrTripple(number,doDouble){
    if(doDouble === true){
       const restult = number * 2;
       return restult;
    }
    else{
        const restult = number * 3
        return restult;
    }
}
console.log(doubleOrTripple(5, true));
console.log(doubleOrTripple(5, false));