/*
기본값 매개변수(Default parameters)
*/

//b가 전달되지 않을 경우에서 a만 반환
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20)); //30
console.log(sum(50)); //NaN (호이스팅때문에 밑에꺼 같이 쓰면 50나옴)

// NaN 해결방법

//1.
function sum(a, b) {
  if (b === undefined) {
    return a;
  } else {
    return a + b;
  }
}

//2.
function sum(a, b) {
  b = b || 0;
  return a + b;
}

//3.
function sum(a, b = 0) {
  return a + b;
}

console.log(sum(10, 20)); //30
console.log(sum(50)); //50
