function findUniq(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}


let arr = [1,1,3,5,5]

console.log(findUniq(arr))