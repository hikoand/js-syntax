//Objects
//One of the JavaScript's data types.
//a collction of related data and/or functionality.
//Nearly all objects in JavaScript are instances of Object
//object = {key : value};

const title = "ellie";
const number = 4;
print(title, number);
function print(title, number) {
  console.log(title);
  console.log(number);
}
//위 처럼하면 인자가 많아졌을 때 다 추가해야하며, 그룹을 묶어서 새각할 수도 없음

///1. Literals and properites
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax

function out(person) {
  console.log(person.name);
  console.log(person.age);
}
const hiko = { name: "hiko", age: 29 };
out(hiko);

hiko.hasJob = true;
console.log(hiko.hasJob);

delete hiko.hasJob;
console.log(hiko.hasJob);

//2. Computed properties
// key should be always string
console.log(hiko.name);
console.log(hiko["name"]);
hiko["hasJob"] = true;
console.log(hiko.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(hiko, "name");
printValue(hiko, "age");

//3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("ellie", 30);
console.log(person4);

//4. Constructor function
function Person(name, age) {
  //this = {};
  this.name = name;
  this.age = age;
  //return this;
}

//5. in operator: property exitence check (key in obj)
console.log("name" in hiko);
console.log("age" in hiko);
console.log("random" in hiko);
console.log(hiko.random);

//6. for..in vs for..of
//for (key in obj)
console.clear();
for (key in hiko) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//위 랑 같지만 쉬움

for (value of array) {
  console.log(value);
}

//7. Fun cloning
// Object.assign (dest, [obj1, obj2, obj3...])
const user = { name: "ellie", age: "20" };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size); //blue,big
