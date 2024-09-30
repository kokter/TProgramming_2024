function maxSum(node) {
    if (!node) return 0;
    return node.value + Math.max(maxSum(node.left), maxSum(node.right));
}
const tree1 = {
    value: 17,
    left: {
        value: 3,
        left: { value: 2, left: null, right: null },
        right: null
    },
    right: {
        value: -10,
        left: { value: 16, left: null, right: null },
        right: {
            value: 1,
            left: { value: 13, left: null, right: null },
            right: null
        }
    }
};
console.log(maxSum(tree1));

const tree2 = {
    value: 5,
    left: {
        value: 4,
        left: { value: -80, left: null, right: null },
        right: { value: -60, left: null, right: null }
    },
    right: {
        value: 10,
        left: { value: -90, left: null, right: null },
        right: null
    }
};
console.log(maxSum(tree2));