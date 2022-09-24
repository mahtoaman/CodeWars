function generateHashtag(str) {
  let result = [];
  var hashtag = str.split(" ");

  for (let i = 0; i < Object.keys(hashtag).length; i++) {
    let word = hashtag[i];
    result.push(word.charAt(0).toUpperCase() + word.substring(1));
  }
  if (result[0] !== "" && result.join("").length < 140) {
    return "#" + result.join("");
  } else {
    return false;
  }
}
console.log(generateHashtag("how"));
