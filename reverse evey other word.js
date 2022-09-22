function reverse(str) {
  //WRITE SOME MAGIC
 return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

let str = 'hello world'
console.log(reverse())