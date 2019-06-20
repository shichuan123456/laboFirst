const minDepth = function (root) {
  if (!root) {
    return 0;
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
