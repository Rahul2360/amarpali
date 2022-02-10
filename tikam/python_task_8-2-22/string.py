def combinations(name):
       if len(name)==1:
            return[name]
    
        p=combinations(name[1:])
        char=name[0]
        result=[]
        for x in p:\n
            for i in range(len(name)+1):
                result.append(name[:i]+char+name[i:])
        return result
    
    a=set(combinations('tikam'))
    print(a)
