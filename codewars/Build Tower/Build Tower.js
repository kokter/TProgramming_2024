function towerBuilder(nFloors) {
    const pyramid = [];
    const maxWidth = 2 * nFloors - 1;

    for (let n = 0; n < nFloors; n++) {
        const stars = '*'.repeat(2 * n + 1);
        const spaces = ' '.repeat((maxWidth - stars.length) / 2);
        const floor = spaces + stars + spaces;
        pyramid.push(floor);
    }
    return pyramid;
}
const pyramidFloors = towerBuilder(4);

const formattedPyramid = '[\n  ' + pyramidFloors.map(line => `"${line}"`).join(',\n  ') + '\n]';
console.log(formattedPyramid);