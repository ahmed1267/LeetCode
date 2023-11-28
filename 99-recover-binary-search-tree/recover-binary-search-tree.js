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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let small=null, big=null, prev=null
    function inorder(root){
        if(!root)return
        inorder(root.left)
        if(prev && prev.val>root.val){
            small=root
            if(big) return
            big=prev
        }
        prev=root
        console.log('small',small,'big',big,'prev',prev)
        inorder(root.right)
        return
    }
    inorder(root)
    swap(small,big)
};

function swap(node,node1){
    return [node.val,node1.val]=[node1.val,node.val]
}