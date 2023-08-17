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
var postorderTraversal = function(root) {
    let arr=[]
    if(!root) return arr
    // let stack =[root]
    // while(stack.length>0){
    //     let node = stack.pop()
    //     arr.push(node.val)
    //     if(node.left) stack.push(node.left)
    //     if(node.right) stack.push(node.right)
    // }

    // return arr.reverse()
    var dfs=function(node){
        if(node.left) dfs(node.left)
        if(node.right) dfs(node.right)
        arr.push(node.val)
    }
    dfs(root)
    return arr
};