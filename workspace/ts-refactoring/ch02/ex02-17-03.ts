(() => {
let count = 0;
const myObj = {
  count: 0,
  //방문자를 한명 증가시킨다
  visit: function () {
    //this = myObj
    this.count++;
    const visit2 = () => {
      this.count++; //this = window
    };
    visit2();
  },
};

myObj.visit();
myObj.visit();
console.log("방문자수", myObj.count); //2

})();
