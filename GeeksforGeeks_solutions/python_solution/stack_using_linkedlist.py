class StackNode:

    # Constructor to initialize a node
    def __init__(self, data):
        self.data = data
        self.next = None


class MyStack:
    def __init__(self):
        self.next = None    

    def push(self, data):
        newNode = StackNode(data)
        newNode.next = s.next
        s.next = newNode
        
    def isEmpty(self):
        if self.next is None:
            return True
        
        

    def pop(self):
        if self.next is None:
            return -1
            
        elif self.next != None:
            item = self.next
            self.next = self.next.next
            return item.data
        

     



#{ 
 # Driver Code Starts
if __name__ == '__main__':
    t = int(input())
    for i in range(t):
        s = MyStack()
        q = int(input())
        q1 = list(map(int, input().split()))
        i = 0
        while(i < len(q1)):
            if(q1[i] == 1):
                s.push(q1[i + 1])
                i = i + 2
            elif(q1[i] == 2):
                print(s.pop(), end=" ")
                i = i + 1
            elif(s.isEmpty()):
                print(-1)
        print()

# } Driver Code Ends
