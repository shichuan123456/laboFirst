const preorderTraversal = (root) => {
  let stack = [],
    res = [];
  if(root) stack.push(root)
  while(stack.length) {
      let temp = stack.pop()
      res.push(temp.val);
      if(root.right) stack.push(root.right);
      if(root.left) stack.push(root.left);
  }
  return res
}


const preorderTraversal1 = (root) => {
    let res = [];
    if(!root) return [];
    res.push(root.val);
    preorderTraversal1(root.left);
    preorderTraversal1(root.right);
    return res
  }