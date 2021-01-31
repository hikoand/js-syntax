//Function
// - fundamental buling block in the program
// - subprogram can be used multiple times
// - performs a task or caclulates a vale

// 1. Function declaration
// function name(param1, param2) {bodt... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello hiko");

// 2. Parameters
// premitive paramters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi");

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}

printAll("dream", "coding", "ellie");

// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);

  /* function printAnother() {
          console.log(message);
          let childMessage = 'hello';
      }
      console.log(childMessage); 자식함수를 밖에서 불러내면 error
      */
}
printMessage();

//6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); //3
console.log(`sum : ${sum(1, 2)}`);

//7. Early return, early exit
//bad
function upgradeUser(user) {
  if (user.point > 10) {
    //long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrage logic...
}

//First-class function
//functions are treated like any other variables 다른 변수와 마찬가지로
//can be assigned as value to variable 변수에 할당이 되고
//can be passe as argumnet to other functions. 함수의 인자로 전달이 되며
//can be returned by onother function5 리턴값으로도 리턴이 된다.

//1.Function expression
//a function declaration can be called earlier than it is defined. (hoisted)
//a function expression is created when the execution reaches it.
const print = function () {
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2. Callback function using function expression
//상황에 맞게 특정 함수를 부르는 것
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

//anoymous function
const printYes = function () {
  console.log("yes!");
};

//named function
//better debugging in debugger's stack traces
//recursions
const printNo = function print() {
  console.log("no!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
//const simplePrint = function () {
//    console.log('sipmplePrint!');
// };

const simplePrint = () => console.log("simpilePrint");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

//IIFE: Immedately Invoked Function Expression
//선언함과 동시에 호출
(function hello() {
  console.log("IIFE");
})();

//quiz time
//function calculate(command, a, b)
//command: add, substract, divide, multiply, remaider

function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "divide":
      return a / b;
    case "multiply":
      return a * b;
    case "remainder":
      return a % b;
    default:
      throw Error("unknown command");
  }
}
console.log(calculate("add", 2, 3));
