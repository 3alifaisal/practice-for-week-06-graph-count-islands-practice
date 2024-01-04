function getNeighbors(row, col, matrix) {
  
 
  let numRows = matrix.length;
  let numCols = matrix[0].length;
  let neigbors = [];
  // Check top
  if(row > 0 && matrix[row -1][col] ===1){
    neigbors.push([row -1, col])
  }
  // Check top right
  if(row > 0 && col < numCols -1 && matrix[row -1][col +1] === 1){
    neigbors.push([row -1, col +1])
  }
  // Check right
  if( col < numCols -1 && matrix[row][col +1] === 1){
    neigbors.push([row ,col +1])
  }
  // Check bottom right
  if( row < numRows -1 && col < numCols -1 && matrix[row +1][col+1] === 1){
    neigbors.push([row +1, col +1])
  }
  // Check bottom
  if( row < numRows -1 && matrix[row +1][col] === 1){
    neigbors.push([row +1,col])
  }
  // Check bottom left
  if( row < numRows -1 && col > 0 && matrix[row +1][col -1] === 1){
    neigbors.push([row +1, col -1])
  }
  // Check left
  if( col > 0 && matrix[row][col -1] === 1){
    neigbors.push([row ,col -1])
  }
  // Check top left
  if( row > 0 && col > 0 && matrix[row-1][col -1] ===1 ){
    neigbors.push([row -1, col -1])
  }
  // Return neighbors
  return neigbors;
  // Your code here
}

function countIslands(matrix) {
  
  // Create a visited set to store visited nodes
  const visitedNodes = new Set()
  // Initialize count to 0
  let count = 0;
  // Iterate through all indices in matrix
  let numRows = matrix.length;
  let numCols = matrix[0].length;
  for(let row = 0; row < numRows; row ++){
    for(let col = 0; col < numCols; col++){
      let node = matrix[row][col];
     
      if(visitedNodes.has([row,col].toString()) === false && node ===1){
      count++
      
      const stack = [[row,col]];
      visitedNodes.add([row,col].toString());
      while(stack.length > 0){
        let [row,col] = stack.pop();
        let neigbors = getNeighbors(row,col,matrix);

        for(let neighbor of neigbors){
          if(visitedNodes.has(neighbor.toString()) === false){
            stack.push(neighbor);
            visitedNodes.add(neighbor.toString())
          }
        }
      }
    }
    }
  }
  return count;
    // If an index contains a 1 and has not been visited, 
    // increment island count and start traversing neighbors
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to the visited set
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count
  
  // Your code here
}

// Uncomment the lines below for local testing
const matrix = [
                [1,1,1,0,0],
                [0,1,1,0,1],
                [0,1,1,0,1]
              ]

console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

const matrix2 = [
                    [1,1,1,0,1],
                    [0,0,0,0,1],
                    [1,0,0,1,0],
                ]

console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];