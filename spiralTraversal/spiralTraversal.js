/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */
 //(0,0),(0,1),(0,2),(1,2),(2,2),(2,1),(2,0),(1,0),(1,1)

var spiralTraversal = function(matrix){
  var results =[];
  var startRow = 0;
  var endRow = matrix.length-1;
  var startCol = 0;
  var endCol = matrix[0].length - 1;
  // console.log(startRow,endRow)
  // console.log(startCol,endCol)

  while(startRow <= endRow && startCol <= endCol){
//loop on each colume in one row
    for(var i = startCol; i <= endCol; i++){
      results.push(matrix[startRow][i]);
       // console.log(matrix[startRow][i])
    }
    startRow++;
    console.log(results)
//loop on each row in one colume
    for(var j = startRow; j <= endRow; j++){
      results.push(matrix[j][endCol]);
    }
    endCol--;
    console.log(results);
//loop on each colume in one row  descending

    for(var k = endCol; k >= startCol; k--){
      results.push(matrix[endRow][k]);
    }
    endRow--;
    console.log(results);
//loop on each row in one colume  descending
    for(var m = endRow; m >= startRow; m--){
      results.push(matrix[m][startCol]);
    }
    startCol++;
        console.log(results)

  }

  return results;
};

