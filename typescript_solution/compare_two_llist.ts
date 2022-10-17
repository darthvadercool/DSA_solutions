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

function printSinglyLinkedList(node: SinglyLinkedListNode | null, sep: string): void {
    while (node != null) {
        process.stdout.write(String(node.data));

        node = node.next;

        if (node != null) {
            process.stdout.write(sep);
        }
    }
}

function CompareLists(llist1:SinglyLinkedListNode, llist2:SinglyLinkedListNode):number {
    if (llist1===null && llist2 === null){
        return 1;
    }
    
    while(llist1 && llist2){
        if (llist1.data != llist2.data) {
            return 0;
        }
        llist1=llist1.next;
        llist2=llist2.next;       
    }
    
    if (llist1 === null && llist2 === null) {
        return 1;
    }
    else {
        return 0;
    }   
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const tests = parseInt(readLine(), 10);

    for (let testsItr:number = 0; testsItr < tests; testsItr++) {
        const llist1Count:number = parseInt(readLine(), 10);

        let llist1 :SinglyLinkedList= new SinglyLinkedList();

        for (let i:number = 0; i < llist1Count; i++) {
            const llist1Item:number = parseInt(readLine(), 10);
            llist1.insertNode(llist1Item);
        }
      
          const llist2Count:number = parseInt(readLine(), 10);

        let llist2:SinglyLinkedList = new SinglyLinkedList();

        for (let i:number = 0; i < llist2Count; i++) {
            const llist2Item :number= parseInt(readLine(), 10);
            llist2.insertNode(llist2Item);
        }

        let result:number = CompareLists(llist1.head, llist2.head);

        ws.write((result ? 1 : 0) + "\n");
    }

    ws.end();
}

