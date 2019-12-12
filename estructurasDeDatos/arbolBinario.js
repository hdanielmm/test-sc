class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.size = 0
  }

  addNode(data) {
    const newNode = new Node(data);

    !this.root ? this.root = newNode : this.searchToAdd(this.root, newNode);
  }

  searchToAdd(root, newNode) {
    if(newNode.data < root.data) {
      !root.left ? root.left = newNode : this.searchToAdd(root.left, newNode);
    } else if(newNode.data > root.data) {
      !root.right ? root.right = newNode : this.searchToAdd(root.right, newNode);
    }
  }

  countNodes(root = this.root) {
    if(root.left) {
      this.countNodes(root.left)
    }
    if(root.right) {
      this.countNodes(root.right)
    };
    this.size++;
    // console.log(root.data);
    return this.size;
  }
}

const bt = new BinaryTree();
bt.addNode(15);
bt.addNode(25);
bt.addNode(10);
bt.addNode(7);
bt.addNode(22);
bt.addNode(17);
bt.addNode(13);
bt.addNode(5);
bt.addNode(9);
bt.addNode(27);
console.log(bt);
console.log("El árbol tiene " + bt.countNodes() + " nodos.");