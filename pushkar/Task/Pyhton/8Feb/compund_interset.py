p=input("Enter Priciple");
p=int(p)
r=input("Enter rate");
r=int(r)
t=input("Enter time");
t=int(t)
n=input("number of times interest applied per time period")
n=int(n)

def compund_interset(p,r,n,t):
    divide=r/n
    mutiply=n*t;
    total=(1+r/n)**mutiply#p+(1+r/n)ki power n*t
    return total

result=compund_interset(p,r,n,t)
print(result)