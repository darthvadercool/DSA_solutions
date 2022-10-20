#!/bin/python3

import math
import os
import random
import re
import sys


# function written starts

def reverseArray(a):
    start = 0 
    end = len(a)-1
    while start<end:
        a[start],a[end]=a[end],a[start]
        start+=1
        end-=1
    return a    
    
# function ends    

    
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr_count = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    res = reverseArray(arr)

    fptr.write(' '.join(map(str, res)))
    fptr.write('\n')

    fptr.close()
