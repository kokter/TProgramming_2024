function maxSum(node) {
    if (node === null) {
        return 0;
    }

    if (node.left === null && node.right === null) {
        return node.value;
    }

    const leftSum = node.left ? maxSum(node.left) : -Infinity;
    const rightSum = node.right ? maxSum(node.right) : -Infinity;

    return node.value + Math.max(leftSum, rightSum);
}

const tree1 = new TreeNode(
    17,
    new TreeNode(3, new TreeNode(2)),
    new TreeNode(-10, new TreeNode(16), new TreeNode(1, new TreeNode(13)))
);

console.log(maxSum(tree1));

const tree2 = new TreeNode(
    5,
    new TreeNode(4, new TreeNode(-80), new TreeNode(-60)),
    new TreeNode(10, new TreeNode(-90))
);

console.log(maxSum(tree2));