export function checkCashRegister (price, cash, cid) {
  let totChange = cash - price;
  const cidMap = new Map(cid);
  const changeMap = new Map(cid.map(val => [val[0], 0]));

  while (totChange > 0) {
    if (totChange / 100 >= 1 && cidMap.get('ONE HUNDRED') >= 100) {
      cidMap.set('ONE HUNDRED', cidMap.get('ONE HUNDRED') - 100);
      changeMap.set('ONE HUNDRED', changeMap.get('ONE HUNDRED') + 100);
      totChange = Math.round((totChange - 100) * 100) / 100;
      continue;
    }

    if (totChange / 20 >= 1 && cidMap.get('TWENTY') >= 20) {
      cidMap.set('TWENTY', cidMap.get('TWENTY') - 20);
      changeMap.set('TWENTY', changeMap.get('TWENTY') + 20);
      totChange = Math.round((totChange - 20) * 100) / 100;
      continue;
    }

    if (totChange / 10 >= 1 && cidMap.get('TEN') >= 10) {
      cidMap.set('TEN', cidMap.get('TEN') - 10);
      changeMap.set('TEN', changeMap.get('TEN') + 10);
      totChange = Math.round((totChange - 10) * 100) / 100;
      continue;
    }

    if (totChange / 5 >= 1 && cidMap.get('FIVE') >= 5) {
      cidMap.set('FIVE', cidMap.get('FIVE') - 5);
      changeMap.set('FIVE', changeMap.get('FIVE') + 5);
      totChange = Math.round((totChange - 5) * 100) / 100;
      continue;
    }

    if (totChange / 1 >= 1 && cidMap.get('ONE') >= 1) {
      cidMap.set('ONE', cidMap.get('ONE') - 1);
      changeMap.set('ONE', changeMap.get('ONE') + 1);
      totChange = Math.round((totChange - 1) * 100) / 100;
      continue;
    }

    if (totChange / 0.25 >= 1 && cidMap.get('QUARTER') >= 0.25) {
      cidMap.set('QUARTER', cidMap.get('QUARTER') - 0.25);
      changeMap.set('QUARTER', changeMap.get('QUARTER') + 0.25);
      totChange = Math.round((totChange - 0.25) * 100) / 100;
      continue;
    }

    if (totChange / 0.1 >= 1 && cidMap.get('DIME') >= 0.1) {
      cidMap.set('DIME', cidMap.get('DIME') - 0.1);
      changeMap.set('DIME', changeMap.get('DIME') + 0.1);
      totChange = Math.round((totChange - 0.1) * 100) / 100;
      continue;
    }

    if (totChange / 0.05 >= 1 && cidMap.get('NICKEL') >= 0.05) {
      cidMap.set('NICKEL', cidMap.get('NICKEL') - 0.05);
      changeMap.set('NICKEL', changeMap.get('NICKEL') + 0.05);
      totChange = Math.round((totChange - 0.05) * 100) / 100;
      continue;
    }

    if (totChange / 0.01 >= 1 && cidMap.get('PENNY') >= 0.01) {
      cidMap.set('PENNY', Math.round((cidMap.get('PENNY') - 0.01) * 100) / 100);
      changeMap.set('PENNY', Math.round((changeMap.get('PENNY') + 0.01) * 100) / 100);
      totChange = Math.round((totChange - 0.01) * 100) / 100;
      continue;
    }

    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }

  let change = [...changeMap.entries()];
  if ([...cidMap.entries()].every(value => value[1] === 0)) {
    return { status: 'CLOSED', change };
  }

  change = change.filter(value => value[1] !== 0);
  return { status: 'OPEN', change: change.reverse() };
}
