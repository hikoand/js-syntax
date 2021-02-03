//변수(variable) : 우리가 처리해야하는 데이터를 담을 수 있도록 도와주는 것
//변수를 통해서 데이터에 접근, 업데이트 가능
//number, string, boolean, null, undefined (primitive type : 최소한의 크기 데이터)

let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

number2 = 3;
console.log(number);
console.log(number2);

//위의 data type을 제외한 것들은 모두 object
//object는 최소한 한두가지의 데이터를 묶어놓은 것 (배열, 함수 등등)
//object는 너무 뚱뚱하기 때문에 단순히 변수를 선언하는 것 처럼 담아둘 수 없음

//object
let obj = {
  name: "ellie", //key: "value"
  age: 5,
};
console.log(obj.name); //obj라는 변수안의 name이라는 key의 value를 찾고있군

let obj2 = obj; //변수를 할당하면 변수 값이 복사되어 들어온다
console.log(obj2.name);

//그러나 primitive type은 그 값이 바로 들어오지면 obj의 경우,
//그것을 가르키는 주소(reference)가 복사되어 들어옴

obj2.name = "james";
console.log("-----");
console.log(obj.name);
console.log(obj2.name);

//obj를 const로 정의하면?
//변수에 obj자체가 담겨있는게 아니라 obj는 어딘가에 저장되고있고 그걸 가르키고있는 ref가 들어있기 때문에
//ref 자체를 변경불가하지만 ref가 가르키고있는 안의 내용은 변경가능

const object = {
  name: "hiko",
  age: 29,
};
object.name = "james";
console.log(object.name);
