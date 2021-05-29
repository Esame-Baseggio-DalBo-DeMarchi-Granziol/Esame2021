# software in python che genera chiavi casulamente: 
# - XOR 16 bit
# - P-BOX 4 bit
# - S-BOX 4 bit 


import random
import math

#generazioni 10 chiavi XOR a 16 bit

print("----------------------------------------------")
print("XOR KEYS")
print("----------------------------------------------")

for i in range(10):
    print(str(i+1) + " KEY : "+ str(math.ceil(random.random()*pow(2,16)-1)))
 


#generazione 10 chiavi P-BOX a 16 linee (4 bit) tutte diverse afra loro 
list=[]
c = 0
print("\n\n----------------------------------------------")
print("P-BOX KEYS")
print("----------------------------------------------")
for k in range(10):
    list=[]
    while len(list) < 16:
        r=random.randint(0,15)
        if r not in list: 
            list.append(r)
    c = c + 1
    print(str(c) + " KEY : " + str(list)) 

#generazione 10 chiavi S-BOX a 4 bit tutte diverse fra loro 
list=[]
c = 0
print("\n\n----------------------------------------------")
print("S-BOX KEYS")
print("----------------------------------------------")
for k in range(10):
    list=[]
    while len(list) < 16:
        r=random.randint(0,15)
        if r not in list: 
            list.append(r)
    c = c + 1
    print(str(c) + " KEY : " + str(list)) 
print("----------------------------------------------")
