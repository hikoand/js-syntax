//class에 우리가 원하는 callback함수를 전달하면서 만들고 필요할때마다 사용하면된다
//하나의 class에 다른 object를 만들어 서로 다른 기능을 수행하는 object를 만들수있음

class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter);
    }
  }
}

function printSomething(num) {
  console.log(`Wow! ${num}`);
}

function alertNum(num) {
  alert(`alert! ${num}`);
}

const printCounter = new Counter(printSomething);
const alerCounter = new Counter(alertNum);
