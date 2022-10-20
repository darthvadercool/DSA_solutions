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

/* funtion written starts*/

function reverse(llist: SinglyLinkedListNode): SinglyLinkedListNode {
 var prev: SinglyLinkedListNode = null;
    var current: SinglyLinkedListNode = llist;
    var next:SinglyLinkedListNode = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        llist = prev;
        return llist

        
    }
    
/* funtion ends*/    

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const tests: number = parseInt(readLine().trim(), 10);

    for (let testsItr: number = 0; testsItr < tests; testsItr++) {
        let llist: SinglyLinkedList = new SinglyLinkedList();

        const llistCount: number = parseInt(readLine().trim(), 10);

        for (let i: number = 0; i < llistCount; i++) {
            const llistItem: number = parseInt(readLine().trim(), 10);

            llist.insertNode(llistItem);
        }

        const llist1: SinglyLinkedListNode = reverse(llist.head);

        printSinglyLinkedList(llist1, ' ', ws);
        ws.write('\n');
    }

    ws.end();
}
