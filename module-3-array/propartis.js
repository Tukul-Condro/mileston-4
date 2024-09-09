let person = {
    name :'Rahul',
    age : 35,
    profession: 'Developer',
    salary : 25000,
    'joning-date' : '26 april 2024',
}
// console.log(person)
// console.log(person.age)
// console.log(person['joning-date'])

// let income = person['joning-date']
// console.log(income)

person['joning-date'] = '03 may 2024';
let income = person['joning-date'];
// console.log(income);
let promame = 'profession';
person[promame] = 'developer';
console.log(person[promame])



