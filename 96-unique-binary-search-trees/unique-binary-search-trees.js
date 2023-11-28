/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let numTrees=new Array(n+1).fill(1)
    for(let i=2;i<=n;i++){
        let total=0
        for(let j=1;j<=i;j++){
            let left=j-1
            let right=i-j
            total+=numTrees[left]*numTrees[right]
        }
        numTrees[i]=total
    }
    return numTrees[n]
};