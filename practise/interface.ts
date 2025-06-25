interface User {
  name: string;
  email: string;
}

interface Admin extends User {
  isAdmin?: boolean;
}
const obj: Admin = {
  name: "karan",
  email: "krn@gmail.com",
  isAdmin: true,
};
// function func(obj: Admin) {}
