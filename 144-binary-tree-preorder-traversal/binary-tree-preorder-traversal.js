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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(!root) return []
    let stack=[root]
    let res=[]
    while(stack.length){
        curr=stack.pop()
        res.push(curr.val)
        if(curr.right) stack.push(curr.right)
        if(curr.left) stack.push(curr.left)
    }
    return res
};