//your JS code here. If required.
let obj = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if(!obj[char]) {
      obj[char] = 1;
    }else {
      obj[char]++;
    }
  }

  console.log(obj)

  for (let  i = 0; i < str.length; i++) {
    const char = str[i];
    if(obj[char] === 1) return char;
  }
  return '$';