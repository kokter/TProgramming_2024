function addBigNumber(a, b) {
    const numLen = Math.max(a.length, b.length);
    a = a.padStart(numLen, "0");
    b = b.padStart(numLen, "0");
  
    let listy = [];
  
    let tailing = false;
    for (let i = a.length - 1; i >= 0; i--) {
      let sum = Number(a[i]) + Number(b[i]);
  
      if (tailing) {
        sum++;
        tailing = false;
      }
  
      sum = sum.toString();
  
      if (sum.length > 1) {
        tailing = true;
        sum = sum.slice(1);
      }
  
      listy.push(sum);
    }
  
    if (tailing) {
      listy.push("1");
    }
  
    listy.reverse();
    listy = listy.join("");
    return listy;
  }