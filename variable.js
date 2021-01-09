//1, Use Strict
//added in ES 5
//use this for Vanila Javascript.
'use strict';

//2. variable
// let (added in ES6)

let globalName = 'golobal name';
{
    let name = 'hiko';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

//var (don't ever use this!)
//var hoisting (move declaration from bottom to top)
//has no block scope
{
    age = 29;
    var age;
}
console.log(age);

age = 30;

//3. Constatns
//favor imuutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;


//4.Variavle types
//primitive, single item: number, string, boolean, null, undefined, symbol
//objest. box container
//function, first-class function

const count = 17; //interger
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity. Nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
//백틱기호를 이용해 원하는 스트링을 적고 ${}를 이용하면 변수의 값이 자동적으로 붙여진다.
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + 'type: ' + typeof helloBob);

//boolean
//false: 0, null, undefined, NaN, ''
//true: any other value 
const canRead = true;
const test = 3 < 1; // fasle
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, creat unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object, real-life object, data structure
const hiko = { name: 'hiko', age: 29 };
hiko.age = 90;
console.log(hiko.age); 

//5.Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
//JS가 멋대로 string의 조합으로 인식해 75가 출력
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
//JS가 멋대로 number으로 인식해 4가 출력
