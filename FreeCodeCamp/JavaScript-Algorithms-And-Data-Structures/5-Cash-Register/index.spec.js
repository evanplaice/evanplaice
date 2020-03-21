import test from 'tape';
import { checkCashRegister } from './index.js';

test('checkCashRegister(19.5, 20, [...]) should return an object', (t) => {
  const value = checkCashRegister(19.5, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
  ]);

  t.true(typeof value === 'object');

  t.end();
});

test('checkCashRegister(19.5, 20, [...]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}', (t) => {
  const actual = checkCashRegister(19.5, 20, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
  ]);
  const expected = { status: 'OPEN', change: [['QUARTER', 0.5]] };

  t.deepEqual(actual, expected);

  t.end();
});

test('checkCashRegister(3.26, 100, [...]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}', (t) => {
  const actual = checkCashRegister(3.26, 100, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
  ]);
  const expected = {
    status: 'OPEN',
    change: [
      ['TWENTY', 60],
      ['TEN', 20],
      ['FIVE', 15],
      ['ONE', 1],
      ['QUARTER', 0.5],
      ['DIME', 0.2],
      ['PENNY', 0.04]
    ]
  };

  t.deepEqual(actual, expected);

  t.end();
});

test('checkCashRegister(19.5, 20, [...]) should return {status: "INSUFFICIENT_FUNDS", change: []}', (t) => {
  const actual = checkCashRegister(19.5, 20, [
    ['PENNY', 0.01],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
  ]);
  const expected = { status: 'INSUFFICIENT_FUNDS', change: [] };

  t.deepEqual(actual, expected);

  t.end();
});

test('checkCashRegister(19.5, 20, [...]) should return {status: "INSUFFICIENT_FUNDS", change: []}', (t) => {
  const actual = checkCashRegister(19.5, 20, [
    ['PENNY', 0.01],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 1],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
  ]);
  const expected = { status: 'INSUFFICIENT_FUNDS', change: [] };

  t.deepEqual(actual, expected);

  t.end();
});

test('checkCashRegister(19.5, 20, [...]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}', (t) => {
  const actual = checkCashRegister(19.5, 20, [
    ['PENNY', 0.5],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
  ]);
  const expected = {
    status: 'CLOSED',
    change: [
      ['PENNY', 0.5],
      ['NICKEL', 0],
      ['DIME', 0],
      ['QUARTER', 0],
      ['ONE', 0],
      ['FIVE', 0],
      ['TEN', 0],
      ['TWENTY', 0],
      ['ONE HUNDRED', 0]
    ]
  };

  t.deepEqual(actual, expected);

  t.end();
});
