
const shellSort = arr => {
    const gaps = [5, 3, 1];
    for ( let g = 0; g < gaps.length; ++g ) {
      for ( let i = gaps[ g ]; i < arr.length; ++i ) {
        const temp = arr[ i ];
        let j = i;
        for ( ; j >= gaps[ g ] &&
             arr[j-gaps[ g ] ] > temp;
             j -= gaps[ g ] ) {
          arr[ j ] = arr[ j - gaps[ g ] ];
        }
        arr[ j ] = temp;
      }
    }
  
    return arr;
  }
  
  
  const arr = [10, 4, 40, 32, 67, 12, 43, 31, 65, 1];
  const result = shellSort(arr);
  
  console.log(result);