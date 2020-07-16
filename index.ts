// Arrays
const last = <T>(arr: T[]): T => {
  return arr[arr.length - 1];
};

const l = last([1, 3, 5]);

const l2 = last(['a', 'b', 'c']);

// Another example.

const createArray = <T>(value: T) => {
  return [value];
};

const v = createArray(2);

const v2 = createArray('Y');
