function result(a, x) {
  const resultFunc = Math.pow(a, Math.pow(x, 2) - 1) - Math.log10(Math.pow(x, 2) - 1) + Math.cbrt(Math.pow(x, 2) - 1);
  return resultFunc;
}

function taskA(a, xBegin, xEnd, xDelta) {
  const y = [];
  for (let x = xBegin; x <= xEnd; x += xDelta) {
    y.push(result(a, x));
  }
  return y;
}

function taskB(a, values) {
  const y = [];
  for (const x of values) {
    y.push(result(a, x));
  }
  return y;
}

function output(nameOfTask, results) {
  console.log(`Solutions to task ${nameOfTask}:`);
  for (const res of results) {
    console.log(res);
  }
}

function solve(a, xBegin, xEnd, xDelta, values) {
  const taskAResult = taskA(1.6, 1.2, 3.7, 0.5);
  output('A', taskAResult);

  const taskBResult = taskB(1.6, values);
  output('B', taskBResult);
}

module.exports = solve;
