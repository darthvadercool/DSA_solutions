'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

class TreeNode {
  constructor(
    public data: number,
    public left: TreeNode = null,
    public right: TreeNode = null
  ) {}
}

export class BinarySearchTree {
  constructor(public root: TreeNode = null) {}

  public insert(node:TreeNode,data: number): TreeNode {
      if (node == null){
        node = new TreeNode(data);
    }
     else if (data < node.data){
        node.left  = this.insert(node.left, data);
    }
    else{
        node.right = this.insert(node.right, data);   
    }

    return node;
    }
  }

var arr :String = '';

function postOrder(node:TreeNode):void {
    if (node != null) {
        postOrder(node.left);
        postOrder(node.right);
        arr= arr + (node.data).toString() +' ';

    }
}  



function main() {
    var tree = new BinarySearchTree();
    var n = parseInt(readLine());
    var m = readLine().split(" ").map(Number);
    for (var i=0; i<n; i++) {
        tree.root = tree.insert(tree.root, m[i]);
    }

    postOrder(tree.root);
    console.log(arr);
}
