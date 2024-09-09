/**
 * take a array and get out  every duplicate item from the array. 
 */
function duplicate(mixArray){
    const unique = [];
    for(const item of mixArray){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    console.log(unique)
    return unique;
} 



const mixArray = [23, 56, 23, 66, 34, 77, 66, 56 ];
const carrection = duplicate(mixArray);