export function convertToRoman (num) {
  const romans = [];

  const map = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];

  while (num > 0) {
    for (const numeral of map) {
      if (num / numeral[0] >= 1) {
        num -= numeral[0];
        romans.push(numeral[1]);
        break;
      }
    }
  }

  return romans.join('');
}
