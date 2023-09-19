let students = [
    { id: 31, name: "John Cena"},
    { id: 42, name: "Alif Ibne Cena"},
    { id: 53, name: "Aziz Kima"},
    { id: 64, name: "Joy Muta"},
    { id: 85, name: "Shamim Sona"},
];
let i, nameList= [];
for (i=0; i<students.length; i++){
    nameList.push(students[i].name);
}
console.log(nameList);

// same thing by using map
const names = students.map(element => element.name);
console.log(names);

// printing all id by using map
const idList = students.map(element => element.id);
console.log(idList);

// printing all students info which id is bigger than 40 by using filter
const olderStudents = students.filter(element => element.id > 40);
console.log(olderStudents);

// printing immediate students info which id is bigger than 40 by using find
const olderStudentsOne = students.find(element => element.id > 40);
console.log(olderStudentsOne);