// 세미콜론
console.log('Hello Codeit!');console.log(10+5);

// 변수선언
let 변수이름;

// 함수선언
function 함수이름() {
  명령;
  명령;
};

// 함수호출
함수이름();

// 함수 내 여러 개의 파라미터
function 함수이름(파라미터1, 파라미터2) {
  console.log(파라미터1 + 파라미터2)
};

// 함수호출
함수이름(파라미터1, 파라미터2);

//............................//
// 함수예시 1 (이자 계산하기)
function interestCalculator(myMoney, saveTerm, interestRate) {
  return myMoney * saveTerm * interestRate / 100;
};

// 조건 입력 테스트
let myMoney = 3650000; // 맡긴 금액 (원)
let saveTerm = 1; // 맡기는 기간 (년)
let interestRate = 4; // 이자율 (%)

// 수령액 계산 테스트
let myInterest = interestCalculator(myMoney, saveTerm, interestRate);
let totalMoney = myMoney + myInterest;

// 출력 테스트
console.log('맡긴 금액은 ' + myMoney + '원 입니다.');
console.log('이자는 ' + myInterest + '원 입니다.');
console.log('최종 받을 금액은 ' + totalMoney + '원 입니다.');
//............................//

// 숫자연산 익히기
console.log((3 + 27) * 12 ** (5 % 3));

// 문자열 연습 1
console.log("한국 영화 역사상 아카데미상을 받은 것은 '기생충'이 처음이다.");
console.log('아리스토텔레스는 "인간은 사회적 동물이다."라고 말했다.');

// 문자열 연습 2
console.log(`한국 영화 역사상 아카데미상을 받은 것은 '기생충'이 처음이다.
아리스토텔레스는 "인간은 사회적 동물이다."라고 말했다.
`);

// 불린형
let x = 3;
console.log(x > 4 || !(x > 2));
console.log(false);

// typeof 연산자 (연산의 우선순위 고려)
console.log(typeof 101); // number 출력
console.log(typeof 'num'); // string 출력
console.log(typeof true); // boolean 출력
console.log(typeof typeof (3 + 5)); // string 출력

// 형 변환 익히기
console.log(typeof ('4' + 3)); // string 출력
console.log(typeof (3 - true)); // number 출력
console.log(typeof (Boolean(5) * true)); // number 출력
console.log(typeof (true < false)); // boolean 출력

