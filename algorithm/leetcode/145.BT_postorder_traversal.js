// const postorderTraversal = (root) => {
//     if (!root) return [];
//     let stack = [],
//         res = [],
//         cur = root,
//         right = null;
//     stack.push(cur);
//     while (stack.length) {
//         while (cur.left) {
//             stack.push(cur.left);
//             cur = cur.left;
//         }
//         cur = stack.pop();
//         while(!cur.right || cur.right === right){
//             res.push(cur);
//             right = cur;
//             cur = stack.pop();
//         }
//         stack.push(cur)
//         cur = cur.right
//     }
//     return res
// }

const postorderTraversal1 = (root) => {
    let res = [];
    if(!root) return [];
    postorderTraversal1(root.left);
    postorderTraversal1(root.right);
    res.push(root.val);
    return res
  }