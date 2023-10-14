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
var inorderTraversal = function(root) {
    
    // let arr=[]
    // if(!root) return arr
    // var inOrder= function(node){
    //     if(node.left) inOrder(node.left)
    //     arr.push(node.val)
    //     if(node.right) inOrder(node.right)
    // }
    // inOrder(root)
    // return arr

    let stack=[]
    let res=[]
    let curr=root
    if(!root) return res
    while(stack.length || curr){
        if(curr){
            stack.push(curr)
            curr=curr.left
        }else{
            curr=stack.pop()
            res.push(curr.val)
            curr=curr.right
        }
    }
    return res
};