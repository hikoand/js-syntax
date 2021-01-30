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
