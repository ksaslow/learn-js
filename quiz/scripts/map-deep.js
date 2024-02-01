// Original matrix (list of lists)
const originalMatrix = [
    [3, 2, 1],
    [4, 5, 6],
    [7, 9, 8]
  ];
  
  const newMatrix = originalMatrix.map((row) => { 
    // note: map returns SHALLOW COPY! If each element in the array is an obj, it maintains the reference to the array, not to the new objects!
    
    // return row.sort(); // fix this error by using Spread syntax instead. 

    // or we can make new list instead by using SPREAD SYNTAX!!!
    return [...row].sort();
  });
  
  // Modifying the original matrix (changing the last element of the first row)
  originalMatrix[0][2] = 99; // changes the copy and references as well
  
  
  // Displaying the original and new matrices
  console.log('Original Matrix (modified):', originalMatrix);
  console.log('New Matrix (unaffected):', newMatrix);
  