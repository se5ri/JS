const score = 99;

/* if (score >= 90 && score <= 100) {
  // score가 90 이상 100 이하이면 "A" 출력
  console.log("A");
} else if (score >= 80) {
  // score가 80 이상 90 미만이면 "B" 출력
  console.log("B");
} else if (score >= 70) {
  // score가 70 이상 80 미만이면 "C" 출력
  console.log("C");
} else if (score >= 60) {
  // score가 60 이상 70 미만이면 "D" 출력
  console.log("D");
} else {
  // score가 60 미만이면 "F" 출력
  console.log("F");
} */

//10의 자리만 꺼냄 36.6/10 -> 3.66
switch (parseInt(score / 10)) {
  case 10:
    console.log("A");
    break;
  case 9:
    console.log("B");
    break;
  case 8:
    console.log("C");
    break;
  case 7:
    console.log("D");
    break;
  default:
    console.log("F");
}
