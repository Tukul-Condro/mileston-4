function multi(number){
    const restult = number * 2;
    console.log(restult)
    
}
multi(5);
function single(number){
    const restult = number * 2;
    return restult;
}
const output = single(66);
console.log('output', output)
const output2 = single(77);
console.log('output2', output2);

function add(price1, price2){
    return price1 + price2;
}
const bill = add(5, 80);
console.log('bill',bill);
