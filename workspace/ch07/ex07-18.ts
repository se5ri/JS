// 내장 객체 Array - some(), every()

(() => {
  const arr = [1, 2, 3];
  // 2의 배수가 하나라도 있나?
  const hasEven = arr.some((n) => n % 2 === 0); // 2는 2의 배수이므로 true
  // 전부 2의 배수인가?
  const allEven = arr.every((n) => n % 2 === 0); // 1과 3은 2의 배수가 아니므로 false

  console.log(hasEven, allEven);
})();
