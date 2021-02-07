"use strict";

//getters => access properties
//setters => change (mutate) them

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "jobs", -1);
console.log(user1.age);

//잘못된 코드

/*
get age() {
    return this.age;
  }

  set age(value) {
    this.age = value < 0 ? 0 : value;
  }
*/

/* age라는 getter를 정의하는 순간, 바로 this.age (55)는 메모리를 읽어 오는 것이 아니라,
getter를 호출하게됨 

setter를 정의하는 순간, =age (55) 를 호출 할 때 (값을 할당할 때) 바로 메모리 값을 할당하는게 아니라,
setter를 호출하게됨

즉 전달된 value를 this.age에 할당할 때, 메모리 값을 업데이트 하는 것이 아니라
setter를 호출하게되서 이 것이 무한으로 반복됨
그래서 다른 이름을 지정해줌 _age */

//Q1._age를 변수에 정의하지 않고 사용?

/* 이미 생성자 constructor를 통해서 선언된 this.age=age 값을
  get이란 메소드를 사용해서 가져온 후,
  this.age를 this._age로 변수명을 수정한 것을 리턴하는 함수를 사용해서 선언하고
  그것을 가지고 다시 밑에서 set이란 메소드를 사용해서
  value 값을 지정한 거죠 */

// getter는 age를 .age로 return하고
// setter는 .age의 value가 0 보다 작을 때 0 으로 바꿔준다.
