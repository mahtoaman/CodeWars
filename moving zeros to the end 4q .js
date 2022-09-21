function removeZeros(array) {
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0 || array[i] === "0") {
      arr2[arr2.length] = array[i];
    } else {
      arr1[arr1.length] = array[i];
    }
  }
  return [...arr1, ...arr2];
}

let arr = [false, 1, 0, 1, 2, 0, 1,"0", 3, "a"];

console.log(removeZeros(arr))
