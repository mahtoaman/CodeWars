function reverse(str) {
  let arr = str.split(" ");
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (i % 2 != 0) {
      let temp = "";
      for (let j = word.length - 1; j >= 0; j--) {
        temp += word[j];
      }
      res.push(temp);
    } else {
      res.push(word);
    }
  }
  return res.join(" ").trim().length == 0 ? "" : res.join(" ");
}

let str = "Reverse this string, please!";
console.log(reverse(str));
