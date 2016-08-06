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

var spiralTraversal = function(matrix){
   var arrayResult=[];
   while(true){
   	if(matrix.length===0){
   		break;
   	}
   for(var i=0;i<matrix.length;i++){
   	  if(i===0){
   	  	for(var j=0;j<matrix[i].length;j++){
   	  		arrayResult.push(matrix[i][j]);
   	  	}
   	  	for(var w=1;w<matrix.length;w++){
   	  		arrayResult.push(matrix[w][matrix.length-1]);
   	  		matrix[w].pop();
   	  	}
   	  	matrix.splice(0,1);
   	  	console.log(matrix,"1");
   	  }else if(i===matrix.length-1){
   	  	for(var k=matrix[i].length-2;k>=0;k--){
   	  		arrayResult.push(matrix[i][k]);
   	  	}
   	  	for(var y=matrix.length-2;y>0;y--){
   	  		arrayResult.push(matrix[y][i]);
   	  		matrix[y].shift()
   	  	}
   	  	matrix.splice(matrix.length-1);
   	  	console.log(matrix,"a5eir");
   	  }
   }
}
   return arrayResult;
};

