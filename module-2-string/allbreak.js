let x = 1;
// task-----1

// for(x;x<=200;x++){
//     if(x>100){
//         break;
//     }
    
//     console.log(x);
// }

// task---2

// let i = 1;
// let sum = 0;
// while(i<=200){
//     console.log(i);
//     i++;
//     sum = sum + i;
//     if(sum >= 100){
//         break;
//     }  
// }
// console.log('sum', sum);
  
    // program to generate a multiplication table

// take input from the user
const number = 4;

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    let result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}
