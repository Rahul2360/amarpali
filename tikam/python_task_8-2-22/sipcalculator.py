 monthlysipamount=float(input("Enter monthly amount:\"))
       print(monthlysipamount)
        sipperiod=float(input("Enter SIP Period in years:\"))
        print(sipperiod)
        returnrate=float(input("Enter expected rate of return:\"))
        print(returnrate)
        def sipcalculator( monthlysipamount,sipperiod,returnrate)
         rate=returnrate/100/12
         noofpayment=(12*sipperiod)
         totalwealth=monthlysipamount*((((1+rate)**(noofpayment))-1)*(1+rate))/rate
         investedamount=(noofpayment*monthlysipamount)
         wealthgained=(totalwealth-investedamount)
         roundtotalwealth=round(totalwealth,2)
         roundwealthgained=round(wealthgained,2)
         print("total wealth:",roundtotalwealth)
         print("wealth gained:",roundwealthgained)
         print("invested amount:",investedamount)
        
        sipcalculator(monthlysipamount,sipperiod,returnrate)
