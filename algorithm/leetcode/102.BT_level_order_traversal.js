/* 
    Binary Tree Level Order Traversal
*/

const levelOrder = function (root) {
  if (!root) {
    return [];
  }

  let res = [],
    queue = [];
  queue.push(root);
  while (queue.length) {
    let size = queue.length,
      temp = [];
    for (let i = 0; i < size; i++) {
      let node = queue.shift()
      if (node.right) queue.push(node.right)
      if (node.left) queue.push(node.left)
      temp.push(node.val)
    }
    res.push(temp)
  }
};
