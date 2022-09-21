function order(words) {
  let arr = words.split(" ");
  const findNumber = words.match(/[1-9]/g);
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != "") {
      for (let j = 0; j < findNumber.length; j++) {
        let num = parseInt(findNumber[i]);
        result[num - 1] = arr[i];
      }
    }
  }
  return result.join(" ");
}

let words = "yo4u 2how hello1 a3re"
console.log(order(words))