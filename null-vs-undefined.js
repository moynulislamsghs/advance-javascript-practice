// examples of undefined values
// example 1
let number;
console.log(number);

// example 2
function add(num1, num2){
    const total = num1 + num2;
    // here return value is not declared. That's why this function is undefined
}
console.log(add(12, 8));

// example 3
function nothing(num1, num2){
    return num2;
}
console.log(nothing(5)); 
// here in nothing function two parameters are declared but only one parameter is given, that's why num2 is undefined.

// example 4
const details = {
    name: "Moynul Islam",
    age: 27, 
    phone: 8801716703347,
}
console.log(details.address);
// in details object address is not defined, that's why details.address is undefined

// example 5
const ages = [15, 18, 15, 17];
console.log(ages[8]);
// here only 4 values are in ages array, but consolling eight number values, which is not exist, that's why ages[8] is undefined.

// null value example
let age = null;
console.log(age);
// when we set a variables value as null, then it's called null value