let numbers = [1,2,3,4,5,6,7,8,9,10];

const part = numbers.slice(4, 8);
console.log(part);
console.log(numbers);

const removingPart = numbers.splice(3, 4);
console.log(removingPart);
console.log(numbers);

let joinedPart = numbers.join(' + ');
console.log(joinedPart);
console.log(numbers);