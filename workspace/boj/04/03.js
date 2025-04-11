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

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

// 첫 번째 줄에서 숫자의 개수 N을 정수로 변환하여 저장
const N = parseInt(input[0]);

// 두 번째 줄에서 숫자들을 공백 기준으로 나누어 문자열 배열로 저장
const strNumbers = input[1].split(" ");

// 최솟값을 구하기 위해 초기값을 무한대로 설정
let min = Infinity;
// 최댓값을 구하기 위해 초기값을 음의 무한대로 설정
let max = -Infinity;

// N개의 숫자 각각을 순회하면서 비교
for (let i = 0; i < N; i++) {
  const num = parseInt(strNumbers[i]); // 문자열을 정수로 변환

  if (num < min) min = num; // 현재 숫자가 최솟값보다 작으면 최솟값 갱신
  if (num > max) max = num; // 현재 숫자가 최댓값보다 크면 최댓값 갱신
}

// 출력
console.log(min + " " + max);
