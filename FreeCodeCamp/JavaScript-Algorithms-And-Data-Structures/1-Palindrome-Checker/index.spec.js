/* eslint-disable no-useless-escape */
import test from 'tape';
import { palindrome } from './index.js';

test('palindrome("eye") should return a boolean', (t) => {
  const value = palindrome('eye');

  t.true(typeof value === 'boolean');

  t.end();
});

test('palindrome("eye") should return true', (t) => {
  const value = palindrome('eye');

  t.true(value);

  t.end();
});

test('palindrome("_eye") should return true', (t) => {
  const value = palindrome('_eye');

  t.true(value);

  t.end();
});

test('palindrome("race car") should return true', (t) => {
  const value = palindrome('race car');

  t.true(value);

  t.end();
});

test('palindrome("not a palindrome") should return false', (t) => {
  const value = palindrome('not a palindrome');

  t.false(value);

  t.end();
});

test('palindrome("A man, a plan, a canal. Panama") should return true', (t) => {
  const value = palindrome('A man, a plan, a canal. Panama');

  t.true(value);

  t.end();
});

test('palindrome("never odd or even") should return true', (t) => {
  const value = palindrome('never odd or even');

  t.true(value);

  t.end();
});

test('palindrome("nope") should return false', (t) => {
  const value = palindrome('nope');

  t.false(value);

  t.end();
});

test('palindrome("almostomla") should return false', (t) => {
  const value = palindrome('almostomla');

  t.false(value);

  t.end();
});

test('palindrome("My age is 0, 0 si ega ym.") should return true', (t) => {
  const value = palindrome('My age is 0, 0 si ega ym.');

  t.true(value);

  t.end();
});

test('palindrome("1 eye for of 1 eye.") should return false', (t) => {
  const value = palindrome('1 eye for of 1 eye.');

  t.false(value);

  t.end();
});

test('palindrome("0_0 (: /-\ :) 0-0") should return true', (t) => {
  const value = palindrome('0_0 (: /-\ :) 0-0');

  t.true(value);

  t.end();
});

test('palindrome("five|\_/|four") should return false', (t) => {
  const value = palindrome('five|\_/|four');

  t.false(value);

  t.end();
});
