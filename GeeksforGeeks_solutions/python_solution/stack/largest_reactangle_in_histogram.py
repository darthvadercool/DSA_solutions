#User function Template for python3


class Solution:
  
##############code written##############################    
    def getMaxArea(self,histogram):
        stack = []
        maxArea = 0
        i=0
        while i<len(histogram):
            if (not stack) or (histogram[stack[-1]] <= histogram[i]):
                stack.append(i)
                i+=1
            else:
                top_element = stack.pop()
                area = (histogram[top_element] * ((i - stack[-1] - 1) if stack else i))
                maxArea = max(maxArea,area)
            
        while stack:
            top_element = stack.pop()
            area = (histogram[top_element] * ((i - stack[-1] - 1) if stack else i))
            maxArea = max(maxArea,area)
            
        return maxArea  
#############################################################        
                
#{ 
 # Driver Code Starts
#Initial Template for Python 3

# by Jinay Shah 

if __name__ == '__main__':
    test_cases = int(input())
    for cases in range(test_cases) :
        n = int(input())
        a = list(map(int,input().strip().split()))
        ob=Solution()
        print(ob.getMaxArea(a))
# } Driver Code Ends
