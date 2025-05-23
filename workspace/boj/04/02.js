/*
제목: X보다 작은 수
설명: 배열을 입력받고 X보다 작은 수를 찾는 문제
제출: https://www.acmicpc.net/submit/10871 

문제
정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 
이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 N과 X가 주어진다. (1 ≤ N, X ≤ 10,000)

둘째 줄에 수열 A를 이루는 정수 N개가 주어진다. 
주어지는 정수는 모두 1보다 크거나 같고, 10,000보다 작거나 같은 정수이다.

출력
X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. X보다 작은 수는 적어도 하나 존재한다.

예제 입력 1
10 5
1 10 4 9 2 3 8 5 7 6

예제 출력 1
1 4 2 3
*/

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
//console.log(fileData);

let inputs = [];
inputs = input[0].split(" ");
// console.log(inputs);  //--> [ '10', '5' ]

let total = Number(inputs[0]);
let limit = Number(inputs[1]);

let numbers = [];
numbers = input[1].split(" ");
// console.log(numbers);  //-->  [ '1', '10', '4', '9', '2', '3', '8', '5', '7', '6' ]

result = "";
for (let i = 0; i < total; i++) {
  if (Number(numbers[i]) < limit) {
    result += numbers[i] + " ";
  }
}

console.log(result);
