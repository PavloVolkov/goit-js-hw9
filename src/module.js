export const user = {
  name: "Pavel",
  age: 22,
};
// const user = ["Pavel", 22];
console.log(JSON.stringify(user));

const str = `{"name":"Pavel","age":22}`;

console.log(JSON.parse(str));

export let a = 1;
