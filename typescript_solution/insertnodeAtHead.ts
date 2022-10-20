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

class SinglyLinkedListNode {
    data: number;
    next: SinglyLinkedListNode | null;

    constructor(nodeData: number) {
        this.data = nodeData;
        this.next = null;
    }
};

class SinglyLinkedList {
    head: SinglyLinkedListNode | null;
    tail: SinglyLinkedListNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData: number): void {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail!.next = node;
        }

        this.tail = node;
    }
};


/* funtion written starts */

function printLinkedList(node:SinglyLinkedListNode):void {
    let currentNode:SinglyLinkedListNode = node;
    while (currentNode != null) {
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
    
    
}

/* funtion ends*/

function main() {
    const llistCount:number = parseInt(readLine(), 10);

    let llist:SinglyLinkedList = new SinglyLinkedList();

    for (let i:number = 0; i < llistCount; i++) {
        const llistItem:number = parseInt(readLine(), 10);
        llist.insertNode(llistItem);
    }

    printLinkedList(llist.head);
}
