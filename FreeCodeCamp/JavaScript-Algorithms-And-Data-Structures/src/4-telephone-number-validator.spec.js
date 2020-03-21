import test from 'tape';
import { telephoneCheck } from './4-telephone-number-validator.js';

test('telephoneCheck("555-555-5555") should return a boolean', (t) => {
  const value = telephoneCheck('555-555-5555');

  t.true(typeof value === 'boolean');

  t.end();
});

test('telephoneCheck("1 555-555-5555") should return true', (t) => {
  const value = telephoneCheck('1 555-555-5555');

  t.true(value);

  t.end();
});

test('telephoneCheck("1 (555) 555-5555") should return true', (t) => {
  const value = telephoneCheck('1 (555) 555-5555');

  t.true(value);

  t.end();
});

test('telephoneCheck("5555555555") should return true', (t) => {
  const value = telephoneCheck('5555555555');

  t.true(value);

  t.end();
});

test('telephoneCheck("555-555-5555") should return true', (t) => {
  const value = telephoneCheck('555-555-5555');

  t.true(value);

  t.end();
});

test('telephoneCheck("(555)555-5555") should return true', (t) => {
  const value = telephoneCheck('(555)555-5555');

  t.true(value);

  t.end();
});

test('telephoneCheck("1(555)555-5555") should return true', (t) => {
  const value = telephoneCheck('1(555)555-5555');

  t.true(value);

  t.end();
});

test('telephoneCheck("555-5555") should return false', (t) => {
  const value = telephoneCheck('555-5555');

  t.false(value);

  t.end();
});

test('telephoneCheck("5555555") should return false.', (t) => {
  const value = telephoneCheck('5555555');

  t.false(value);

  t.end();
});

test('telephoneCheck("1 555)555-5555") should return false.', (t) => {
  const value = telephoneCheck('1 555)555-5555');

  t.false(value);

  t.end();
});

test('telephoneCheck("1 555 555 5555") should return true', (t) => {
  const value = telephoneCheck('1 555 555 5555');

  t.true(value);

  t.end();
});

test('telephoneCheck("1 456 789 4444") should return true', (t) => {
  const value = telephoneCheck('1 456 789 4444');

  t.true(value);

  t.end();
});

test('telephoneCheck("123**&!!asdf#") should return false.', (t) => {
  const value = telephoneCheck('123**&!!asdf#');

  t.false(value);

  t.end();
});

test('telephoneCheck("55555555") should return false', (t) => {
  const value = telephoneCheck('55555555');

  t.false(value);

  t.end();
});

test('telephoneCheck("(6054756961)") should return false', (t) => {
  const value = telephoneCheck('(6054756961)');

  t.false(value);

  t.end();
});

test('telephoneCheck("2 (757) 622-7382") should return false', (t) => {
  const value = telephoneCheck('2 (757) 622-7382');

  t.false(value);

  t.end();
});

test('telephoneCheck("0 (757) 622-7382") should return false.', (t) => {
  const value = telephoneCheck('0 (757) 622-7382');

  t.false(value);

  t.end();
});

test('telephoneCheck("-1 (757) 622-7382") should return false', (t) => {
  const value = telephoneCheck('-1 (757) 622-7382');

  t.false(value);

  t.end();
});

test('telephoneCheck("2 757 622-7382") should return false', (t) => {
  const value = telephoneCheck('2 757 622-7382');

  t.false(value);

  t.end();
});

test('telephoneCheck("10 (757) 622-7382") should return false', (t) => {
  const value = telephoneCheck('10 (757) 622-7382');

  t.false(value);

  t.end();
});

test('telephoneCheck("27576227382") should return false', (t) => {
  const value = telephoneCheck('27576227382');

  t.false(value);

  t.end();
});

test('telephoneCheck("(275)76227382") should return false', (t) => {
  const value = telephoneCheck('(275)76227382');

  t.false(value);

  t.end();
});

test('telephoneCheck("2(757)6227382") should return false', (t) => {
  const value = telephoneCheck('2(757)6227382');

  t.false(value);

  t.end();
});

test('telephoneCheck("2(757)622-7382") should return false', (t) => {
  const value = telephoneCheck('2(757)622-7382');

  t.false(value);

  t.end();
});

test('telephoneCheck("555)-555-5555") should return false', (t) => {
  const value = telephoneCheck('555)-555-5555');

  t.false(value);

  t.end();
});

test('telephoneCheck("(555-555-5555") should return false', (t) => {
  const value = telephoneCheck('(555-555-5555');

  t.false(value);

  t.end();
});

test('telephoneCheck("(555)5(55?)-5555") should return false', (t) => {
  const value = telephoneCheck('(555)5(55?)-5555');

  t.false(value);

  t.end();
});
