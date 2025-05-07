// import 구문은 보통 모듈의 최상단에 위치
// Named Import
//import { plus, minus } from "./math.js";
import { plus as add, Member, minus } from "./math.js";

// Default Import
import MyMath from "./math.js";

//Mixed Import(권장 X -> 헷갈림)
import yourMath, { plus } from "./math.js";

plus(1, 2);
minus(2, 3);

MyMath.plus(3, 4);
MyMath.minus(4, 5);
MyMath.multiply(5, 6);

add(7, 8);

yourMath.multiply(9, 10);

const haru: Member = {
  name: "하루",
  age: 5,
};
console.log(haru);

if (MyMath.minus(5, 6) < 0) {
  //Dynamic Import
  // 방법 1 : ES20215 Promise
  import("./math.js").then((dynamicMath) => {
    dynamicMath.plus(7, 8);
  });
  // 방법 2 : ES2017 async/await
  const dynamicMath2 = await import("./math.js");
  dynamicMath2.minus(8, 9);
}
