function findFibProduct(target) {
    let [a, b] = [0, 1];

    while (a * b < target) {
        [a, b] = [b, a + b];
    }
    
    return [a, b, a * b === target];
}
console.log(findFibProduct(714));
console.log(findFibProduct(800));