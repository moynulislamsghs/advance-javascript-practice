//falsy value:
// 0, "", false, undefined, null, NaN

// truethy value:
// except falsy value.
// "0", " ", "false", [], {}   --these all are true--
let book = NaN;
if(book){
    console.log("The condition is true");
}
else{
    console.log("The condition is false"); 
}