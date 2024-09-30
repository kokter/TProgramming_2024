function sumIntervals(intervals) {
  //TODO
  intervals.sort((a, b) => a[0] - b[0]);
  let stack = [];
  let currentInterval = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= currentInterval[1]) {
      currentInterval[1] = Math.max(currentInterval[1], intervals[i][1]);
    } else {
      stack.push(currentInterval);
      currentInterval = intervals[i];
    }
  }
  stack.push(currentInterval);
  let lengthOfIntervals = stack
    .map((item) => item[1] - item[0])
    .reduce((summ, digits) => summ + digits, 0);
  return lengthOfIntervals;
}
