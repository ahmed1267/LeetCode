/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    let q= new MinPriorityQueue()
    let res=[]
    function dfs(root,q){
        if(!root) return
        dfs(root.left,q)
        q.enqueue(root.val)
        dfs(root.right,q)
    }
    dfs(root1,q)
    dfs(root2,q)
    let n=q.size()
    for(let i =0;i<n;i++){
      res.push(q.dequeue().element)
    }
    return res
};