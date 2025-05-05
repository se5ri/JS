(() => {
/*
if-else if문 사용

1. 정보처리 기사 필기 시험의 과목은 소프트웨어 설계, 소프트웨어 개발, 데이터베이스 구축, 프로그래밍 언어 활용, 정보 시스템 구축 관리 입니다.
다섯 과목의 점수가 다음과 같을 때 총점과 평균을 출력하는 프로그램을 작성하세요.
const softwareDesign = 48; // 1. 소프트웨어 설계
const softwareDevelopment = 80; // 2. 소프트웨어 개발
const databaseSetup = 50; // 3. 데이터베이스 구축
const programmingUsage = 70; // 4. 프로그래밍 언어 활용
const systemManagement = 55; // 5. 정보 시스템 구축 관리
출력 결과:
총점: 303
평균: 60.6

2. 최고점과 최저점을 추가로 출력하세요
출력 결과:
총점: 303
평균: 60.6
최고점: 80
최저점: 48

3. 과목당 40점 이상, 전과목 평균 60점 이상이면 합격입니다.
합격 여부를 추가로 출력하세요.
출력 결과:
총점: 303
평균: 60.6
최고점: 80
최저점: 48
축하합니다. 합격입니다.

4. 만약 불합격일 경우 불합격 사유를 추가로 출력하세요.
출력 결과 1: softwareDesign = 40일 경우
총점: 295
평균: 59
최고점: 80
최저점: 40
아쉽지만 불합격입니다. 사유: 평균 60점 미달

출력 결과 2: softwareDesign = 30일 경우;
총점: 285
평균: 57
최고점: 80
최저점: 30
아쉽지만 불합격입니다. 사유: 평균 60점 미달(57점)
아쉽지만 불합격입니다. 사유: 과락 40점 미달(30점)
*/

const softwareDesign = 48; // 1. 소프트웨어 설계
const softwareDevelopment = 80; // 2. 소프트웨어 개발
const databaseSetup = 50; // 3. 데이터베이스 구축
const programmingUsage = 70; // 4. 프로그래밍 언어 활용
const systemManagement = 55; // 5. 정보 시스템 구축 관리

// 1. 총점과 평균 계산
const total =
  softwareDesign +
  softwareDevelopment +
  databaseSetup +
  programmingUsage +
  systemManagement;
const average = total / 5;

// 2. 최고점 찾기 (이미 작성된 코드)
let max = 0;
let min = 0;

if (
  softwareDesign > softwareDevelopment &&
  softwareDesign > databaseSetup &&
  softwareDesign > programmingUsage &&
  softwareDesign > systemManagement
) {
  max = softwareDesign;
} else if (
  softwareDevelopment > softwareDesign &&
  softwareDevelopment > databaseSetup &&
  softwareDevelopment > programmingUsage &&
  softwareDevelopment > systemManagement
) {
  max = softwareDevelopment;
} else if (
  databaseSetup > softwareDesign &&
  databaseSetup > softwareDevelopment &&
  databaseSetup > programmingUsage &&
  databaseSetup > systemManagement
) {
  max = databaseSetup;
} else if (
  programmingUsage > softwareDesign &&
  programmingUsage > softwareDevelopment &&
  programmingUsage > databaseSetup &&
  programmingUsage > systemManagement
) {
  max = programmingUsage;
} else {
  max = systemManagement;
}

// 최저점 찾기 (같은 패턴으로 구현)
if (
  softwareDesign < softwareDevelopment &&
  softwareDesign < databaseSetup &&
  softwareDesign < programmingUsage &&
  softwareDesign < systemManagement
) {
  min = softwareDesign;
} else if (
  softwareDevelopment < softwareDesign &&
  softwareDevelopment < databaseSetup &&
  softwareDevelopment < programmingUsage &&
  softwareDevelopment < systemManagement
) {
  min = softwareDevelopment;
} else if (
  databaseSetup < softwareDesign &&
  databaseSetup < softwareDevelopment &&
  databaseSetup < programmingUsage &&
  databaseSetup < systemManagement
) {
  min = databaseSetup;
} else if (
  programmingUsage < softwareDesign &&
  programmingUsage < softwareDevelopment &&
  programmingUsage < databaseSetup &&
  programmingUsage < systemManagement
) {
  min = programmingUsage;
} else {
  min = systemManagement;
}

// 결과 출력
console.log("총점:", total);
console.log("평균:", average.toFixed(1));
console.log("최고점:", max);
console.log("최저점:", min);

// 3 & 4. 합격 여부 및 불합격 사유 확인
let failReasons = [];

// 과락 여부 확인
if (softwareDesign < 40) {
  failReasons.push(`과락 40점 미달(${softwareDesign}점)`);
} else if (softwareDevelopment < 40) {
  failReasons.push(`과락 40점 미달(${softwareDevelopment}점)`);
} else if (databaseSetup < 40) {
  failReasons.push(`과락 40점 미달(${databaseSetup}점)`);
} else if (programmingUsage < 40) {
  failReasons.push(`과락 40점 미달(${programmingUsage}점)`);
} else if (systemManagement < 40) {
  failReasons.push(`과락 40점 미달(${systemManagement}점)`);
}

// 평균 점수 확인
if (average < 60) {
  failReasons.push(`평균 60점 미달(${average.toFixed(1)}점)`);
}

// 합격 여부 출력
if (failReasons.length === 0) {
  console.log("축하합니다. 합격입니다.");
} else {
  console.log("아쉽지만 불합격입니다. 사유:", failReasons.join("\n"));
}

})();
