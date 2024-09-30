from collections import Counter

def anagram_difference(w1, w2):
    count1 = Counter(w1)
    count2 = Counter(w2)
    
    difference = 0
    
    all_letters = set(count1.keys()).union(set(count2.keys()))

    for letter in all_letters:
        difference += abs(count1[letter] - count2[letter])

    return difference

print(anagram_difference("codewars", "hackerrank"))  