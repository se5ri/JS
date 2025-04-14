/*
제목: 최소, 최대
설명: 최솟값과 최댓값을 찾는 문제
제출: 

문제
N개의 정수가 주어진다. 
이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 
둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 
모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

출력
첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.

예제 입력 1
5
20 10 35 30 7


예제 출력 1
7 35
*/

let input = require("fs").readFileSync(0).toString().split("\n");

let count = Number(input[0]); // 첫 번째 줄: 정수의 개수
let strNumbers = input[1].split(" "); // 두 번째 줄: 문자열 배열로 분리

let max = Number(strNumbers[0]); // 첫 번째 숫자로 초기화
let min = Number(strNumbers[0]);

// 반복문으로 각 문자열을 숫자로 바꾸며 비교
for (let i = 1; i < count; i++) {
  let num = Number(strNumbers[i]);

  if (max < num) {
    max = num;
  }

  if (min > num) {
    min = num;
  }
}

console.log(`${min} ${max}`);
