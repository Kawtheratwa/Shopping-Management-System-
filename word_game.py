
from  collections import defaultdict

t = int(input())

for i in range(t):
     n = int(input())

     players=[input().split()  for _ in range(3)]


     word_count=defaultdict(int)

     for i in range(3):
          for word in players[i]:
               word_count[word] +=1

     scors=[0,0,0]
     for i in range(3):
          for word in players[i]:
               if word_count[word]==2:
                    scors[i] += 1

               elif word_count[word]==1:
                    scors[i] += 3
    
     print(* scors)
                