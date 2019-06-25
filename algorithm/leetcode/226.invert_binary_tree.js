let invertTree = function (root) {
    if(!root) {
      return root;
    }

    let stack = [], tempNode;
    stack.push(root);
    while(stack.length) {
      let node = stack.pop();
      if(temp.left) stack.push(temp.left);
      if(temp.right) stack.push(temp.right);
      
      tempNode = node.left;
      node.left = node.right;
      node.right = temp;
    }
  };

  var invertTree1 = function(root) {   
    if(!root) return null;
    let left = invertTree(root.left);
    let right = invertTree(root.right);
    node.left = right;
    node.right = left;
    return node;
 }; 