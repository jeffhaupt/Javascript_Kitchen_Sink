// create myName variable
let myName = "Jeff Haupt";

// create constant variable for number of states
const numStates = 50;

// create variable that stores sum of 5+4
let result = 5+4;

//create and call sayHello function
function sayHello() {
  alert("Hello World!");
}

sayHello();


//create checkAge function and call it four times
function checkAge(name, age) {
  if (age < 21) {
    alert("Sorry " + name + ", you are not old enough to view this page.");
  }
}

checkAge("Charles", 21);
checkAge("Abbey", 27);
checkAge("James", 18);
checkAge("John", 17);


//Create array of vegetables and console.log each one
let vegetables = ["carrots", "broccoli", "corn", "green beans", "asparagus"];

for (let i = 0; i < vegetables.length; i++) {
  console.log(vegetables[i]);
}

//Number 10 - create array of objects and call checkAge
let peopleInfo = [
  {name: "Jeff", age: 44},
  {name: "Jada", age: 14},
  {name: "Lindsay", age: 36},
  {name: "Cali", age: 1},
  {name: "Zeus", age: 7}
]

for(let i = 0; i < peopleInfo.length; i++){
  checkAge(peopleInfo[i].name, peopleInfo[i].age);
}


//Number 11 - create getLength, call and assign to variable, check to see if
//it is an odd or even number of characters
function getLength(word){
  let howManyCharacters = word.length;
  return howManyCharacters;
}

let wordLength = getLength("Hello World");

if ((wordLength % 2) == 0) {
  console.log("The world is nice and even!");
} else {
  console.log("The world is an odd place!");
}
