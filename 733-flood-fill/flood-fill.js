/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let q= []
    q.push([sr,sc])
    let curr=image[sr][sc]
    let rowN=[1,0,0,-1]
    let colN=[0,1,-1,0]
    image[sr][sc]=color
    if(color==curr) return image
    while(q.length){
        let [row,col]=q.shift()
        for(let i=0;i<4;i++){
            let rowDiff=row+rowN[i]
            let colDiff=col+colN[i]
            if(rowDiff<0||colDiff<0||rowDiff>=image.length||colDiff>=image[0].length) continue;
            
            if(image[rowDiff][colDiff]==curr){
                image[rowDiff][colDiff]=color
                q.push([rowDiff,colDiff])
            }
        }
    }
    return image
};