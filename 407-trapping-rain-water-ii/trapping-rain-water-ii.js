/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
    if(heightMap.length<3||heightMap[0].length<3) return 0
    let visited=Array.from({length:heightMap.length},()=> Array.from({length: heightMap[0].length},()=> false))
    let q= new MinPriorityQueue({priority: (x)=> x[2]})
    let total=0
    let dir= [[0,1],[0,-1],[-1,0],[1,0]]
    let m=heightMap.length
    let n=heightMap[0].length
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(i==0 || i==m-1||j==0||j==n-1) q.enqueue([i,j,heightMap[i][j]])
        }
    }
    while(!q.isEmpty()){
        let [i,j,height] = q.dequeue().element
        visited[i][j]=true
        for(let [dI,dJ] of dir){
            if(i+dI>=m||i+dI<0||j+dJ>=n||j+dJ<0||visited[i+dI][j+dJ]) continue;
            if(heightMap[i+dI][j+dJ]<height){
                total += height-heightMap[i+dI][j+dJ]
                heightMap[i+dI][j+dJ]=height
            }
            visited[i+dI][j+dJ]=true
            q.enqueue([i+dI,j+dJ,heightMap[i+dI][j+dJ]])
        }
    }
    return total
};