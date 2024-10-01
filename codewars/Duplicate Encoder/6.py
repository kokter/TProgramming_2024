def duplicate_encode(word):
    char_count = {}
    
    for char in word.lower():
        char_count[char] = char_count.get(char, 0) + 1
    
    new_string = ''
    for char in word:
        if char_count[char.lower()] == 1:
            new_string += '('  
        else:
            new_string += ')'  
    
    return new_string