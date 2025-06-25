// Diff between any and unknown: When you use any typescript will stop making type checks in future. In Unknown it does the same but in further code you have to check the types before accessing or modifying that perticular value.

//Type Inference--> when typescript will use it's own brain to figure out the type of a varible
//Type annotation-->when you define the type of any varibale that means it's type annotation

let a;
a = 12;
a = "krn";

// console.log(a.toUpperCase());

let b: unknown;
b = 12;
b = "krn";
if (typeof b == "string") {
}

type mixVal = string; // when strictNullChecks is false then undefined and null will be subtypes of every types.

let k = undefined;

type ofX =
  | string
  | null
  | number
  | undefined
  | { name: string }
  | [number, string];
let x: ofX;
x = [1, "1"];

type Users = {
  name: string;
  age: number;
  email: string;
  gender: boolean;
};
const userObj: Users = {
  name: "karan",
  email: "krn@gmail.com",
  age: 21,
  gender: true,
};

// Access modifiers= Private, Protected & Public
// Priate--> the moment u make privage property it won't be accessible to the child classes.
// Protected--> the moment u make it protected it can be used in sub classes as well.
class BottleMaker {
  public halua = "karan";
  constructor(public name: string, public price: number) {
    this.name = name;
    this.price = price;
  }
}

const newBottle = new BottleMaker("Milton", 510);
// console.log(newBottle);

class Abcd {
  name = "karan";
  someStuffGoing() {
    // console.log(this.name, "name in method");
  }
}
const alphas = new Abcd();
alphas.someStuffGoing();

class MetalBottleWater extends BottleMaker {
  constructor(name: string, price: number) {
    super(name, price);
  }
  getValue() {
    // console.log(this.name, "name in extended class");
    // console.log(this.halua, "halua");
  }
}

const m1 = new MetalBottleWater("milton", 1200);
m1.getValue();

// ready-only are not meant to be changed
//?--> In order to make gender optional property
class UsersOnly {
  public _name;
  constructor(_name: string, public gender?: string) {
    this._name = _name;
  }

  changeName() {
    // this.name = "karan";
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

const u1 = new UsersOnly("Krn...");
u1.name = "krn";
console.log(u1.name);

//static--> directly access the property of a class without initializing it with new keyword
class LokShabha {
  static totalMPs = 140;
  static getRandomNumber() {
    return Math.random();
  }
}
console.log(LokShabha.totalMPs);

//Abstract Classes
