def sum_of_intervals(intervals):
    sorted_intervals = sorted(intervals, key=lambda x: x[0])
    
    merged_intervals = []
    current_start, current_end = sorted_intervals[0]
    
    for start, end in sorted_intervals[1:]:
        if start <= current_end:  
            current_end = max(current_end, end) 
        else:
            merged_intervals.append((current_start, current_end))  
            current_start, current_end = start, end  
            
    merged_intervals.append((current_start, current_end))
    
    total_length = sum(end - start for start, end in merged_intervals)
    
    return total_length

print(sum_of_intervals([[1, 2], [6, 10], [11, 15]]))  
print(sum_of_intervals([[1, 4], [7, 10], [3, 5]]))   
print(sum_of_intervals([[1, 5], [10, 20], [1, 6], [16, 19], [5, 11]]))  
print(sum_of_intervals([[0, 20], [-100000000, 10], [30, 40]]))  