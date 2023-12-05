/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    function build(inorder, postorder){
        if(!postorder.length || !inorder.length) return null
        let root=new TreeNode(postorder[postorder.length-1])
        let mid= inorder.indexOf(postorder[postorder.length-1])
        let leftInorder= inorder.slice(0,mid)
        let rightInorder= inorder.slice(mid+1)
        let leftPostorder= postorder.slice(0,leftInorder.length)
        let rightPostorder= postorder.slice(leftInorder.length,postorder.length-1)
        root.left=build(leftInorder,leftPostorder)
        root.right= build(rightInorder,rightPostorder)
        return root
    }

    return build(inorder,postorder)
};