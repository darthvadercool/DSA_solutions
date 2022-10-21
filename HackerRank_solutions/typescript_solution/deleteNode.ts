'use strict';

import { WriteStream, createWriteStream } from "fs";
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

function printSinglyLinkedList(node: SinglyLinkedListNode | null, sep: string, ws: WriteStream): void {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}


/* funtion written starts */

function deleteNode(llist: SinglyLinkedListNode, position: number): SinglyLinkedListNode {
    if (position ===0){
        return llist.next;
    }
    
    let counter: number = 0; 
    let previous:SinglyLinkedListNode = null;
    let current:SinglyLinkedListNode = llist;
    
    while(counter!=position) {
        previous = current;
        current = current.next;
        counter = counter + 1;
    }
    previous.next = current.next;
    return llist ;

}

/* funtion ends*/

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    let llist: SinglyLinkedList = new SinglyLinkedList();

    const llistCount: number = parseInt(readLine().trim(), 10);

    for (let i: number = 0; i < llistCount; i++) {
        const llistItem: number = parseInt(readLine().trim(), 10);

        llist.insertNode(llistItem);
    }

    const position: number = parseInt(readLine().trim(), 10);

    const llist1: SinglyLinkedListNode = deleteNode(llist.head, position);

    printSinglyLinkedList(llist1, ' ', ws);
    ws.write('\n');

    ws.end();
}
