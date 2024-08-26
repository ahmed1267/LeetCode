/**
 * @param {character[][]} grid
 * @return {number}
 */
var  numIslands= function(grid){
    let count=0
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]=='1'){
                count+=1
                bfs(grid,i,j)
            }
        }
    }
    return count
}

function bfs(grid,i,j){
    let q=[[i,j]]
    while(q.length){
        curr=q.shift()
        let currRow=curr[0]
        let currCol= curr[1]
        let rows=[1,0,0,-1]
        let cols=[0,1,-1,0]
        if(currCol<0 || currCol>grid[0].length-1 || currRow<0 || currRow>grid.length-1 ) continue;
        if(grid[currRow][currCol]=='0')continue;
        if(grid[currRow][currCol]=='1'){
            grid[currRow][currCol]='0'
        }
        for(let k=0;k<4;k++){
            q.push([currRow+rows[k],currCol+cols[k]])
        }
    }
}