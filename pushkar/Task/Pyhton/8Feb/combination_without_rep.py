def permute(s, answer):#(ab,"" )#(b, ""a)
    if (len(s) == 0):
        # print("zero")
        print(answer, end = "  ")
        return
     
    for i in range(len(s)):#2 
        ch = s[i]#a 
        # print(i);
        # print(ch);
        left_substr = s[0:i]#nothing,b
        # print(left_substr)
        right_substr = s[i + 1:]#b,nothing
        # print(right_substr)
        rest = left_substr + right_substr#b #a
        # print(rest +"\n")
        permute(rest, answer + ch)#permute(b, ""a)
 
answer = ""
 
s = input("Enter the string : ")
 
print("All possible strings are : ")
permute(s, answer)
 