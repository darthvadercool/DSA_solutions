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

function hourglassSum(arr: number[][]): number {
    let max:number  = -500
    for (let i:number = 1; i < 5; i++) {
        for (let j:number = 1; j < 5; j++) {
            let sum:number = 0
            sum = (arr[i-1][j-1] + arr[i-1][j] + arr[i-1][j+1] + arr[i][j] + arr[i + 1][j-1] + arr[i +1][j] + arr[i+1][j + 1])
            max = max < sum ? sum : max
        }
    }
    return max
}

/* funtion ends*/
    



function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    let arr: number[][] = Array(6);

    for (let i: number = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result: number = hourglassSum(arr);

    ws.write(result + '\n');

    ws.end();
}
