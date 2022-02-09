initial_amount=float(input("Enter the Monthly SIP amount "))
rate_of_year=float(input("Enter rate of yearly "))
years=int(input("Enter number of year "))
def sip_calculate(initial_amount,rate_of_year,years):
    month_rate=rate_of_year/12/100 #month ka interset niklna h toh 12 se divide krke kyuki ye percwnt m hota h 1000
    months=years*12
    result=initial_amount*((((1+month_rate)**(months))-1)*(1+month_rate))/month_rate
    return result

result=sip_calculate(initial_amount,rate_of_year,years);
print(result)