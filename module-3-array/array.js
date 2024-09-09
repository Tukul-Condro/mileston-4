let flowers = ['joba','togor','golap','lili']
// console.log(flowers)
for( let flower of flowers){
    // console.log(flower)
}
for(let i = 0;i <flowers.length; i++){
    
    // console.log(i)
    // console.log(flowers[i])
}
 let i = 0;
 while(i < flowers.length){
    // console.log(flowers[i])
    i++
 }
let  numbers = [1,2,3,4,5,6,7];
// console.log(numbers)

for(let num of numbers){
    // console.log(num)
}
for(let i = 1; i<numbers.length;i++){
    // console.log(i)
}
let rev_numbers = [];
for(let i = 0;i<numbers.length;i++){
    let num = numbers[i];
    rev_numbers.unshift(num);
    
}
// console.log(rev_numbers);

const rev_rev_numbers = []
for(let i = numbers.length-1; i>= 0;i--){
    const num = numbers[i]
    rev_rev_numbers.push(num);
    // console.log(num);
}
console.log(rev_rev_numbers);


