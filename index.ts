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

// Extend
// With this you can choose to have firstName and lastName in the object and the rest
// is whatever.
const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName,
  };
};

const i = makeFullName({ firstName: 'Muhanned', lastName: 'Noman', age: 99 });

// Interface

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

// You can have different types using the same interfacr as a base.

type NumberTab = Tab<number>;
type StringTab = Tab<string>;
