import test from 'tape';
import { convertToRoman } from './index.js';

test('convertToRoman(2) should return "II"', (t) => {
  const actual = convertToRoman(2);
  const expected = 'II';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(3) should return "III"', (t) => {
  const actual = convertToRoman(3);
  const expected = 'III';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(4) should return "IV"', (t) => {
  const actual = convertToRoman(4);
  const expected = 'IV';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(5) should return "V"', (t) => {
  const actual = convertToRoman(5);
  const expected = 'V';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(9) should return "IX"', (t) => {
  const actual = convertToRoman(9);
  const expected = 'IX';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(12) should return "XII"', (t) => {
  const actual = convertToRoman(12);
  const expected = 'XII';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(16) should return "XVI"', (t) => {
  const actual = convertToRoman(16);
  const expected = 'XVI';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(29) should return "XXIX"', (t) => {
  const actual = convertToRoman(29);
  const expected = 'XXIX';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(44) should return "XLIV"', (t) => {
  const actual = convertToRoman(44);
  const expected = 'XLIV';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(45) should return "XLV"', (t) => {
  const actual = convertToRoman(45);
  const expected = 'XLV';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(68) should return "LXVIII"', (t) => {
  const actual = convertToRoman(68);
  const expected = 'LXVIII';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(83) should return "LXXXIII"', (t) => {
  const actual = convertToRoman(83);
  const expected = 'LXXXIII';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(97) should return "XCVII"', (t) => {
  const actual = convertToRoman(97);
  const expected = 'XCVII';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(99) should return "XCIX"', (t) => {
  const actual = convertToRoman(99);
  const expected = 'XCIX';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(400) should return "CD"', (t) => {
  const actual = convertToRoman(400);
  const expected = 'CD';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(500) should return "D"', (t) => {
  const actual = convertToRoman(500);
  const expected = 'D';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(501) should return "DI"', (t) => {
  const actual = convertToRoman(501);
  const expected = 'DI';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(649) should return "DCXLIX"', (t) => {
  const actual = convertToRoman(649);
  const expected = 'DCXLIX';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(798) should return "DCCXCVIII"', (t) => {
  const actual = convertToRoman(798);
  const expected = 'DCCXCVIII';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(891) should return "DCCCXCI"', (t) => {
  const actual = convertToRoman(891);
  const expected = 'DCCCXCI';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(1000) should return "M"', (t) => {
  const actual = convertToRoman(1000);
  const expected = 'M';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(1004) should return "MIV"', (t) => {
  const actual = convertToRoman(1004);
  const expected = 'MIV';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(1006) should return "MVI"', (t) => {
  const actual = convertToRoman(1006);
  const expected = 'MVI';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(1023) should return "MXXIII"', (t) => {
  const actual = convertToRoman(1023);
  const expected = 'MXXIII';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(2014) should return "MMXIV"', (t) => {
  const actual = convertToRoman(2014);
  const expected = 'MMXIV';

  t.equals(actual, expected);

  t.end();
});

test('convertToRoman(3999) should return "MMMCMXCIX"', (t) => {
  const actual = convertToRoman(3999);
  const expected = 'MMMCMXCIX';

  t.equals(actual, expected);

  t.end();
});
