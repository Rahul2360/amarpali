priciple=input("Enter value of principle")
priciple=int(priciple)
time=input("Enter value time")
time=int(time)
rate=input("Enter rate of inter");
rate=int(rate)
# total=int(priciple)+int(time)+int(rate)
# print(total)

def simple_Interset(p,t,r):
    return(p*r*t)/100

ans=simple_Interset(priciple,time,rate)
print(ans)

