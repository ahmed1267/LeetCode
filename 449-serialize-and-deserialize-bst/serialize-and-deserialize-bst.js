/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root, res=[]) {
    if(root){
        res.push(root.val)
        res.push(...serialize(root.left))
        res.push(...serialize(root.right))
    }else{
        res.push(null)
    }
    return res
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let val= data.shift()
    if(val==null) return null
    let node = new TreeNode(val)
    node.left= deserialize(data)
    node.right= deserialize(data)
    return node
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */