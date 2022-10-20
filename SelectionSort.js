
const selectionSort = arr => {
    for ( let j = 0; j < arr.length; ++j ) {
      let i = iMin = j;
      for ( ++i; i < arr.length; ++i ) {
        ( arr[ i ] < arr[ iMin ] ) && ( iMin = i );
      }
      [ arr[ j ], arr[ iMin ] ] = [ arr[ iMin ], arr[ j ] ];
    }
  
    return arr;
  }
  
  const arr = [17,19,24,32,41,57,62];
  const arr1 = [62,57,41,32,24,19,17];
  const arr2 = [17,24,41,62,19,32,57];
  const result = selectionSort(arr2);
  console.log("output arr2");
  console.log(result);

