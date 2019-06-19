class Node {
    constructor(e) {
      this.e = e;
      this.left = null;
      this.right = null
    }
  }

  class LinkedList {
    constructor() {
      this.root = null;
      this.size = 0;
    }

    addNode(e) {
      if(!this.root) return this.root = new Node(e);
      this._addNode(this.root, e);
    }

    _addNode(node, e) {
      if (!node) return new Node(e);
      if (e < node.e) {
        node.left = this._addNode(node.left, e);
      } else {
        node.right = this._addNode(node.right, e);
      }
      return node;
    }

    inorder() {
      this._inOrder(this.root);
    }

    _inOrder(node) {
      if (node) {
        this._inOrder(node.left)
        console.log(node.e);
        this._inOrder(node.right);
      }
    }
  }

  function BST_sort(arr) {
    let bst = new LinkedList()
    buildBST(arr, bst);
    bst.inorder();
  }

  function buildBST(arr, bst) {
    for (let i = 0, len = arr.length; i < len; i++) {
      bst.addNode(arr[i])
    }
  }

 BST_sort([3, 2, 1, 4, 5, 1, 2, 4, 6, 3, 123, 42, 32, 32])