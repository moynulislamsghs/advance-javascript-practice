// here given a students all subject number that he got in his exam.
// we will print all the numbers until he failed. If he got passing number in all subject then we will print that he passed in exam!
// we have also given mistaken numbers that are negative. so we have to ignore them. 

const gotNumbers = [80, 66, 70, -40, 55, 62, 51, 81, -15, 55, 44, 51, 47];
let i, temp = 1;
for (i = 0; i < gotNumbers.length; i++){
    if(gotNumbers[i] < 0){
        continue;
    }
    if(gotNumbers[i] < 33){
        console.log("You have failed in exam!");
        temp = 0;
        break; // if you want to see this output then change or add in gotNumbers[] which is below 33.
    }
    
    console.log(gotNumbers[i]);
}
if(temp == 1){
    console.log("You have successfully passed in exam!");
}