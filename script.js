//                                                                                  ARRAY METHODS

// let arr = ["apple", "mango"];
// arr.forEach((item, index, arr)=>{
//     console.log(`${item} is at ${index} in ${arr}`)
// });

// let users = [
//     {id: 1, empNam: "John"},
//     {id: 2, empNam: "Peter"},
// ];
// let user = users.find(item => item.id < 3);
// console.log(user);

// let users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];
// let someUsers = users.filter((item) => item.id == 3);
// console.log(someUsers);

// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// console.log(lengths);

// let names = "Bilbo, Gandalf, Nazgul";
// let arr = names.split(", ");
// for (let name of arr) {
//   console.log(`A message to ${name}.`);
// }

// let arr = [1, 2, 3, 4, 5]
// console.log(typeof(arr))

// let arr = [1, 2, 3, 4, 5];
// let res = arr.reduce((sum, current) => sum + current, 0);
// console.log(res);

//                                                                                  MAP
// let recipeMap1 = new Map([
//   ["cucumber", 500],
//   ["tomatoes", 350],
//   ["onion", 50],
// ]);
// console.log( recipeMap1.keys() );

// iterate over keys (vegetables)
// for (let vegetable of recipeMap.keys()) {
//   console.log(vegetable); // cucumber, tomatoes, onion
// }

// // iterate over values (amounts)
// for (let amount of recipeMap.values()) {
//   console.log(amount); // 500, 350, 50
// }

// // iterate over [key, value] entries
// for (let entry of recipeMap.entries()) {
//   // the same as of recipeMap.entries()
//   console.log(entry); // cucumber,500 (and so on)
// }
// console.log(recipeMap.keys())

// let recipeMap = new Map();
// recipeMap.set("app", 50);
// recipeMap.set("pineapp", 25);
// console.log(recipeMap)

// Object.entries(object);                                      //{key: value} is a pair in object format...to create a map
// let obj = {
//   firName : "John",
//   age : 22,
//   empId : "HyK5asLp",
// };
// let mapFromObject = new Map(Object.entries(obj));
// console.log(Object.entries(obj));
// console.log(mapFromObject);

// Object.fromEntries([key, value]);
// let objectFromMap = Object.fromEntries ([
//   ["orange", 20],
//   ["apple", 30],
//   ["mango", 40]
// ]);
// console.log(objectFromMap)

//takes {key: value} a pair in object format...to create an array
// let arrFromObject = Object.entries(object={
//   firNam : "John",
//   age : 22,
// });
// console.log(arrFromObject)

//takes [key, value] in a pair of array format...to convert it into an object
// let objectFromArr = Object.fromEntries([
//   ["firNam", "John"],
//   ["age", 22],
// ]);
// console.log(objectFromArr);

//                                                                                  SET
// let set = new Set();
// let user1 = {firNam : "Eren"};
// let user2 = {firNam : "Mikasa"};
// let user3 = {firNam : "Armin"};
// set.add(user1);
// set.add(user2);
// set.add(user3);
// set.forEach((value)=>{
//   console.log(value)
// })

//                                                              Object{.keys(obj), .values(obj), .entries(obj)}
// let user = {
//   firName: "John",
//   lastName: "Doe",
//   ageeeee: "21",
// };
// let keys1 = Object.keys(user);

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};
let doublePrices = Object.fromEntries(
  Object.entries(prices).map((entries) => [entries])
);
console.log(doublePrices);
// let array = ["one", "two", "four"];
// let elem = array.map(elements => [elements]);
// console.log(elem);