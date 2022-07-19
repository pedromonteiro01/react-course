// Primitives: number, string, boolean
let age: number;

age = 1;

// Arrays
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Pedro",
  age: 12,
};

let people: {
  name: string;
  age: number;
}[];

// Union Type
let course: string | number = "React";
course = 2;

// Alias
type Person = {
  name: "Pedro";
  age: 12;
};

let p1: Person;

// Function & types
function add_number(a: number, b: number): number {
  return a + b;
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1,2,3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
