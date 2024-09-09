/**
 * // -----------------practice task-1-------------------------------------------
function findLoweNumber(numbers){
    let min = numbers[0];
    for(const number of heights2){
        if(number < min){
            min = number;
        }
    }
   return min;
}
const heights2 = [167, 190, 120, 165, 137];

const lowestNumber = findLoweNumber(heights2);
// console.log(lowestNumber);} names 
 */


//-----------------------practice task-2----------------------------------------------
/**
 * function friendWuthSmall(names){
    let size = names[0];
    for(const name of names){
        if(name.length < size.length){
            size = name;   
        }
    }
    return size;
}
const heightsName = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const smallName = friendWuthSmall(heightsName); 
console.log(smallName);
 */

// ----------------------------task-3------------------------
/**
 * const items = [
    {item : 'laptop', price : 35000}, 
    {item : 'tablet', price : 15000 }, 
    {item : 'mobile', price : 20000},
];

function itemProducts(products){
    let sum = 0;
    for(const  product of products){
        sum = sum + product.price;
    }
    return sum
}

const total_budget = itemProducts(items);
console.log(total_budget);
 */
// ---------------------------task-4 --------------------------

/**
 * const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(phones){
    let avg = phones[0];
    for(const phone of phones){
        if(phone.price > avg.price){
            avg = phone
        }
    }
        return avg;

}
const totalPrice = findAveragePhonePrice(phones);
console.log(totalPrice);
 */
// ------------------task-5--------------------------

/**
 * const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
function  incrementWithExperience(employees){
    let total = 0;
    for(const employee of employees){
        if( employee.experience === 5){
            increment = employee.starting + employee.increment;
            total = total + increment;
        }
        else if ( employee.experience === 3){
            increment = employee.starting + employee.increment;
            total = total + increment;
        }
        else if( employee.experience === 9){
            increment = employee.starting + employee.increment;
            total = total + increment;
        }
        else{
          increment = employee.starting + employee.increment;
          total = total + increment;
        }

    }
    return total;
}
const totalSalary = incrementWithExperience(employees);
console.log(totalSalary);
 */