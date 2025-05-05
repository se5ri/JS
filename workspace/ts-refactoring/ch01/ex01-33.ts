(() => {
/*
반환값이 있는 함수
*/

add(); //110
add(); //110

add100(10); //110
add100(20); //120

sum(10, 20); //30
sum(30, 20); //70

// 10+100 결과를 출력한다(add)

function add() {
  console.log(10 + 100);
}

// 전달받은 숫자와 100의 합계를 출력하는 함수(add100)
function add100(num) {
  console.log(num + 100);
}
// 전달받은 두 숫자의 합계를 출력하는 함수(sum)
function sum(num1, num2) {
  console.log(num1 + num2);
}

//강사님 코드
// 10+100 결과를 출력한다(add)

function add() {
  const n1 = 10;
  const n2 = 100;
  const result = n1 + n2;
  console.log(result);
}

// 전달받은 숫자와 100의 합계를 출력하는 함수(add100)
function add100(n1) {
  const n2 = 100;
  const result = n1 + n2;
  console.log(result);
}
// 전달받은 두 숫자의 합계를 출력하는 함수(sum)
function sum(n1, n2) {
  const result = n1 + n2;
  console.log(result);
}

// 전달받은 두 숫자의 합계를 출력하는 함수(getSum)
function sum(n1, n2) {
  const result = n1 + n2;
  return result;
}

let returnVal = getSum(40, 50);
console.log(returnVal);

})();
