function evenSizeSring(str){
    const size = str.length;
    // console.log(str, size);
    if(size % 2 ===0){
        // console.log('Even size')
        return true;
    }
    else{
        // console.log('Odd size')
        return false;
    }
   
}
const output1 = evenSizeSring('Dhaka');
// console.log(output1);
const output2 = evenSizeSring('Ranu');
// console.log(output2);