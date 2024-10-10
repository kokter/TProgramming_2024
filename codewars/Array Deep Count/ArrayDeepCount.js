function deepCount(a) {
    if (a.length === 0) {
        return 0;
    }
    let mxLen = 0;
    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) {
            mxLen += deepCount(a[i]);
        }
        mxLen++;
    }
    return mxLen;
}