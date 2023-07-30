// Primitives types

let age: number;

age = 12;

let userName: string;

userName = "Do Chien";

let isInstructor: boolean;

isInstructor = true;

//More complex types

//Array
let hobbies: string[];

hobbies = ["Hello", "World"];

//Object
let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 32,
};

//Array object
let people: {
  name: string;
  age: number;
}[];

//Type Aliases

type Person = {
  name: string;
  age: string;
};

let ps: Person;

//Functions & Function Types

function add(a: number, b: number): number | string {
  return a + b;
}

//Generics

function insertAtBeginning<T>(array: T[], value: T): T[] {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1 1 2 3]
