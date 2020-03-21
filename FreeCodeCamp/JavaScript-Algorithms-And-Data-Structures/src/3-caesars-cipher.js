export function rot13 (str) {
  return str.replace(/[A-Z]/g, (char) => {
    const charCode = char.charCodeAt(0);
    if (charCode - 13 < 65) {
      return String.fromCharCode(char.charCodeAt(0) + 13);
    } else {
      return String.fromCharCode(char.charCodeAt(0) - 13);
    }
  });
}
