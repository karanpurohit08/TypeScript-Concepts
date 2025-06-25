type Negate = (value: number) => number;

const myArrowFun: Negate = (value) => {
  return value + 1;
};

function func(a: number | string, b: number, ...rest: number[]) {
  // console.log(rest, "rest");
  // console.log(arguments[0]);
}

func(1, 2, 3, 4, 5, 6);

function abcde(
  name: string,
  age: number,
  cb: (arg: string) => void,
  gender: string = "not to be disclosed"
) {}
abcde("krn", 21, (arg: string) => {}, "male");

///If u use ... in parameter then u are using every argument in the one array.
function funct(...rest: number[]) {}
funct(1, 2, 3, 4, 5, 6);
