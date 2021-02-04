//false : 0, -0 , "" , null, undefined, NaN
//let num; 같이 변수선언하고 값을 할당하지않으면 undeined이라 false
//true : -1 , "hello" , [ ] 빈 배열은 object 그 자체이기 때문에 true , "false"

let obj = {
  name: "ellie",
};
if (obj) {
  console.log(obj.name);
}

//위와 같음

obj && console.log(obj.name);
//해석 : obj가 있다면 name에 접근해라
