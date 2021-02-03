//함수 선언
// { }는 함수의 기능을 수행하는 코드블럭, addTwoNum라는 함수이름은 우리가 임의로 지정함
// a,b 인자는 외부에서 받아온 데이터를 변수처럼 지정해놓는 것, 데이터는 호출하는 것에 따라 달라짐

function addTwoNum(a, b) {
  return a + b;
}

const sum = addTwoNum(3, 4);
console.log(sum);

//함수를 다른 변수에 할당하기
//함수도 object라서 메모리 어딘가의 함수이름이 가르키고있는 (ref) 코드블럭이 저장되어있음

function add(num1, num2) {
  return num1 + num2;
}

const doSomething = add;

//⬆️ doSomething이라는 변수는 add가 가르키고 있는 ref가 복사되어 들어오게됨
// 똑같은 함수를 가르키고 있음

const result = doSomething(2, 3);
console.log(result);

const result2 = add(2, 3);
console.log(result2);

//함수를 다른 함수에 인자로 전달

function surprise(operator) {
  const result3 = operator(2, 3); //add(2,3)
  console.log(result3);
}

surprise(add);
