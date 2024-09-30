function flattenMap(map, parentKey = "") {
    let flatMap = {};
    for (let key in map) {
        if (map.hasOwnProperty(key)) {
            let newKey = parentKey ? `${parentKey}/${key}` : key;
            if (
                typeof map[key] === "object" &&
                map[key] !== null &&
                !Array.isArray(map[key])
            ) {
                Object.assign(flatMap, flattenMap(map[key], newKey));
            } else {
                flatMap[newKey] = map[key];
            }
        }
    }
    return flatMap;
}