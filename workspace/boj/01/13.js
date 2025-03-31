/*
제목: 개
설명: ", `, \ 등의 문자에 주의하며 개를 출력하는 문제
제출: https://www.acmicpc.net/submit/10172

문제
아래 예제와 같이 개를 출력하시오.

입력
없음.

출력
개를 출력한다.

예제 입력 1
예제 출력 1
|\_/|
|q p|   /}
( 0 )"""\
|"^"`    |
||_/=\\__|
*/

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
console.log('|\\_/| \n|q p|   /}\n( 0 )"""\\ \n|"^"`    |\n||_/=\\\\__|');
