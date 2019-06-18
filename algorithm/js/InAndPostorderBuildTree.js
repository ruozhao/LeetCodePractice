/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {

    function build(inLeft, inRight, postLeft, postRight) {
        if(inLeft > inRight || postLeft > postRight)
            return null;

        let rootVal = postorder[postRight];

        let treeRoot = new TreeNode(rootVal);
        let rootLeftNum = inorder.indexOf(rootVal);

        treeRoot.left = build(inLeft, rootLeftNum - 1, postLeft, postLeft + rootLeftNum - inLeft - 1);
        treeRoot.right = build(rootLeftNum + 1, inRight, postLeft + rootLeftNum - inLeft, postRight - 1)

        return treeRoot;
    }

    return build(0, inorder.length - 1, 0, postorder.length - 1);
};