def permutations(s):
    if len(s) == 0:
        return [""]
    
    result = set()
    
    for i in range(len(s)):
        current_char = s[i]
        
        remaining = s[:i] + s[i+1:]
        
        for perm in permutations(remaining):
            result.add(current_char + perm)
    
    return list(result)

print(permutations('a'))      
print(permutations('ab'))     
print(permutations('abc'))    
print(permutations('aabb'))