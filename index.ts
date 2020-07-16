// Arrays
const last = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};

const l = last([1, 3, 5]);

const l2 = last(['a', 'b', 'c']);

// Another example.

const createArray = <T, D>(firstValue: T, secondValue: D): [T, D] => {
  return [firstValue, secondValue];
};

const v = createArray(2, 3);

const v2 = createArray('Y', 'X');

const v3 = createArray('Y', 2);
// Override tyepes
const v4 = createArray<string | null, number>(null, 2);
