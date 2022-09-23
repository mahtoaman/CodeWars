function pigIt(str) {
  const arr = str.split(" ");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if ((word >= "A" && word <= "Z") || (word >= "a" && word <= "z")) {
      result.push(`${word.substr(1)}${word.substr(0, 1)}ay`);
    } else {
      result.push(arr[i]);
    }
  }
  return result.join(" ");
}
console.log(pigIt("Pig latin is cool"));
