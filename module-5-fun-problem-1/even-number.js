/*
    1. take a array as a parametar and get all the even number and give the all even numbers avareg amount.
*/
function evenNumber(numbers){
    const evens = [];
    for(const number of numbers){
        if(number % 2 === 0){
            evens.push(number);
        }
    }
    let sum = 0;
    for(const number of evens){
        sum = sum + number;    
    }
    const count = evens.length;
    const avgr = sum / count;
    const avg = parseInt(avgr);
    return avg;
}
const numbers = [26,67,40,55,34,88,79,78];
const avg = evenNumber(numbers);
console.log(avg);