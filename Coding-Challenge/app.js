function getMiddle(s) {
  const sLength = s.length;
  return sLength % 2 === 0 ? s[sLength / 2 - 1] + s[sLength / 2] : s[Math.floor(s.length / 2)];
}

console.log(getMiddle("testing"));
console.log(getMiddle("middle"));