function alphabetPosition(text) {
  if (text) {
    let str = text.toLowerCase().split(" ").join("");
    const findAlphabets = str.match(/[a-z]/g);
    let arr = [];

    if (findAlphabets) {
      let arrOfString = findAlphabets.join("");
      for (let i = 0; i < arrOfString.length; i++) {
        const result = arrOfString.charCodeAt([i]) - 96;
        arr.push(result);
      }
      return arr.join(" ");
    }
  }
  return ``;
}

let text = "A b c D E F G H I J K L M N eeeeeeeeeeee null---------- ";
console.log(alphabetPosition(text));
