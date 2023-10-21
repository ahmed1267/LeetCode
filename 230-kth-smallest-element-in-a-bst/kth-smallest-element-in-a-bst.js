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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let arr =[]
  var inOrder= function(node){
      if(node){  
      let left = inOrder(node.left)
      arr.push(node.val)
      let right= inOrder(node.right)
      }
  } 
  inOrder(root)
  return arr[k-1]
// let n=0
// let stack=[]
// let curr=root
// while(stack.length || curr ){
//     while(curr){
//         stack.push(curr)
//         curr=curr.left
//     }
//     curr=stack.pop()
//     n+=1
//     if(n==k){
//         return curr.val
//     }
//     curr=curr.right
// }
};