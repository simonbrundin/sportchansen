function generateUUID() {
  const hexDigits = "0123456789ABCDEF";
  let uuid = "";
  for (let i = 0; i < 32; i++) {
    uuid += hexDigits[Math.floor(Math.random() * 16)];
  }
  return uuid;
}

console.log(generateUUID());
