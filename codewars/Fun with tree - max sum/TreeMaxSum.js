function maxSum(root) {
    const FromBeginningToEnd = (node) => {
        if (node === null) {
            return 0;
        }
        if (node.left === null && node.right === null) {
            return node.value;
        }
        const leftSum =
            node.left !== null ? FromBeginningToEnd(node.left) : -Infinity;
        const rightSum =
            node.right !== null ? FromBeginningToEnd(node.right) : -Infinity;
        return node.value + Math.max(leftSum, rightSum);
    };
    return FromBeginningToEnd(root);
}