#!/bin/python3

import math
import os
import random
import re
import sys

# function written starts

def quickSort(arr):
    pivot = arr[0]
    left = []
    right = []
    for element in arr:
        if element<pivot:
            left.append(element)
        else:
            right.append(element)
    return left+right
    
    
# fucntion ends    

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    result = quickSort(arr)

    fptr.write(' '.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
