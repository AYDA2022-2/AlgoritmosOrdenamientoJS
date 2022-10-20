
const mergeSort = arr => {
    if (arr.length < 2) {
      return arr;
    }
  
    const middle = parseInt(arr.length / 2) | 0;
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    const merge = (left, right) => {
      const result = [];
      let il = ir = 0;
  
      while (il < left.length && ir < right.length) {
        result.push( (left[il] < right[ir]) ? left[il++] : right[ir++] );
      }
  
      return [...result, ...left.slice(il), ...right.slice(ir)];
    }
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  const arr = [17,19,24,32,41,57,62];
  const arr1 = [62,57,41,32,24,19,17];
  const arr2 = [17,24,41,62,19,32,57];
  const result = mergeSort(arr2);
  console.log("output arr2");
  console.log(result);


