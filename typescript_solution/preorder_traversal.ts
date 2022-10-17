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

  public insert(node:TreeNode, data: number): TreeNode {
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
 var arr:String = '';

function preOrder(node: TreeNode):void {
    if (node != null ) {
        var x = node.data;
        arr = arr + x.toString() + ' ';
        preOrder(node.left);
        preOrder(node.right);
    }
}




function main() {
    var tree:BinarySearchTree = new BinarySearchTree();
    var n:number = parseInt(readLine());
    var m:number[] = readLine().split(" ").map(Number);
    for (var i=0; i<n; i++) {
        tree.root = tree.insert(tree.root ,m[i]);
    }
    var result: String = ''
    preOrder(tree.root);
    console.log(arr);
    
    
    
}

