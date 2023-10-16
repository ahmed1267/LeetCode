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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return validate(root,-Infinity,Infinity)
};

var validate= function(root,lower,upper){
    if(root==null) return true
    if(root.val>lower&&root.val<upper){
        return validate(root.left,lower,root.val) && validate(root.right,root.val,upper)
    }else return false
}


