def to_camel_case(s):
    s = s.replace('-', ' ').replace('_', ' ')
    
    words = s.split()
    
    camel_case = words[0] if words else ''
    
    camel_case += ''.join(word.capitalize() for word in words[1:])
    
    return camel_case

print(to_camel_case("the-stealth-warrior"))  
print(to_camel_case("The_Stealth_Warrior"))   
print(to_camel_case("The_Stealth-Warrior"))   