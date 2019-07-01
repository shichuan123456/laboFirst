/** 
 *   中序排序，然后返回第k个值
 */ 
var kthSmallest = function(root, k) {
    let res = [];
    var DFS = function (root) {
        if(!root) return -1
        DFS(root.left)
        res.push(root.val)
        DFS(root.right)
    }
    DFS(root)
    return res[k-1]
};