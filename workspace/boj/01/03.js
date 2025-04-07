/*
제목: A-B
설명: 두 수를 입력받고 뺄셈을 한 결과를 출력하는 문제
제출: https://www.acmicpc.net/submit/1001

문제
두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
첫째 줄에 A-B를 출력한다.

예제 입력 1
3 2

예제 출력 1
1
*/

function main() {
  const data = getData();
  //data에서 값을 꺼내서 문제 해결하는 코드 작성
  console.log(data.a - data.b);
}

main();

// 입력값 예시:
// 10 20

/**
 * 표준 입력장치 (콘솔)에서 한 줄로 입력된 두 건의 데이터를 읽어서 숫자로 변환한 후
 * 객체에 a, b 속성으로 저장하여 반환한다.
 * @returns {object} a, b 속성에 입력값이 저장된 객체
 */
function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim().split(" ");
  // console.log(fileData);

  const result = new Object();

  result.a = parseInt(fileData[0]); // 10
  result.b = parseInt(fileData[1]); // 20

  return result; //함수는 오직 하나의 값만 반환할 수 있다.
}

/* const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");
// console.log(fileData);

const a = parseInt(fileData[0]);
const b = parseInt(fileData[1]);

console.log(a - b); */
