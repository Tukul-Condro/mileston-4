const dates = new Date(2023,10,2);
const date = new Date('2023-08-05');
console.log(dates);
console.log(date);
console.log(date.getDate());
dates.setMonth(6);
console.log(dates.toLocaleString('en-GB'));
console.log(dates.toLocaleDateString());
