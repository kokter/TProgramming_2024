function flattenMap(inputMap, currentKeys = '', result = {}) {
    let keysArray = Object.keys(inputMap);

    if (keysArray.length === 0) {
        return result;
    }

    for (let i = 0; i < keysArray.length; i++) {
        let key = keysArray[i];
        let newKey = currentKeys ? `${currentKeys}/${key}` : key;

        if (typeof inputMap[key] === 'object' && inputMap[key] !== null && !Array.isArray(inputMap[key])) {
            flattenMap(inputMap[key], newKey, result);
        } else {
            result[newKey] = inputMap[key];
        }
    }

    return result;
}

let exampleMap = {
    'a': {
        'b': {
            'c': 12,
            'd': 'Hello World'
        },
        'e': [1, 2, 3]
    }
};

let flattenedResult = flattenMap(exampleMap);
console.log(flattenedResult);