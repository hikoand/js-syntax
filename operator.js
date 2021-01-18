//1. String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //rmainder 나누고 나머지 값
console.log(2 ** 3); // exponentiation 2의 3승

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncremnet: ${preIncrement}, counter: ${counter}`);
const postIncremnet = counter++;
//postIncremnet = counter;
//counter = counter + 1;
console.log(`preIncremnet: ${preIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preIncremnet: ${preIncrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`preIncremnet: ${preIncrement}, counter: ${counter}`);

//4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

//5. Comprison operators
console.log(10 < 6); //less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

//6. logic operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or) 처음부터 true값이 출력되면 밑의 console은 출력되지 않음
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first false value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableOject && nullableObject.something

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("ㅠㅠ");
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7.Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// ===  strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { nanme: "ellie" };
const ellie2 = { nanme: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false (diffrent reference)
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //true (84)

// equality - puzzler
console.log(0 == false); //T (0,null,undefined는 false로 간주)
console.log(0 === false); //F (0은 boolean type이 아님)
console.log("" == false); //T (Empty string)
console.log("" === false); //F (boolean type이 아님)
console.log(null == undefined); //T
console.log(null === undefined); //F (boolean type이 아님)

//8. Conditional operators: if
//if, else if, else

const name = "mike";
if (name === "hiko") {
  console.log("Welcome hiko!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}

//9. Ternary operator: ?
//condition ? value1 : value2;
console.log(name === "hiko" ? "yes" : "no");

//10. Switch statement
//use for multipe if checks
//use for enum-like value check
//use for multipe type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

//11. Loops
//While loop, while the condition is truthy,
//body code is executed.
let i = 4;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

//do while loop, body code is ececuted first,
//then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for:${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log("inline variavle for: ${i}");
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

//q1. 0~10 짝수만 print
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

//q2. 0~10 까지 looping 8 에서 멈춤
/* let i = 0;
while (i < 9) {
    console.log(`while: ${i}`);
    1++;
}
break;

for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break
    }
console.log(`q2. ${i}`);
}
*/
