import test from 'tape';
import { isValid } from './valid-parentheses.js';

test(`isValid('()')`, (t) => {
  const input = '()'
  const result = isValid(input);

  t.true(result);

  t.end();
});


test(`isValid('()[]{}')`, (t) => {
  const input = '()[]{}'
  const result = isValid(input);

  t.true(result);

  t.end();
});

test(`isValid('(]')`, (t) => {
  const input = '(]'
  const result = isValid(input);

  t.false(result);

  t.end();
});

test(`isValid('{[]}')`, (t) => {
  const input = '{[]}'
  const result = isValid(input);

  t.true(result);

  t.end();
});

test(`isValid('[')`, (t) => {
  const input = '['
  const result = isValid(input);

  t.false(result);

  t.end();
});