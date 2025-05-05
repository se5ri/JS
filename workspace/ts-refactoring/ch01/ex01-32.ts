(() => {
/*
매개변수를 가진 함수 - 도어락
올바른 비밀번호가 입력되면 문이 열린다.
잘못된 비밀번호가 입력되면 경보음이 울린다.
*/

function doorLock(password = " ") {
  const pwd = "1234";
  password = password || " ";
  const sunPassword = password?.slice(-pwd.length);
  if (password === pwd) {
    console.log("문이 열립니다.");
  } else {
    console.log("삐!삐!삐!삐! 비밀번호가 틀렸습니다");
  }
}

doorLock("1111");
doorLock("123243451234");
doorLock(); //undefined가 된다. 함수가 정의만 되어있고 값이 없기 때문에(실행은 되지만, 값이 없어서 else구문)

})();
