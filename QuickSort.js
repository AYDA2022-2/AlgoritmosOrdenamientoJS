
const quickSort = ( [ x = [], ...xs ] ) => {
    return ( x.length === 0 ) ? [] : [
      ...quickSort( xs.filter( y => y <= x ) ),
      x,
      ...quickSort( xs.filter( y => y > x ) )
    ];
  }
  
  const arr = [17,19,24,32,41,57,62];
  const arr1 = [62,57,41,32,24,19,17];
  const arr2 = [17,24,41,62,19,32,57];
  const result = quickSort(arr2);
  console.log("output arr2");
  console.log(result);

  