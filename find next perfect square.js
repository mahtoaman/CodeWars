function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let n = Math.sqrt(sq);
  console.log(n)

  if ((Math.ceil(n) -n ) != 0) {
    return -1;
  } else {
    return (n + 1) * (n + 1);
  }
}

console.log(findNextSquare(121))