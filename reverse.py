
class node:
    def __init__(self,data):
         self.data=data
         self.next=None


class LinkedList:
    def __init__(self):
        self.head=None


    def insert_at_end(self,data):
        new_node = node(data)
        if self.head ==None :
            self.head=new_node
            return 

        current=self.head
        while current.next:
             current=current.next
        current.next=new_node


    def print(self):
        result = ""
        current = self.head
        while current:
            result  = result + f"[{current.data} ]- > "
            current = current.next
        result += "None"
        print(result )

    def reverse(self):
        prev = None
        current = self.head
        while current:
            next_node = current.next     
            current.next = prev          
            prev = current              
            current = next_node          
        self.head = prev              




ll = LinkedList()

ll.insert_at_end(1)
ll.insert_at_end(2)
ll.insert_at_end(3)
ll.insert_at_end(4)
ll.print()

print("______________")
ll.reverse()
ll.print()
