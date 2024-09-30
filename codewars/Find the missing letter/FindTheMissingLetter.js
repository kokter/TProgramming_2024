function findMissingLetter(array) {
    let caseWord = array[0] === array[0].toLowerCase();
    array = array.join('').toLowerCase().split('');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let startIndex = alphabet.indexOf(array[0]);
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== alphabet[startIndex + i]) {
        return caseWord ? alphabet[startIndex + i] : alphabet[startIndex + i].toUpperCase();
      }
    }
    return undefined;
  }