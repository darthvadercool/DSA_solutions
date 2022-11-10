############### code written ###############

class Solution:
    
    def deleteMid(self, s, sizeOfStack):
        index = (sizeOfStack)//2
        current = 0
        temp = []
        while (current<index ) :
            temp.append(s.pop())
            current=current+1
        del s[-1]
        while(len(temp)!=0):
            s.append(temp.pop())
        
##########################################


#{ 
 # Driver Code Starts
#Initial Template for Python 3

def main():
    t=int(input())
    while(t>0):
        sizeOfStack=int(input())
        myStack=[int(x) for x in input().strip().split()]
        ob = Solution()
        ob.deleteMid(myStack,sizeOfStack)
        while(len(myStack)>0):
            print(myStack[-1],end=" ")
            myStack.pop()
        print()
        t-=1


if __name__=="__main__":
    main()
    
    
# } Driver Code Ends

