(() => {
/*
별찍기 1
*
**
***
****
***** 
*/

let star = "";
const line = 5;

for (let i = 0; i < line; i++) {
  star += "*";
  console.log(star);
}

/* 별찍기 2
 */

for (let i = 1; i <= line; i++) {
  let space = " ".repeat(line - i); // 왼쪽 공백 추가
  let stars = "*".repeat(i); // 별 추가
  console.log(space + stars);
}

/* 다이아 몬드 별찍기 */
// const line = 5;

// ▲ 위쪽 삼각형
for (let i = 1; i <= line; i++) {
  let space = " ".repeat(line - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(space + stars);
}
// ▼ 아래쪽 삼각형
for (let i = line - 1; i >= 1; i--) {
  let space = " ".repeat(line - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(space + stars);
}

})();
