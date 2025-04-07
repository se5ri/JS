/* symbol */

//string
var s1 = "hello";
var s1 = "world";
var s1 = "hello";

console.log(s1 === s2); //false
console.log(s2 === s3); //false
console.log(s1 === s3); //true

//Symbol은 값이 같아도 서로 다른 고유한 값으로 취급한다.
var s1 = Symbol("hello");
var s2 = Symbol("world");
var s3 = Symbol("hello");

console.log(s1 === s2); //false
console.log(s2 === s3); //false
console.log(s1 === s3); //false
