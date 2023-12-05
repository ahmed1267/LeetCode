/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let q=[root]
    let res=[]
    while(q[0]){
        let len=q.length, level=[]
        for(let i=0;i<len;i++){
            let node=q.shift()
            level.push(node.val)
            if(node.left!=null) q.push(node.left)
            if(node.right!=null) q.push(node.right)
            
        }
        res.unshift(level)
    }
    return res
};