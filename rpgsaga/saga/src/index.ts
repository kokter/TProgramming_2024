function result(a: number, x: number): number {
  const resultFunc = Math.pow(a, Math.pow(x, 2) - 1) - Math.log10(Math.pow(x, 2) - 1) + Math.cbrt(Math.pow(x, 2) - 1);
  return resultFunc;
}

function taskA(a: number, xBegin: number, xEnd: number, xDelta: number): number[] {
  const y = [];
  for (let x = xBegin; x <= xEnd; x += xDelta) {
    y.push(result(a, x));
  }
  return y;
}

function taskB(a: number, values: number[]): number[] {
  if (values.length === 0) {
    return null;
  }
  const y = [];
  for (const x of values) {
    y.push(result(a, x));
  }
  return y;
}

function output(nameOfTask: string, results: number[]): string {
  let resMsg = `Solutions to task ${nameOfTask}:\n`;
  if (results === null) {
    return (resMsg += '0');
  } else {
    results.forEach(resultNum => {
      resMsg += `${resultNum},\n`;
    });
    return resMsg;
  }
}

const taskAResult = taskA(1.6, 1.2, 3.7, 0.5);
console.log(output('A', taskAResult));

const taskBResult = taskB(1.6, [1.28, 1.36, 2.47, 3.68, 4.56]);
console.log(output('B', taskBResult));

export { taskA, taskB };
