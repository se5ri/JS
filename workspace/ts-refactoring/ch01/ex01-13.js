"use strict";
(() => {
    /*
  논리 연산자 &&, ||, !
  */
    // 논리합(OR):
    // 피연산자 둘 중 하나라도 true일 경우 true가 됨.
    // 둘다 false일 경우에만 false가 됨.
    console.log(true || true); // true
    console.log(true || false); // true
    console.log(false || true); // true
    console.log(false || false); // false
    // ID 유효성 검사 예제
    let id = "honkjsdhfkjshdfiuwyehrifu";
    // ID 길이가 4보다 작거나 12보다 큰 경우 invalid
    let invalidId = id.length < 4 || id.length > 12;
    // 위와 동일한 조건을 AND와 NOT을 사용하여 표현
    invalidId = !(id.length >= 4 && id.length <= 12);
    console.log("id 입력 조건에 맞지 않음", invalidId);
    // OR 연산자의 특성
    // 앞의 값이 참이면 앞의 값을 반환
    // 앞의 값이 거짓이면 뒤의 값을 반환
    // falsy 값들: number 0, string '', boolean false, object null, undefined undefined
    // truthy 값들: 100, ' ', 'hello', true
    // OR 연산자 예제들
    // hello (앞의 값이 truthy)
    const result1 = "hello";
    const result11 = "world";
    // 90 (앞의 값이 truthy)
    const result2 = 90;
    const result22 = 30;
    // guset (앞의 값이 falsy)
    const result3 = null;
    const result33 = "guset";
    //guset (앞의 값이 falsy)
    const result4 = undefined;
    const result44 = "guset";
    // 30 (앞의 값이 falsy)
    const result5 = 0;
    const result55 = 30;
    // guset (앞의 값이 falsy)
    const result6 = "";
    const result66 = "guset";
    console.log(result1 || result11);
    console.log(result2 || result22);
    console.log(result3 || result33);
    console.log(result4 || result44);
    console.log(result5 || result55);
    console.log(result6 || result66);
    // let userName = '체리핑';
    // let userName = '';
    // let userName = null;
    let userName = undefined;
    let userAge = 0;
    // 기본값 설정 예제
    console.log(userName || "널핑"); // userName이 falsy면 '널핑' 출력
    console.log(userAge || "나이 미상"); // userAge가 falsy면 '나이 미상' 출력
    // 논리곱(AND):
    // 피연산자 둘 다 true일 경우 true가 됨.
    // 둘 중 하나라도 false일 경우 false가 됨.
    console.log(true && true); // true
    console.log(true && false); // false
    console.log(false && true); // false
    console.log(false && false); // false
    // AND 연산자의 특성
    // 앞의 값이 참이면 뒤의 값을 반환
    // 앞의 값이 거짓이면 앞의 값을 반환
    // 안전한 속성 접근 예제
    // id = null; // type은 object
    console.log("글자수", id && id.length); // id가 null이면 null 반환
    console.log("글자수", id?.length); // 옵셔널 체이닝 연산자 사용
})();
