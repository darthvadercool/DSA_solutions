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

/* funtion written starts */

function reverseArray(a: number[]): number[] {
    const reverse: number[] = []
    for (let i:number  = a.length - 1; i >= 0; i--) {
        reverse.push(a[i]);
    }
    return reverse
}

/* funtion ends*/

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const arrCount: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res: number[] = reverseArray(arr);

    ws.write(res.join(' ') + '\n');

    ws.end();
}
