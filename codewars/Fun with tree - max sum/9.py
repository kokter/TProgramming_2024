class TreeNode:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

def max_sum(root):
    if root is None:
        return 0
    
    if root.left is None and root.right is None:
        return root.value
    
    left_sum = max_sum(root.left) if root.left else float('-inf')
    right_sum = max_sum(root.right) if root.right else float('-inf')
    
    return root.value + max(left_sum, right_sum)


root = TreeNode(17, 
                TreeNode(3, 
                         TreeNode(2)), 
                TreeNode(-10, 
                         TreeNode(16), 
                         TreeNode(1, 
                                  TreeNode(13))))

print(max_sum(root))  
