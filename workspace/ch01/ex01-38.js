/*
전역 변수와 지역 변수
*/

/**
 * 지정한 두 수의 최대값을 반환한다.
 * @param {number} n1
 * @param {number} n2
 * @returns {number} - 최대값
 */
function max(n1, n2) {
  //TODO hoisting 단원
  /*   let result;
  //let 사용(요즘방법)
  if (n1 > n2) {
    result = n1;
  } else {
    result = n2;
  }
  return result;
} */

  //var사용
  if (n1 > n2) {
    var result = n1;
  } else {
    var result = n2;
  }
  return result;
}

console.log(max(10, 20)); // 20
console.log(max(200, 30)); // 200

//질문: 마치 let은 지역변수 var는 전역변수처럼 사용되는 건가요? X

/* var 선언문: 함수 단위의 유효범위를 갖는 변수 선언문 (재할당 O)
let 선언문: 블록 단위의 유효범위를 갖는 변수 선언문 (재할당 0)
const 선언문: 블로단위의 유효범위를 갖는 상수 선언문 (재할당X) */
