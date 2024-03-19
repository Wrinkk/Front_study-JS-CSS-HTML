/** 02. return(반환문) */
function hello(name) {
    return `${name}님 안녕하세요!`;
    console.log(name);              // 반환문 이후의 코드는 실행되지 않고 무시된다.
}

console.log(hello('유관순'));

function func() {
    
    console.log(func());
}