/*
논리 연산자 &&, ||, !
*/

//논리 합(or)
console.log(true || true); //T
console.log(true || false); //T
console.log(false || true); //T
console.log(false || false); //F

var id = "hong";
var invalidId = id.length < 4 || id.length > 12;
var invalidId = !(id.length >= 4 && id.length <= 12);
console.log("id 입력 조건에 맞지 않음", invalidId);

//앞의 값이 참이면 앞의 값을 반환, 앞의 값이 거짓이면, 뒤의 값 반환
//truthy: 100, ' ', 'hello', true
//falsy: number 0, string' ', boolean false, null, undefined
console.log("hello" || "world"); //hello
console.log(90 || 30); //90
console.log(null || "world"); //world
console.log(undefined || "hello"); //hello
console.log(0 || 100); //100
console.log("" || "guset"); //guset

let userName = "체리핑";
let userName_n = undefined;
let userAge = 8;
let userAge_n = 0;
console.log(userName || "guest"); //체리핑
console.log(userName_n || "널핑"); //널핑
console.log(userAge_n || "나이 미상"); //나이 미상

//논리 곱(&&)
console.log(true || true); //T
console.log(true || false); //F
console.log(false || true); //F
console.log(false || false); //F

//앞의 값이 참이면 뒤의 값 반환, 앞의 값의 거짓이면 앞의 반환
id = null; //type은 object
console.log("글자수", id && id.length);
console.log("글자수", id?.length);
