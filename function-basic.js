//포기하지 마세요

//함수선언

function doSomething() {
  console.log("hello");
}

function add(a, b) {
  const sum = a + b;
  return sum;
}
//return을 사용하면 함수호출 부분으로 데이터를 전달(반환)하게 된다.
//사용하지 않는다면 결과물을 모른체로 함수가 실행되고 끝나버림.

//함수호출
doSomething();

const result = add(1, 2);
console.log(result);

//함수자체를 인자로 전달하기
//function something(sub()) 처럼 함수안에 함수()를 호출하면 값이 출력됨
//함수자체로 출력하기 위해선 ()를 쓰지않고 함수이름만 인자로 전달해야함
function something(sub) {
  console.log(sub);
  const result_2 = sub(10, 9);
  console.log(result_2);
}

function sub(a, b) {
  const sum_2 = a - b;
  return sum_2;
}

something(sub);
