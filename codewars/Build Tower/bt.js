function towerBuilder(numFloors) {
    let tower = [];
    let numSpaces = numFloors - 1;
    let numStars = 1;
    for (let i = 0; i < numFloors; i++) {
        let floor = ' '.repeat(numSpaces) + "*".repeat(numStars) + ' '.repeat(numSpaces);
        tower.push(floor);
        numStars += 2;
        numSpaces -= 1;
    }
    return tower;
}

let towerFloors = towerBuilder(5);

let formattedTower = '[\n  ' + towerFloors.map(line => `"${line}"`).join(',\n  ') + '\n]';

console.log(formattedTower);