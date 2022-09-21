function sortArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] % 2 != 0 && num2 > num) {
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
  }
  return array;
}

let array = [5, 8, 6, 3, 4];
sortArray(array);
