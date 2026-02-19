/**
 * String Utilities - 일반적인 문자열 처리 함수 모음
 */

/**
 * 문자열을 카멜 케이스로 변환
 * @param {string} str - 변환할 문자열
 * @returns {string} 카멜 케이스 문자열
 */
function toCamelCase(str) {
  return str
    .split('-')
    .map((word, index) => {
      if (index === 0) return word.toLowerCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

/**
 * 문자열을 스네이크 케이스로 변환
 * @param {string} str - 변환할 문자열
 * @returns {string} 스네이크 케이스 문자열
 */
function toSnakeCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1_$2')
    .toLowerCase();
}

/**
 * 첫 글자를 대문자로 변환
 * @param {string} str - 변환할 문자열
 * @returns {string} 첫 글자가 대문자인 문자열
 */
function capitalize(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 문자열을 지정된 횟수만큼 반복
 * @param {string} str - 반복할 문자열
 * @param {number} count - 반복 횟수
 * @returns {string} 반복된 문자열
 */
function repeat(str, count) {
  return str.repeat(Math.max(0, count));
}

/**
 * 문자열을 지정된 길이로 자르기
 * @param {string} str - 자를 문자열
 * @param {number} length - 자를 길이
 * @param {string} suffix - 추가할 suffix (기본값: '...')
 * @returns {string} 잘린 문자열
 */
function truncate(str, length, suffix = '...') {
  if (str.length <= length) return str;
  return str.slice(0, length - suffix.length) + suffix;
}

module.exports = {
  toCamelCase,
  toSnakeCase,
  capitalize,
  repeat,
  truncate,
};
