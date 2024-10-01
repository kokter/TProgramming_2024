function anagramDifference(w1, w2) {
    let rate1 = {};
    let rate2 = {};
    let listy = 0;
    for (let sign of w1) {
      rate1[sign] = (rate1[sign] || 0) + 1;
    }
    for (let sign of w2) {
      rate2[sign] = (rate2[sign] || 0) + 1;
    }
    for (let sign in rate1) {
      if (rate2[sign]) {
        listy += Math.abs(rate1[sign] - rate2[sign]);
      } else {
        listy += rate1[sign];
      }
    }
    for (let sign in rate2) {
      if (!rate1[sign]) {
        listy += rate2[sign];
      }
    }
    return listy;
  }