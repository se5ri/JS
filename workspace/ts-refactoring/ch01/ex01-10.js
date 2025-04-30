/*
증감 연산자 a++, a--, ++a, --a
*/

var count = 0;
console.log(count);

count = count + 1;
count += 1;
count++;

console.log(count); //3

console.log(count++); //3 출력은 3 count값은 4
console.log(++count); //5

// var sum = count++ + 10; /* 5+10=15 count는 6*/
count++;
var sum = count + 10; //16
console.log(sum);

var sum = ++count + 10; /* 7+10=17 */
console.log(sum);
