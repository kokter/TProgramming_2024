import { taskA, taskB } from '../src';

describe('Tests taskA', () => {
  it('should return 6 values', () => {
    const result = [
      2.3468763792592435, 3.3909339083296413, 7.060456123895652, 20.274426487085844, 78.05794053292227,
      390.52739754985294,
    ];
    expect(taskA(1.6, 1.2, 3.7, 0.5)).toEqual(result);
  });
  it('should return 7 values', () => {
    const result = [
      Infinity,
      2.7797995726170024,
      5.061128315587746,
      12.81100636709318,
      44.04658297300808,
      199.04581411507252,
      1154.2116254221228,
    ];
    expect(taskA(1.6, 1, 4, 0.5)).toEqual(result);
  });
});

describe('Tests taskB', () => {
  it('should return 5 values', () => {
    const result = [2.405888983496339, 2.508708391025876, 12.008764826313094, 364.4322526985341, 10972.991416896122];
    expect(taskB(1.6, [1.28, 1.36, 2.47, 3.68, 4.56])).toEqual(result);
  });
  it('should return 5 values', () => {
    const result = [2.3468763792592435, 2.574414357131067, 12.81100636709318, 390.52739754985294, 13034.850944734955];
    expect(taskB(1.6, [1.2, 1.4, 2.5, 3.7, 4.6])).toEqual(result);
  });
  it('should return null', () => {
    expect(taskB(1.6, [])).toEqual(null);
  });
});
