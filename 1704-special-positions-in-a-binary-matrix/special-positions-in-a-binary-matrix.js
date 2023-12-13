/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let res=0
    for(let i=0;i<mat.length;i++){
        let index=row(mat,i)
        if(index>=0 && col(mat,i,index)) res+=1
    }
    return res
};

function row(mat,i){
    let index=-1
    for(let j=0;j<mat[0].length;j++){
        if(mat[i][j]==1){
            if(index>=0) return -1
            else index=j
        }
    }
    return index
}

function col(mat,i,index){
    for(let j=0;j<mat.length;j++){
        if(mat[j][index] == 1 && j!= i) return false
    }
    return true
}
