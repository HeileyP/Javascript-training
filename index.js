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
console.log(null == undefined) // true
console.log(null === undefined) // false

let x;
console.log(x); // underfined 출력
let y = x;
x = null;
console.log(y); // underfined 출력
console.log(x); // null 출력
x = y;
console.log(x); // underfined 출력