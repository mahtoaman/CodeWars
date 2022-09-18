function moveZeros(arr) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr2.push(arr[i]);
    } else {
      arr1.push(arr[i]);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    arr1.push(arr2[j]);
  }
  console.log(arr1)
}

let arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"];

moveZeros(arr);
