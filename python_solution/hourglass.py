#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'hourglassSum' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY arr as parameter.
#

def hourglassSum(arr):
    result = -math.inf
    for row in range(1,5):
        for col in range(1,5):
            hour_glass_sum = \
            arr[row-1][col-1] + arr[row-1][col] + arr[row-1][col+1] + \
            arr[row][col] + \
            arr[row+1][col-1] + arr[row+1][col] + arr[row+1][col+1]
            result = max((result, hour_glass_sum))
    return (result)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr = []

    for _ in range(6):
        arr.append(list(map(int, input().rstrip().split())))

    result = hourglassSum(arr)

    fptr.write(str(result) + '\n')

    fptr.close()
