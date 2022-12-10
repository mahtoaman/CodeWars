function findMissingLetter(array) {
    array = array.join('')
  for (let i = 0; i < array.length - 1; i++) {
    let pre = array.charCodeAt(i) + 1;
    // console.log("this is pre " + pre);
    let curr = array.charCodeAt([i + 1]);
    // console.log("this is curr " + curr);
    if (pre  != curr) {
      console.log(String.fromCharCode(pre));
    // console.log(pre-1)
    // console.log('not cool')
    break;
    }
  }
}
findMissingLetter(["a", "b", "c", "d", "f"]);
