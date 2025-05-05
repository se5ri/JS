(() => {
/* 
일을 안한날 : 0 0:0
첫날:한톨 1:1
2날:두톨 2:2
3날:넷톨 3:4
4날:8톨 4:8
몇일을 모아야 쌀알을 천만개 모을 수 있을까? */

// let day = 1; // 날짜
// let count = 1; // 첫날 (1톨)
// let sum = count; // 첫날 받은 쌀알 바로 합산

// while (sum < 10000000) {
//   count *= 2; // 다음 날 받을 쌀알 2배 증가
//   sum += count; // 받은 쌀알을 합산
//   day++; // 날짜 증가
// }

// console.log(
//   `${day}일 동안 받았더니 ${sum}개 되었다. 내일은 ${count * 2}개 받을 수 있겠군`
// );

//강사님 코드
let day = 0;
let count = 1;
let sum = 0;

while (sum < 10_000_000) {
  sum += count;
  count = count * 2;
  day++;
}

console.log(
  `${--day}일 동안 받았더니 쌀알이 ${sum}개 되었다. 내일은 ${count}개 받을 수 있겠군.`
);

//30일 동안 몇개의 쌀알을 모을 수 있는가?

// while (day < 30) {
//   // 30일까지 반복
//   count *= 2; // 다음 날 받을 쌀알 2배 증가
//   sum += count; // 받은 쌀알을 합산
//   day++; // 날짜 증가
// }

// console.log(`30일 동안 받았더니 총 ${sum}개 되었다.`);

for (let i = 1; 1 <= 10; i++) {
  i = i + 1;
  sum += 1;
}

})();
