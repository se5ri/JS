/*
반복문 - while문
*/
/* 1부터 10까지 출력하세요.*/

/* 1부터 10까지의 모든 수의 합계를 출력하세요.

출력결과:
55
*/

let sum = 0;
let i = 1;
while (i <= 10) {
  console.log(i);
  sum += i;
  i++;
}
console.log("합계:", sum);
