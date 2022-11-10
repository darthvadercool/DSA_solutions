# User function Template for python3

class Solution:
############code written#############################    
    
    x=0
    def toh(self, N, fromm, to, aux):
        if N == 0:
            return
        self.x+=1
        self.toh(N-1,fromm,aux,to)
        print("move disk", N, "from rod", fromm, "to rod", to)
        self.toh(N-1,aux,to,fromm)
        
        return self.x
    
####################################################    

#{ 
 # Driver Code Starts
# Initial Template for Python 3


import math


def main():

    T = int(input())

    while(T > 0):
        N = int(input())
        ob = Solution()
        print(ob.toh(N, 1, 3, 2))
        T -= 1
if __name__ == "__main__":
    main()


# } Driver Code Ends
