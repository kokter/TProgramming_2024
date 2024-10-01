function maxSum(root) {
  const maxSumRootToLeaf = (node) => {
    if (node === null) {
      return 0;
    }
    if (node.left === null && node.right === null) {
      return node.value;
    }
    const leftSum =
      node.left !== null ? maxSumRootToLeaf(node.left) : -Infinity;
    const rightSum =
      node.right !== null ? maxSumRootToLeaf(node.right) : -Infinity;
    return node.value + Math.max(leftSum, rightSum);
  };
  return maxSumRootToLeaf(root);
}
