def pig_it(text):
    words = text.split()
    
    pig_latin_words = []
    for word in words:
        if word.isalpha():  
            pig_word = word[1:] + word[0] + "ay"
            pig_latin_words.append(pig_word)
        else:
            pig_latin_words.append(word)

    return ' '.join(pig_latin_words)

print(pig_it('Pig latin is cool'))  
print(pig_it('Hello world !')) 