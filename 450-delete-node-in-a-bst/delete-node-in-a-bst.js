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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    function remove(root,key){
        if(!root) return root
        if(key > root.val) root.right=remove(root.right,key)
        else if(key < root.val) root.left=remove(root.left,key)
        else{
            if(!root.left) return root.right
            else if(!root.right) return root.left
            else{
                let curr= root.right
                while(curr.left) curr=curr.left
                root.val=curr.val
                root.right = remove(root.right,root.val)
            }
        }
        return root
    }
    return remove(root,key)
};