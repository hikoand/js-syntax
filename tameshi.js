"use strict";
//constructor = 생성자

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const hiko = new Person("hiko", 28);
console.log(hiko.name);
console.log(hiko.age);
hiko.speak();

//age라는 getter를 정의하는 순간
//this.age 는 메모리에 올라간 데이터를 읽어오는게아니라
//getter를 호출하게됨

class Fruits {
  constructor(color, LikeOrHate) {
    this.color = color;
    this.LikeOrHate = LikeOrHate;
  }

  speak() {
    console.log(`I ${this.LikeOrHate} it.`);
  }
}

const apple = new Fruits("red", "like");
console.log(apple.color);
console.log(apple.LikeOrHate);
apple.speak();

//Getter and Setter vending machine example
/* 자판기 = class
커피갯수 = int 
동전넣기, 커피만들기 = method

커피갯수를 -1로 설정하면 안됌
그래서 getter and setter를 사용함

사용자가 멍청하게 -1 설정해도 우리는 setter를 이용해 0 으로 만들어줌 
처음부터 다른 사람이 int를 설정하지 못하게,
 커피갯수를 privit 으로 만듬 = incapsulation */

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
    /*if (value < 0) {
      throw Error("age can not be negative!");
    }*/
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

// 나이가 -1 이라는 것은 불가능
// get을 이용해 값을 return 하고,
// set을 이용해 값을 설정할 수 있다.
// (set은 값을 설정하기 때문에 value를 받아와야함)

//age라는 getter를 정의하는 순간, 바로 this.age (55)는 메모리를 읽어 오는 것이 아니라,
//getter를 호출하게됨

//setter를 정의하는 순간, =age (55) 를 호출 할 때 (값을 할당할 때) 바로 메모리 값을 할당하는게 아니라,
//setter를 호출하게됨
//즉 전달된 value를 this.age에 할당할 때, 메모리 값을 업데이트 하는 것이 아니라
//setter를 호출하게되서 이 것이 무한으로 반복됨
//그래서 다른 이름을 지정해줌 _age

//getters => access properties
//setters => change (mutate) them
