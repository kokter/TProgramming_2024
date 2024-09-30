function towerBuilder(nFloors) {
    let stack = [];
    let maxWidth = nFloors * 2 - 1;
    for (let i = 0; i < nFloors; i++) {
        let stars = i * 2 + 1;
        let spaces = (maxWidth - stars) / 2;
        let floor = " ".repeat(spaces) + "*".repeat(stars) + " ".repeat(spaces);
        stack.push(floor);
    }
    return stack;
}