/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let minutes=0
    let rotten=[]
    let freshCount=0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2) {
                rotten.push({row: i, col: j});
            }

            if (grid[i][j] === 1) {
                freshCount++;
            }
        }
    }

    if(rotten.length>0){
        let currRotten=[]
        while(rotten.length){
            for(let i=0;i<rotten.length;i++){
                let {row,col}=rotten[i]
                let topRow= row-1
                let bottomRow=row+1
                let leftCol=col-1
                let rightCol=col+1
                if(grid[topRow]?.[col]==1){
                    currRotten.push({row:topRow,col})
                    grid[topRow][col]=2
                }

                if(grid[row][rightCol]==1){
                    currRotten.push({row,col:rightCol})
                    grid[row][rightCol]=2
                }

                if(grid[bottomRow]?.[col]==1){
                    currRotten.push({row:bottomRow,col})
                    grid[bottomRow][col]=2
                }

                if(grid[row][leftCol]==1){
                    currRotten.push({row,col:leftCol})
                    grid[row][leftCol]=2
                }

            }

            if(currRotten.length>0){
                minutes+=1
                rotten=currRotten
                freshCount-=currRotten.length
                currRotten=[]
            }else{
                rotten=[]
            }
        }
    }
    return freshCount ? -1 : minutes
};