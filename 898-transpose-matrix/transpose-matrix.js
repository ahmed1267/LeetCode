/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let n=matrix.length
    let m= matrix[0].length
    let res= Array.from({ length: m }, () => Array(n).fill(0));
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            res[i][j]=matrix[j][i]
        }
    }
    return res
};