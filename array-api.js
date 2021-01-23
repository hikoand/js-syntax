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
