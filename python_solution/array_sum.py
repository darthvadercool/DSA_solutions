#!/bin/python3

import math
import os
import random
import re
import sys



# function written starts

def simpleArraySum(ar):
    sum= 0 
    arr_length = len(ar)
    for i in range(arr_length):
        sum += ar[i]
    return sum
    
# function ends    

    
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    ar_count = int(input().strip())

    ar = list(map(int, input().rstrip().split()))

    result = simpleArraySum(ar)

    fptr.write(str(result) + '\n')

    fptr.close()

