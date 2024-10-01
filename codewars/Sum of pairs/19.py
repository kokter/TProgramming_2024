def sum_pairs(ints, s):
    seen = {}  
    for number in ints:
        target = s - number  
        if target in seen:
            return [target, number]
        seen[number] = True  
    return None 

print(sum_pairs([11, 3, 7, 5], 10))          
print(sum_pairs([4, 3, 2, 3, 4], 6))        
print(sum_pairs([0, 0, -2, 3], 2))          
print(sum_pairs([10, 5, 2, 3, 7, 5], 10)) 