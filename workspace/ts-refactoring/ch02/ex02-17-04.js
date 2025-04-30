let count = 0;
const myObj = {
  count: 0,
  //방문자를 한명 증가시킨다
  visit: function () {
    //this = myObj
    this.count++;
    const visitN = function (n) {
      this.count += n; //this = myobj
    };
    visitN.call(this, 2); // count를 2명 증가
    visitN.call(this, 2); // count를 2명 증가

    const visit3 = visitN.bind(this, 3);
    visit3(); // count를 3명 증가
    visit3(); // count를 3명 증가
  },
};

myObj.visit();
myObj.visit();
console.log("방문자수", myObj.count); //2
