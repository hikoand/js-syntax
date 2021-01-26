// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];

  const result = fruits.join("|");
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "apple, kiwi, banana, cherry";
  const result = fruits.split(","); // 인자로 구분자 전달해야함
  console.log(result);
}

// Q3. make this array look like this: [5,4,3,2,1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
}

// 04. make new array without the first two elements
//splice는 배열자체를 수정하기 때문에 사용할 수 없음

{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be : [45, 80, 90, 66, 88]

{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q.10. make a string containing all the scores
// result should be : '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score) //학생드를 점수로 뱐환
    .filter((score) => score >= 50) //50점 이상만 필터링
    .join(); //조인하기
  console.log(result);
}

//bonus! do Q10 sorted in ascending order
// result should be '45, 66, 80, 88, 90'

{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
