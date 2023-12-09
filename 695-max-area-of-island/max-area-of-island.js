/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let max = 0
    let q = []
    let len = 0
    let rowN = [1, 0, 0, -1]
    let colN = [0, 1, -1, 0]
    let rows=grid.length
    let cols=grid[0].length

    // function dfs(grid,i,j){ 
    //     if(i>=grid.length||j>=grid[0].length||i<0||j<0||grid[i][j]!= 1) return

    //     let up=dfs(grid,i+1,j)
    //     let down=dfs(grid,i-1,j)
    //     let right=dfs(grid,i,j+1)
    //     let left=dfs(grid,i,j-1)
    //     let sum =up+down+right+left
    //     return sum
    // }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == 1) {

                q.push([i, j])
                grid[i][j]=0
                len = 1
                while (q.length) {
                    
                    let [row,col] = q.shift()

                    for (let k = 0; k < 4; k++) {
                        let rowDiff = row + rowN[k]
                        let colDiff = col + colN[k]
                        if (rowDiff < 0 || colDiff < 0 || rowDiff >= rows || colDiff >= cols) continue;
                        
                        if (grid[rowDiff][colDiff] == 1 ) {
                            len += 1
                            q.push([rowDiff, colDiff])

                            grid[rowDiff][colDiff]=0
                        }

                    }
                }
                
                max = Math.max(max,len)
            }
        }
    }
    return max
};