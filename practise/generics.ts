//Generics functions--> means we are telling function how to treat the argument's types

function genFun<T>(a: T) {}
genFun<string>("krn");
genFun<number>(12);

function log<T>(value: T) {
  console.log(value);
}
log("Sam Current");
log(12);

//Generic Interfaces--> means we can allow any type for any key in the object
interface PoliticalParty<T> {
  name: string;
  founded: number;
  ideology: string;
  winningChancesInElections: T;
}

function abcdef(obj: PoliticalParty<number>) {}

//Generic Classes-->
class GenericBottleMaker<T> {
  constructor(public name: T) {}
}

const newGenericBottle = new GenericBottleMaker("krn");
const andotherGenericBottle = new GenericBottleMaker(12);

// this function won't allow "hey" to retunr as typescript consider it as a string liternal and we have return T generic here.
function loopHole<T>(a: T, b: T): T {
  return a;
}
