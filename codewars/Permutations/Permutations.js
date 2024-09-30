function permutations(string) {
    let res = [];
    let perm = (arr, currentArr) => {
        if (arr.length === 0) {
            res.push(currentArr.join(""));
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            let nextArr = arr.slice(0, i).concat(arr.slice(i + 1));
            perm(nextArr, currentArr.concat(arr[i]));
        }
    };

    perm(string.split(""), []);
    return [...new Set(res)];
}