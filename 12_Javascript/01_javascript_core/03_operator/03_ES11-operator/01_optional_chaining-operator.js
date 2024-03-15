/** 01. optional-chaining-operator */
/**
 * ECMA11(ECMAScript 2020)에서 도입된 연산자로 좌항의 피연산자가 null 또는 undefined인 경우
 * undefined를 반환하고 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.
 */

var obj = null;

var val = obj.value;
console.log(val);