function findMissingLetter(array) {
    let vocabulary = array[0] === array[0].toLowerCase();
    array = array.join('').toLowerCase().split('');
    let alph = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let firsrIndex = alph.indexOf(array[0]);
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== alph[firsrIndex + i]) {
            return vocabulary ? alph[firsrIndex + i] : alph[firsrIndex + i].toUpperCase();
        }
    }
    return undefined;
}