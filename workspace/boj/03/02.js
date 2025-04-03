/*
제목: A+B - 3
설명: A+B를 여러 번 출력하는 문제
제출: https://www.acmicpc.net/submit/10950

문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 테스트 케이스의 개수 T가 주어진다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
각 테스트 케이스마다 A+B를 출력한다.

예제 입력 1
5
1 1
2 3
3 4
9 8
5 2

예제 출력 1
2
5
7
17
7
*/

const input = require("fs").readFileSync(0).toString().trim().split("\n");
/* require('fs'): Node.js의 파일 시스템 모듈을 가져옴.
readFileSync(0): 표준 입력을 동기적으로 읽음.
이는 보통 온라인 저지(백준, 코드업)에서 입력을 한꺼번에 읽어올 때 사용.
.toString().split('\n'):
입력 데이터를 문자열로 변환한 후 줄 단위로 배열로 변환.
즉, input은 문자열 배열이며, 각 요소는 한 줄씩 저장. */

const num = parseInt(input[0]);
/* input[0]: 입력의 첫 번째 줄 (테스트 케이스 개수)을 가져옴.
Number(input[0]): 문자열을 숫자로 변환하여 변수 num에 저장. */

for (let i = 1; i <= num; i++) {
  let score = input[i].split(" ");
  /*  input[i]: 현재 줄의 입력을 가져옴.
.split(' '): 공백을 기준으로 나눠서 두 숫자를 배열로 저장. */
  console.log(parseInt(score[0]) + parseInt(score[1]));
  /* score[0], score[1]: 배열의 첫 번째와 두 번째 요소(숫자)를 가져옴.
Number(score[0]) + Number(score[1]): 두 숫자를 정수로 변환한 후 더함.
console.log(...): 결과를 출력합니다. */
}
