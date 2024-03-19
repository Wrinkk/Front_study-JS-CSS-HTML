/** 01_array-method */

const foodList = ['물회', '삼계탕', '냉면', '수박', '물회'];

/** indexOF */
console.log(`foodList.indexOf('물회'): ${foodList.indexOf('물회')}`);       // 0
console.log(`foodList.indexOf('삼겹살'): ${foodList.indexOf('삼겹살')}`);   // -1(없으면)

/** includes */
console.log(`foodList.includes('물회'): ${foodList.includes('물회')}`);      // true
console.log(`foodList.includes('삼겹살'): ${foodList.includes('삼겹살')}`);     // false

const chineseFood = ['짜장면', '짬뽕', '탕수육'];

/** push */
chineseFood.push('팔보채');
chineseFood.push('양장피');

console.log(`push 후 : ${chineseFood}`);        // 짜장면 짬뽕 탕수육 팔보채 양장피

/** pop */
// chineseFood.pop();

console.log(`chineseFood.pop : ${chineseFood.pop()}`);
console.log(`pop 후 : ${chineseFood}`); // 짜장면, 짬뽕, 탕수육, 팔보채  (양장피 제거)

const chickenList = ['양념치킨', '후라이드', '파닭'];

/** unshift */
console.log(`chickenList.unshift(): ${chickenList.unshift('간장치킨')}`);
console.log(`chickenList.unshift(): ${chickenList.unshift('마늘치킨')}`);

console.log(`unshift 후 : ${chickenList}`); // 마늘치킨, 간장치킨, 양념치킨, 후라이드, 파닭 / 간장치킨 마늘치킨 앞에 추가.

/** shift */

console.log(`chickenList.shift(): ${chickenList.shift()}`);
console.log(`shift 후 : ${chickenList}`); // 간장치킨,양념치킨,후라이드,파닭 / 마늘치킨 제거

/** concat: 두 개 이상의 배열을 결합하여 새로운 배열을 반환(결합 순서의 유의미) */
const idol1 = ['G-아이들', '데이식스'];
const idol2 = ['뉴진스', '르세라핌'];
const idol3 = ['트와이스', '블랙핑크'];

console.log(`idol1 기준으로 idol2 배열을 concat: ${idol1.concat(idol2)}`);      //  G-아이들,데이식스,뉴진스,르세라핌
console.log(`idol1 기준으로 idol2 배열을 concat: ${[...idol1, ...idol2]}`);     // ES6할 때 스프레드 연산자 배울 때 다시 설명
console.log(`idol3 기준으로 idol1, idol2 배열을 concat: ${idol3.concat(idol1,idol2)}`);  // 트와이스,블랙핑크,G-아이들,데이식스,뉴진스,르세라핌

/** slice: 배열의 요소 선택 복사하기 */
/** splice: 배열의 index 위치의 요소 제거 및 추가 */
const front = ['HTML', 'CSS', 'JavaScript', 'Vue'];

console.log(`front.slice(): ${front.slice(1, 3)}`); // CSS,JavaScript
console.log(`front: ${front}`); //HTML,CSS,JavaScript,Vue

/** splice(인덱스, 제거할 기일, 추가할 값1, 추가할 값2, ... ) */
console.log(`front.splice(3, 1, 'JDBC'): ${front.splice(3, 1, 'JDBC')}`);   // Vue
console.log(`front: ${front}`); //HTML,CSS,JavaScript,JDBC,Vue

/** join: 배열을 우리가 원하는 구분자와 함께 결합하여 문자열로 반환 */

const snackList = ['사탕', '초콜렛',  '껌', '마이쮸'];

console.log(`snackList.join(): ${snackList.join()}`); // 사탕, 초콜렛, 껌, 마이쮸
console.log(`snackList.join('/'): ${snackList.join('/')}`); // 사탕/초콜렛/껌/마이쮸

/** reverse: 배열의 요소 순서를 바꾸는 함수 */