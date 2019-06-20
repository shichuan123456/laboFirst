let hasPathSum = function (root, sum) {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return root.e === sum
  }

  if (hasPathSum(root.left, sum - root.e)) {
    return true;
  }

  if (hasPathSum(root.right, sum - root.e)) {
    return true
  }

  return false;
};
