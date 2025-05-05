(() => {
/*
기본 함수
*/

console.log("안녕 Function!");
console.log("안녕 Function!");
console.log("안녕 Function!");

//함수 생성
function sayHello() {
  console.log("안녕 Function!");
}

//함수호출
sayHollo();

//100번 호출
for (let i = 0; i < 100; i++) {
  sayHello();
}

//하나로 합친거
//함수 생성
javascript(function sayHello() {
  console.log("Hello function");
})();

})();
