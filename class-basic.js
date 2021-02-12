//Counter라는 class에는 자체적으로 counter라는 변수가 있다.
//Counter는 class를 이용해 object를 만드는 순간 0으로 초기화된다.
class Counter {
  constructor() {
    this.counter = 0;
  }

  //5의 배수마다 "yo"라고 출력하는 method
  /*
  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      console.log("yo!");
    }
  }
}

const coolCounter = new Counter();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

*/

  //callback활용하기

  increase(runIf5Times) {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      runIf5Times(this.counter);
    }
  }
}

//callback을 전달하면서 원하는 것을 컨트롤할 수 있음
//즉 class Counter자체는 숫자가 5배가 될때마다 어떤 동작을 하는지 자체적으로 결정되있지않음
//사용자가 원하는 기능을 전달해 수행할 수 있다.

const coolCounter = new Counter();
function printSomething(num) {
  console.log(`Wow! ${num}`);
}
function alertNum(num) {
  alert(`Wow! ${num}`);
}

coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(printSomething);
coolCounter.increase(alertNum);
coolCounter.increase(printSomething);
