# String Utilities

일반적인 문자열 처리 기능을 제공하는 유틸리티입니다.

## 사용 방법

```javascript
const stringUtils = require('./index');

// 카멜 케이스로 변환
const camelCase = stringUtils.toCamelCase('hello-world'); // helloWorld

// 스네이크 케이스로 변환
const snakeCase = stringUtils.toSnakeCase('helloWorld'); // hello_world

// 첫 글자 대문자로
const capitalized = stringUtils.capitalize('hello'); // Hello

// 문자열 반복
const repeated = stringUtils.repeat('ab', 3); // ababab
```

## 함수 목록

| 함수 | 설명 |
|------|------|
| `toCamelCase(str)` | 문자열을 카멜 케이스로 변환 |
| `toSnakeCase(str)` | 문자열을 스네이크 케이스로 변환 |
| `capitalize(str)` | 첫 글자를 대문자로 변환 |
| `repeat(str, count)` | 문자열을 지정된 횟수만큼 반복 |
| `truncate(str, length)` | 문자열을 지정된 길이로 자름 |
