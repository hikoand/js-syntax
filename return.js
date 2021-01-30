//return : 함수안에서만 사용, 함수를 호출한 곳으로 데이터를 전달(반환)하기 위해 사용
//return이 없으면 함수로 처리된 결과물을 알 수 없음

function sum(num1, num2) {
  return num1 + num2;
}
//데이터 반환⬇️
const result = sum(10, 20);
console.log(result);

//무엇 리턴할지 쓰지않으면 함수는 그대로 종료됨
function printReturn() {
  console.log("return전");
  return;
  console.log("return후");
}
printReturn();

function sum3(num1, num2) {
  return num1 + num2;
}

const sum_result_1 = sum(10, 20);
const sum_result_2 = sum(20, 30);

const sum_result = sum_result_1 + sum_result_2;

console.log("총합은 " + sum_result + "입니다.");

//return을 활용하면 함수는 연산의 logic만 담당하게된다.
