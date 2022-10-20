
const insertionSort = arr => {
    const l = arr.length;
    let j, temp;
  
    for ( let i = 1; i < l; i++ ) {
      j = i;
      temp = arr[ i ];
      while ( j > 0 && arr[ j - 1 ] > temp ) {
        arr[ j ] = arr[ j - 1 ];
        j--;
      }
      arr[ j ] = temp;
    }
  
    return arr;
  };
  
  const arr = [17,19,24,32,41,57,62];
  const arr1 = [62,57,41,32,24,19,17];
  const arr2 = [17,24,41,62,19,32,57];
  const result = insertionSort(arr2);
  console.log("output arr2");
  console.log(result);

