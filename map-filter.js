// using for loop
let numbers = [3,4,5,6,7,8], i, temp, result=[];

for(i = 0; i < numbers.length; i++) {
    temp = numbers[i] * numbers[i];
    result.push(temp);
}
console.log(result ,"\n");

// using map
let output = numbers.map(function(n){
    return n*n;
});
console.log(output ,"\n");

// using map
let output2 = numbers.map(n => n*n);
console.log(output2 ,"\n");

// using map
numbers.map(function(element, index, array){
    console.log(element, index, array ,"\n");
});

// using filter
let biggerNumbers = numbers.filter(element => element > 5);
console.log(biggerNumbers,"\n");

// using find
let immediateBiggerNumber = numbers.find( element => element > 5 );
console.log(immediateBiggerNumber,"\n");