/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    function build(preLeft, preRight, inLeft, inRight) {
        if(preLeft > preRight || inLeft > inRight)
            return null;

        let rootVal = preorder[preLeft];

        let root = new TreeNode(rootVal);
        let index = inorder.indexOf(rootVal);

        root.left = build(preLeft + 1, preLeft + index - inLeft, inLeft, index - 1);
        root.right = build(preLeft + index - inLeft + 1, preRight, index + 1, inRight);

        return root;
    }

    return build(0, preorder.length - 1, 0, inorder.length - 1);
};