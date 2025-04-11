console.log("프로그램 시작."); // [1] 가장 먼저 실행되는 코드

// 함수 a 정의
function a(n1) {
  console.log("a 시작.", n1); // [3] a 함수 시작, n1 출력 (10)

  const n2 = b(n1); // [4] b 함수 호출, n1 값을 넘김
  console.log("a 종료."); // [8] b 함수가 끝난 후 실행됨
}

// 함수 b 정의
function b(n3) {
  console.log("b 시작."); // [5] b함수 시작

  const n4 = c(n3); // [6] c함수 호출, n3 값을 넘김
  console.log("b 종료."); // [7] c함수가 끝난 후 실행됨

  return n4; // [7-1] c에서 받은 값을 반환 (a 함수에서 n2로 저장)
}

// 함수 c 정의
function c(n5) {
  console.log("c 시작.", n5); // [6-1] c 함수 시작, n5 출력 (10)

  const n6 = n5 + 10; // n6 = 10 + 10 → 20
  console.log("c 종료."); // [6-2] 연산 후 로그 출력

  /*  const user = JSON.parse(`{ 'age':${n6} }`); // 속성은 " "(큰따옴표) ''(작은따옴표를 썼기 때문에 에러발생)
  console.log(user); */
  return n6; // [6-3] 결과 반환 → b 함수에서 n4로 저장
}

// TODO: 함수 단원에서 확인
// 함수에 전달하는 인자의 개수와 매개변수 개수가 달라도 자바스크립트는 에러 없이 실행됨
a(10); // [2] a 함수 호출

console.log("프로그램 종료."); // [9] 모든 함수가 끝난 뒤 실행
