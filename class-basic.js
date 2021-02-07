//Counter라는 class에는 자체적으로 counter라는 변수가 있다.
//Counter는 class를 이용해 object를 만드는 순간 0으로 초기화된다.
class Counter {
  constructor() {
    this.counter = 0;
  }

  increase() {
    this.counter++;
    console.log(this.counter);
  }
}
