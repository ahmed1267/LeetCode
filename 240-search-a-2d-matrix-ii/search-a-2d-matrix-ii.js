/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let searchMatrix = function(matrix, target) {
    let m=matrix.length-1
    let n=matrix[0].length-1
    function rec(x,y){
        let curr= matrix[y][x]
        if(curr==null) return false
        if(curr==target) return true
        matrix[y][x]=null
        if(curr>target){
            return x>0 && rec(x-1,y) || y>0 && rec(x,y-1)
        }else return x<n && rec(x+1,y) || y<m && rec(x,y+1)
    }
    return rec(n >> 1, m >> 1)
}