/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function(grid) {
    let m=grid.length
    let n=grid[0].length
    let visited=Array.from({length:m},()=> new Array(n).fill(false))
    let dirs=[[1,0],[0,1],[-1,0],[0,-1]]
    let q= new MinPriorityQueue({priority: (x)=> x[0]})
    q.enqueue([0,0,0])
    visited[0][0]=true
    while(!q.isEmpty()){
        let [w,row,col]=q.dequeue().element
        if(row==m-1&&col==n-1) return w
        for(let [dx,dy] of dirs){
            let [x,y]=[row+dx,col+dy]
            if(x<0||y<0||x>=m||y>=n||visited[x][y]) continue;
            visited[x][y]=true
            q.enqueue([w+grid[x][y],x,y])
        }
    }

};