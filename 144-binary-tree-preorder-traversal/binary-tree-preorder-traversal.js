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
    // let res=[]
    // function dfs(node){
    //     if(!node)return
    //     res.push(node.val)
    //     if(node.left)dfs(node.left)
    //     if(node.right)dfs(node.right)
    // }
    // dfs(root)
    // return res
    if(!root)return []
    let stack=[root], res=[]
    while(stack.length){
        curr=stack.pop()
        res.push(curr.val)
        if(curr.right) stack.push(curr.right)
        if(curr.left) stack.push(curr.left)
    }
    return res
};