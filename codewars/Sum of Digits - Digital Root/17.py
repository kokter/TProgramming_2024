def digital_root(n):
    while n >= 10:
        n = sum(int(digit) for digit in str(n))
    return n
number = 942
result = digital_root(number)
print(result) 