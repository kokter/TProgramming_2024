function sumIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let listy = [];
  let actualInt = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= actualInt[1]) {
      actualInt[1] = Math.max(actualInt[1], intervals[i][1]);
    } else {
      listy.push(actualInt);
      actualInt = intervals[i];
    }
  }
  listy.push(actualInt);
  let lengthOfIntervals = listy
    .map((item) => item[1] - item[0])
    .reduce((summ, digits) => summ + digits, 0);
  return lengthOfIntervals;
}