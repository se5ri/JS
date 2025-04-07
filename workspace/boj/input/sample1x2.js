function main() {
  const data = getData();
  //data에서 값을 꺼내서 문제 해결하는 코드 작성
  console.log(data.a + data.b);
}

main();

// 입력값 예시:
// 10 20

/**
 * 표준 입력장치 (콘솔)에서 한 줄로 입력된 두 건의 데이터를 읽어서 숫자로 변환한 후
 * 객체에 a, b 속성으로 저장하여 반환한다.
 * @returns {string} 읽은 데이터
 */
function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim();

  return fileData; //함수는 오직 하나의 값만 반환할 수 있다.
}
