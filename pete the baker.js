function cakes(recipe, available) {
  let rLength = Object.keys(recipe).length;
  let aLength = Object.keys(available).length;
  let result = [];

  if (aLength < rLength) {
    return 0;
  }

  for (let i = 0; i < rLength; i++) {
    let r = Object.keys(recipe)[i];
    for (let j = 0; j < aLength; j++) {
      let a = Object.keys(available)[j];
      if (r == a) {
        let rVal = Object.values(recipe)[i];
        let aVal = Object.values(available)[j];
        let res = aVal / rVal;
        result.push(Math.floor(res));
      }
    }
  }
  return Math.min(...result);
}

let recipe = { cream: 200, flour: 300, sugar: 150, milk: 100, oil: 100 };
let available = {
  sugar: 1700,
  flour: 20000,
  milk: 20000,
  oil: 30000,
  cream: 5000,
};

console.log(cakes(recipe, available));
// console.log(Object.keys(recipe)[0]);
// let rLength = Object.keys(recipe).length;
// let aLength = Object.keys(available).length;
// let result = [];
// for (let i = 0; i < rLength; i++) {
//   let r = Object.keys(recipe)[i];
//   for (let j = 0; j < aLength; j++) {
//     let a = Object.keys(available)[j];
//     if (r == a) {
//       let rVal = Object.values(recipe)[i];
//       let aVal = Object.values(available)[j];
//       let res = aVal / rVal;
//       result.push(Math.floor(res));
//     }
//   }
// }

// console.log(result);
