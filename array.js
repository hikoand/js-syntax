"use strict";

// Array

//1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

//2. Indec position
const fruits = ["🍎", "🍊"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]); //가장 마지막 인덱스

//3. Looping over an array
// point all fruites

//a. for , i를 0부터 시작해서 프룻의 숫자만큼 돌면서 i를 증가시킴

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

/* let i = 0;
while (i < 2) {
  console.log(fruits[i]);
  i++;
} */

//b. for of
for (let any of fruits) {
  console.log(any);
}

//c. forEach
fruits.forEach((fruit) => console.log(fruit));
//프룻츠에 있는 forEach라는 API를 이용해 출력 , 콜백함수를 받아옴

//4. Addition, deletion, copy
// push: add an item to the end
fruits.push("🍋", "🥝");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift("🍇", "🌶");
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

//note!! shift, unshift are slower than pop, push
//(앞에서 빼려면 데이터를 다 하나씩 당겨야함)

// splice: removve an item by index position
fruits.push("🍑", "🥑", "🌽");
console.log(fruits);
fruits.splice(1, 1); //1번에 1개 지우기
console.log(fruits);
fruits.splice(1, 1, "🥒", "🍈"); //1번에 1개 지우고 오이메론 넣기
console.log(fruits);

//combine two arrays
const fruits2 = ["🍔", "🍟"];
const newFruites = fruits.concat(fruits2);
console.log(newFruites);

//5. Searching
//indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🍑"));
console.log(fruits.indexOf("🍣")); //-1, 없다는 뜻

//includes
console.log(fruits.includes("🍑"));
console.log(fruits.includes("🍣")); //false

//lastIndecOf
console.clear();
fruits.push("🌶");
console.log(fruits);
//같은 index가 두개 있을때 앞의 것
console.log(fruits.indexOf("🌶"));
//같은 index가 두개 있을 때 마지막의 것
console.log(fruits.lastIndexOf("🌶"));
