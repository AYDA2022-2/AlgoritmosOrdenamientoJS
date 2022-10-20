const bubbleSort = (arr) => {
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

const arr = [17,19,24,32,41,57,62];
const arr1 = [62,57,41,32,24,19,17];
const arr2 = [17,24,41,62,19,32,57];
const result = bubbleSort(arr2);
console.log("output arr2");
console.log(result);

