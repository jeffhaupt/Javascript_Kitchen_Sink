let myName = "Jeff Haupt";

const numStates = 50;

let result = 5+4;

function sayHello() {
  alert("Hello World!");
}

sayHello();

function checkAge(name, age) {
  if (age < 21) {
    alert("Sorry " + name + ", you are not old enough to view this page.");
  }
}

checkAge("Charles", 21);
checkAge("Abbey", 27);
checkAge("James", 18);
checkAge("John", 17);

let vegetables = ["carrots", "broccoli", "corn", "green beans", "asparagus"];

for (let i = 0; i < vegetables.length; i++) {
  console.log(vegetables[i]);
}

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
