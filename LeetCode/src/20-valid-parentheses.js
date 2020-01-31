/**
 * Solution for https://leetcode.com/problems/valid-parentheses/
 *
 * @param {string} s
 * @return {boolean}
 */
export function isValid (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    switch (true) {
      case s[i] === '(':
      case s[i] === '[':
      case s[i] === '{':
        stack.push(s[i]);
        continue;
    }
    const top = stack[stack.length - 1];
    switch (true) {
      case s[i] === ')' && top === '(':
      case s[i] === ']' && top === '[':
      case s[i] === '}' && top === '{':
        stack.pop();
        continue;
      default:
        return false;
    }
  }

  return stack.length === 0;
}
