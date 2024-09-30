function pigLatin(str) {
    return str.split(' ').map(word => {
        if (/^[a-zA-Z]+$/.test(word)) {
            return word.slice(1) + word[0] + 'ay';
        }
        return word;
    }).join(' ');
}

let str = pigLatin("Pig latin is cool !");
console.log(str);