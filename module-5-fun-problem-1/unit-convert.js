function mileToKilometer(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
const kilo = mileToKilometer(4);
// console.log(kilo);

function inchToFeet(inch){
    const feet = inch / 12;
    const fit = parseInt(feet);
    const inche = inch % 12;
    const result = fit + ' fit ' + inche + ' inch';
    return result;
}
const result = inchToFeet(75);
// console.log(result);

function farenToCel(cel){
    const frn = ((cel*9)/5)+32;
    const faren = parseInt(frn);
    return faren; 
}
const farenhit = farenToCel(102);
// console.log(farenhit);