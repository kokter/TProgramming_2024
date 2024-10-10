function towerBuilder(nFloors) {
    let listy = [];
    let mxWid = nFloors * 2 - 1;
    for (let i = 0; i < nFloors; i++) {
        let stars = i * 2 + 1;
        let spaces = (mxWid - stars) / 2;
        let level = " ".repeat(spaces) + "*".repeat(stars) + " ".repeat(spaces);
        listy.push(level);
    }
    return listy;
}