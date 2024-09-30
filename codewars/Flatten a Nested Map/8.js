function flattenMap(map) {
    const result = {};
  
    function flatten(obj, prefix = "") {
      for (const key in obj) {
        const newKey = prefix ? `${prefix}/${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
          flatten(obj[key], newKey);
        } else {
          result[newKey] = obj[key];
        }
      }
    }
  
    flatten(map);
    return result;
  }
  
  const inputMap = {
    'a': {
      'b': {
        'c': 12,
        'd': 'Hello World'
      },
      'e': [1,2,3]
    }
  };
  
  const flattenedMap = flattenMap(inputMap);
  console.log(flattenedMap); 