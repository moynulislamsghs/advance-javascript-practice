function firstFunction(){
    let temp = 0;
    return function(){
        temp++;
        return temp;
    }
}
let count1 = firstFunction();
console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());
let count2 = firstFunction();
console.log(count2());
console.log(count2());
console.log(count1());
console.log(count2());
console.log(count1());
