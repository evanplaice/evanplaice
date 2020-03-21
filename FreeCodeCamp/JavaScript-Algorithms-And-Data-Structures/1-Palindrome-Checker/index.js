export function palindrome (str) {
  let head = 0;
  let tail = str.length - 1;

  while (head < tail) {
    if (/[\W_]/.test(str[head])) {
      head++;
      continue;
    }

    if (/\W|_/.test(str[tail])) {
      tail--;
      continue;
    }

    if (str[head].toLowerCase() === str[tail].toLowerCase()) {
      head++;
      tail--;
      continue;
    }
    return false;
  }

  return true;
}
