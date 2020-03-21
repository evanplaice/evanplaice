import test from 'tape';
import { rot13 } from './index.js';

test('rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP', (t) => {
  const actual = rot13('SERR PBQR PNZC');
  const expected = 'FREE CODE CAMP';

  t.equals(actual, expected);

  t.end();
});

test('rot13("SERR CVMMN!") should decode to FREE PIZZA!', (t) => {
  const actual = rot13('SERR CVMMN!');
  const expected = 'FREE PIZZA!';

  t.equals(actual, expected);

  t.end();
});

test('rot13("SERR YBIR?") should decode to FREE LOVE?', (t) => {
  const actual = rot13('SERR YBIR?');
  const expected = 'FREE LOVE?';

  t.equals(actual, expected);

  t.end();
});

test('rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.', (t) => {
  const actual = rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.');
  const expected = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.';

  t.equals(actual, expected);

  t.end();
});
