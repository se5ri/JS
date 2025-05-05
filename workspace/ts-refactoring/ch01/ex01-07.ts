(() => {
  /*
기본 데이터 타입 - BigInt(9천조 이상 다룰 때 사용)
*/

  let maxNum: number = Number.MAX_VALUE; //number로 표현 가능한 최대값
  let maxSafeNum: number = Number.MIN_SAFE_INTEGER; //안전한(정확한) 정수의 최대값

  console.log(maxNum, maxSafeNum);

  console.log(
    maxSafeNum - 1,
    maxSafeNum,
    maxSafeNum + 1,
    maxSafeNum + 2,
    maxSafeNum + 3
  );

  //BigInt
  let b1: bigint = 12345n;
  let b2: bigint = BigInt(maxSafeNum);

  console.log(b2 - 1n, b2, b2 + 1n, b2 + 2n, b2 + 3n);
})();
