function findAnagrams(target, wordList) {
    const sortedTarget = target.split('').sort().join('');
    return wordList.filter(word => word.split('').sort().join('') === sortedTarget);
}

let result = findAnagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
console.log(result);