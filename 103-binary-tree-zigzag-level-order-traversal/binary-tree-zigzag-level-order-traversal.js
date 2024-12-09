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
var zigzagLevelOrder = function(root) {
    let arr=[]
    if(!root) return arr
    let zagFlag=false
    q=[root]
    while(q.length){
        let size=q.length
        let subArr=[]
        for(let i=0;i<size;i++){
            let curr=q.shift()
            if(zagFlag) subArr.unshift(curr.val)
            else subArr.push(curr.val)
            if(curr.left) q.push(curr.left)
            if(curr.right) q.push(curr.right)
        }
        arr.push(subArr)
        zagFlag=!zagFlag
    }
    return arr;
}

