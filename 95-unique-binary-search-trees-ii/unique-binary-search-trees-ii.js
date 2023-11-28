/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    let memo=new Map()

    function generate(start,end){
        if(start>end) return [undefined];
        if (memo.has(`${start}-${end}`)) {
            return memo.get(`${start}-${end}`);
        }
        let res=[]
        for(let i=start;i<=end;i++){
            for(let leftTree of generate(start,i-1)){
                for(let rightTree of generate(i+1,end)){
                    res.push(new TreeNode(i,leftTree,rightTree))
                    
                }
            }
        }
         memo.set(`${start}-${end}`, res)
        return res
    }

    return generate(1,n)
};