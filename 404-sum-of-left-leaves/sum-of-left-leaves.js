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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {

    let sum=0 
    let q= [root]
    while(q.length){
        let node = q.shift()
        if(node?.left){
            if(!node.left.left && !node.left.right){
                sum+=node.left.val
            }else{
                q.push(node.left)
            }
        }
        if(node?.right){
            q.push(node.right)
        }
    }
    return sum
};