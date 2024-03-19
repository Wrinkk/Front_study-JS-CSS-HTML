
/** 02. function hoisting(함수 호이스팅) */

console.log(hello('이몽룡'));
// console.log(hi(`엄준식`));

/** 함수 선언문(js 코드 상에서 먼저 해석됨, 반드시 이름이 있어야 함(익명함수 X)) */
function hello(name) {

    return `${name}님 반갑습니다.`;

}

/** 함수 표현식 */
var hi = function(name) { 
    return `${name}님 안녕하세요.`;
}

console.log(`함수 표현식 이후: ${hi('나중에')}`);