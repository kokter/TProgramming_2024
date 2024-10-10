function flattenMap(map, parentKey = "") {
    let MapFlat = {};
    for (let key in map) {
        if (map.hasOwnProperty(key)) {
            let newKey = parentKey ? `${parentKey}/${key}` : key;
            if (
                typeof map[key] === "object" &&
                map[key] !== null &&
                !Array.isArray(map[key])
            ) {
                Object.assign(MapFlat, flattenMap(map[key], newKey));
            } else {
                MapFlat[newKey] = map[key];
            }
        }
    }
    return MapFlat;
}