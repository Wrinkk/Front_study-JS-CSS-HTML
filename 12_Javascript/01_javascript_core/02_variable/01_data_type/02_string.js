/** 02. 문자열 타입 */
var str = '안녕하세요';
console.log(typeof str);

/** 일반 문자열내에서는 줄바꿈이 허용되지 않는다. */


/** 백틱(`)을 사용하면 줄바꿈이 허용되고 모든 공백이 있는 그대로 적용된다. */
var str2 = `안녕하세요.
반갑습니다.`;
console.log('mutiline', str2);

/** 문자열 이어붙이기 */
var lastName = '홍';
var firstName = '길동';
console.log('제이름은 ' + lastName + firstName + '입니다.');

console.log('제이름은 ${lastName}${firstName}입니다.' );