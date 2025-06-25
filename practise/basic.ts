//Basic Types
//Primitive Types(number, string, boolean)
//Enum
//Arrays
//Tupples--> A fixed size of an array whose indexes are predefined
//Any, Unknown, Null, Never, Undefined, Void

let helloWorld = "Hello World"; // Typescript will infere here the type of a variable

// let a; // It will be typeof any

const arr1: [number, string] = [1, "karan"];
// interface User {
//   name: string;
//   id: number;
//   email: string;
// }
// const user: User = {
//   name: "Hayes",
//   id: 0,
// };

const arr: number[] = [1, 2, 3];
// console.table(user);

const tupples: [number, string, boolean] = [2, "karan", true]; // Every index's type is predefined into this with the same order

interface Car {
  type: string;
  model: string;
  year: number;
  manufacturing?: string;
}

const car: Car = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};
// console.log(car, "car");

const nameAgeMap: { [index: string]: number } = {}; // Index signature where you explicitly defined the propertie of that object.
nameAgeMap.Jack = 25;
// nameAgeMap[1] = 12;
// nameAgeMap.Mark = "Fifty";  --> this will cause an error

enum CardinalDirections {
  North = 1,
  East,
  South,
  West,
}
let currentDirection = CardinalDirections.South; // It will automically assign firt varibale as 0 value and add 1 into each. If you want manually then you can assign to the 1st variable and that value will be auto-incremented in the further sequence.
// console.log(currentDirection, "currentDirection");

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
} //You can assign unique number values for each enum value. Then the values will not incremented automatically

enum CardinalDirectionsString {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}

const cardinalDirectionsStrings = CardinalDirectionsString.East;
// console.log(cardinalDirectionsStrings);

interface Rectangle {
  height: number;
  width: number;
}

interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red",
};