// 템플릿 문자열 연습하기
function calcWage(name, time, wage) {
  let total = time * wage;

  console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다.`); // 코드를 채워 넣으세요.
}

calcWage('김윤식', 208, 11340);
calcWage('성규재', 175, 12160);
calcWage('손태웅', 161, 13070);
calcWage('허우선', 222, 10980);

// null과 undefined 익히기
console.log(null == undefined); // true
console.log(null === undefined); // false

let x;
console.log(x); // underfined 출력
let y = x;
x = null;
console.log(y); // underfined 출력
console.log(x); // null 출력
x = y;
console.log(x); // underfined 출력

// 옵셔널 파라미터 (Optional Parameters)
function introduce(name, age, nationality = '한국') {
  console.log(`제 이름은 ${name}입니다.`);
  console.log(`나이는 ${age}살 이고,`);
  console.log(`국적은 ${nationality}입니다.`);
}

introduce('코드잇', '미국', 4); // 값을 모두 전달한 경우
console.log('');
introduce('코드잇', 4); // 파라미터 값을 생략한 경우

//  Scope: 범위, 영역
let x = 3; // 글로벌 변수, 전역 변수 (Global Variable)

function myFunction() { // 블록문 (Block Statement)
  let x = 5; // 로컬 변수, 지역 변수 (Local Variable)
  console.log(x);
}

myFunction();
console.log(x);

// 상수 (constant)
const PI = 3.14; // 원주율
let radius = 0; // 반지름

// if문 (if statement)
let temperature = 1;

if (temperature <= 0) {
  console.log('물이 업니다.');
} else {
  console.log('물이 얼지 않습니다.');
}

// else if문 
function printGrade(midtermScore, finalScore){
	let totalScore = midtermScore + finalScore;
	
	if (totalScore >= 90) {
	  console.log('A');
	} else if (totalScore >= 80) {
	  console.log('B');
	} else if (totalScore >= 70) {
	  console.log('C');
	} else if (totalScore >= 60) {
	  console.log('D');
	} else {
	  console.log('F');
	}
}

// 테스트 코드
printGrade(25, 35);
printGrade(50, 45);
printGrade(29, 24);
printGrade(37, 42);

//............................//
// else if문 예시
// 나의 나이와, 나의 성별을 저장하는 변수입니다.
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수입니다.
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요.
function whatShouldICallYou(yourAge, yourGender) {
  // 여기에 코드를 작성해 주세요.
  if (myAge === yourAge) {
    return callFriend;
  } else if (myAge > yourAge) {
    if (yourGender === 'male') {
      return callYoungerBrother;
    } else if (yourGender === 'female') {
      return callYoungerSister;
    }
  } else {
    if (yourGender === 'male') {
      return callOlderBrother;
    } else if (yourGender === 'female'){
      return callOlderSister;
    }
  }
}

// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
//............................//

// switch문 vs if문
let myChoice = 2;

switch(myChoice) {
  case 1:
    console.log('토끼를 선택한 당신, ...');
    break;
  case 2:
    console.log('고양이를 선택한 당신, ...');
    break;
  case 3:
    console.log('코알라를 선택한 당신, ...');
    break;
  case 4:
    console.log('강아지를 선택한 당신, ...');
    break;
  default:
    console.log('1에서 4사이의 숫자를 선택해 주세요.'); 
}

if (myChoice === 1) {
  console.log('토끼를 선택한 당신, ...');
} else if (myChoice === 2) {
  console.log('고양이를 선택한 당신, ...');
} else if (myChoice === 3) {
  console.log('코알라를 선택한 당신, ...');
} else if (myChoice === 4) {
  console.log('강아지를 선택한 당신, ...');
} else {
  console.log('1에서 4사이의 숫자를 선택해 주세요.');
}

//............................//
// switch문 예시
// 각 등급별 가격
let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

// 각 등급에 맞는 가격을 출력하는 함수 checkPrice를 완성하세요.
function checkPrice(grade) {
  switch (grade) {
    case 'VIP':
      console.log(`${grade}석은 ${VIPPrice}만원 입니다.`);
      break;
    case 'R':
      console.log(`${grade}석은 ${RPrice}만원 입니다.`);
      break;
    case 'S':
      console.log(`${grade}석은 ${SPrice}만원 입니다.`);
      break;
    case 'A':
      console.log(`${grade}석은 ${APrice}만원 입니다.`);
      break;
    default:
      console.log('VIP, R, S, A 중에서 하나를 선택해 주세요.');
  }
}

// 테스트 코드
checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');
//............................//

// for문 (for statement)
for (초기화부분; 조건부분; 추가동작부분) {
  동작부분
}

for (let i = 1; i <= 10; i++) {
  console.log('안녕!');
}

let i = 1; 
for (; i <= 10; i++) {
  console.log(`${i} 안녕!`);
}

// for문 연습하기 (짝수 출력하기)
// 1. i를 1부터 100까지 반복하면서 2로 나눴을 때 나머지가 0일 때만 i를 출력하는 방법
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 2. i를 1부터 50까지 반복하면서 i * 2를 출력하는 방법
for (let i = 1; i <= 50; i++) {
  console.log(i * 2);
}

// 3. i를 2부터 100까지 반복하면서 i를 2씩 증가시키는 방법
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}

// while문 (while statement)
while (조건부분) {
  동작부분
}

let i = 30; // 글로벌 변수 지정

while (i % 7 !== 0) {
  i++;
}

console.log(i);

// i를 1부터 100까지 출력
let i = 1;

while (i <= 100) {
  console.log(i);
  i++;
}







