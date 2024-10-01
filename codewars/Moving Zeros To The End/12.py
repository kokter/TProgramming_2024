def move_zeros(array):
    non_zero_elements = []
    
    zero_count = 0
    
    for num in array:
        if num == 0:
            zero_count += 1 
        else:
            non_zero_elements.append(num) 
    
    non_zero_elements.extend([0] * zero_count)
    
    return non_zero_elements

result = move_zeros([1, 0, 1, 2, 0, 1, 3])
print(result)