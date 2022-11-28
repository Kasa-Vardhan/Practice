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

//                                                                                  Object{.keys(obj), .values(obj), .entries(obj)}
// let user = {
//   firName: "John",
//   lastName: "Doe",
//   ageeeee: "21",
// };
// let keys1 = Object.keys(user);

// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };
// let doublePrices = Object.fromEntries(
//   Object.entries(prices).map((entries) => [entries])
// );
// console.log(doublePrices);

// let array = ["one", "two", "four"];
// let elem = array.map(elements => [elements]);
// console.log(elem);

//                                                                                  ARRAY DESTRUCTURING
// let arr = ["John", "Doe"];
// let [firNam, surNam] = arr;
// console.log(firNam);

// const obj = {
//     firNam : "John",
//     surNam : "Doe",
//     age : 21,
// };
// for(let [key, value] of Object.entries(obj)){
//     console.log(`${key}:${value}`);
// };

// let guest = "Jane";
// let admin = "Pete";
// // Let's swap the values:
// [guest, admin] = [admin, guest];
// console.log(guest);

//                                                                                  OBJECT DESTRUCTURING
// let {secNam, firNam: f, age} = {firNam: "John", secNam: "Doe"};
// console.log(f);

// let navBar = {
//     title: "navbarMenu",
//     items: ["Home", "Account"],
//     widthOfNavbar: "100px",
//     heightOfNavbar: "200px"
// };

// function showMenu({ title, widthOfNavbar, heightOfNavbar, items, }) {
//   console.log(`${title} ${widthOfNavbar} ${heightOfNavbar}`);
//   console.log(items);
// }

// showMenu(navBar);

//                                                                                  PRACTICE
//                                      (1)
// let user = { firName: "John", years: 30 };
// let { firName, years, isAdmin } = user;
// console.log( firName );
// console.log( years );
// if ( isAdmin == undefined ){
//     console.log( "user is not admin" )
// };
// for( const [person, salary] of personSalary){
//     if( Math.max(personSalary) ){
//         console.log("max")
//     }
// }

//                                      (2)
// let salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250,
// };
// personSalary = Object.values( salaries );
// console.log( personSalary );
// let maxSalary = (Math.max( ...personSalary ));
// console.log(maxSalary);

//                                                                                  JSON, JSON METHODS
// const user = {
//     firNam: "John",
//     age: 22,
//     skills: ["HTML5", "CSS3", "JS"],
//     isAdmin: true,
// };
// console.log(user);
// let jsonFormat = JSON.stringify(user);
// console.log((jsonFormat));
// let parsedJson = JSON.parse(jsonFormat);
// console.log((parsedJson));

// circular references can not be converted into strings using JSON.stringify( Object )
// const user = {
//     firNam: "John",
//     age: 22,
//     skills: ["HTML5", "CSS3", "JS"],
// };
// const admin = {
//     isAdmin: true,
//     loggedIn: true,
// }
// admin.userDetails = user;
// user.status = admin;
// console.log(JSON.stringify(user));             //Error: Circular References

//                                                                                  REVISIT: TERINARY OPERATOR
// let age = 18;
// if ( age >= 18 ){
//     console.log("Hello!");
// }
// else{
//     console.log("Age Should be Greater Than 18");
// }
// let age = 18;
// let response = age >= 18 ? "Hello" : "you should have an exit";
// console.log(response);

// let room = {
//   number: 23,
// };
// let meetup = {
//   title: "Conference",
//   participants: [{ name: "John" }, { name: "Alice" }],
//   place: room, // meetup references room
// };
// room.occupiedBy = meetup;

// let user = {
//   name: "John",
//   age: 25,
//   roles: {
//     isAdmin: false,
//     isEditor: true,
//   },
// };
// console.log(JSON.stringify(user, null, 2));

// let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": ["Pete", "Zeke"] }';
// let user = JSON.parse(userData);
// console.log(user);

// let numbers = "[0, 1, 2, 3]";
// numbers = JSON.parse(numbers);
// console.log(numbers)

//replacer function
// let room = {
//   number: 23,
// };
// let meetup = {
//   title: "Conference",
//   participants: [{ name: "John" }, { name: "Alice" }],
//   place: room, // meetup references room
// };
// room.occupiedBy = meetup; // room references meetup
// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     console.log(`${key}: ${value}`);
//     return key == "occupiedBy" ? undefined : value;
//   })
// );

// let arr = [{firNam: "John", salary: 1800},
//             {firNam: "Pete", salary: 900}]
// console.log( arr.reduce((prev, current) => prev + current.salary, 0) );

// let company = {
//   // the same object, compressed for brevity
//   sales: [
//     { name: "John", salary: 1000 },
//     { name: "Alice", salary: 1600 },
//   ],
//   development: {
//     sites: [
//       { name: "Peter", salary: 2000 },
//       { name: "Alex", salary: 1800 },
//     ],
//     internals: [{ name: "Jack", salary: 1300 }],
//   },
// };
// function recurTrav( department ){
//   if( Array.isArray( department )){
//     return ( department.reduce(( prev, curr ) => prev + curr.salary, 0 ))
//   }
//   else{
//     let sum = 0;
//     for(let subDep of Object.values( department )){
//       sum = sum + recurTrav( subDep );
//     };
//     return( sum );
//   };
// };
// console.log(recurTrav( company ));

//                                                                                  REST PARAMS
// function allArgs ( ...args ){
//   for ( let i = 0; i < args.length; i++){
//     console.log( args[i] )
//   };
// };
// allArgs ( "string", 1, true, null );

//                                                                                  SPREAD SYNTAX
// let str = "Hello";
// console.log([...str]);
// console.log( Array.from(str) );

//                                                                                  COPYING ARRAY AND OBJECTS
// let arr = [1, 2, 3];
// let arrCopy = [...arr];
// console.log(arr === arrCopy);

//                                                                                  NESTED FUNCTIONS
// function sayHiBye( firstName, lastName ) {
//   function getFullName() {
//     return ( firstName + " " + lastName);
//   };
//   return( "Hello, " + getFullName() );
// }
// console.log( sayHiBye("Eren","Jeager") );

//                                                                                  FUNCTION OBJECT AND IT'S PROPEERTIES
// "name" and "length" properties in a function
// function fullName ( fName, lName ) {
//     console.log ( fName + " " + lName );
// };
// fullName( "Eren", "Jeager" );
// console.log( fullName.arguments );

// Adding custom properties to a function
// const user = {};
// user.fName = "Eren";
// console.log(user);

//                                                                                  setTimeout and setInterval
// let greet = ( firNam, lastNam ) => {
//     console.log( "Hello" + ", " + firNam + " " + lastNam );
// };

// let timerId = setTimeout( greet, 1000, "Eren", "Jeager" );               setTimeout
// console.log(timerId);

// let greet = () => {
//     console.log("Hi")
// };
// let timerId = setInterval(greet, 1000);              setInterval
// setTimeout(() => {
//     clearInterval(timerId)               clearInterval
// }, 10000);

//                                                                                  NESTED setTimeout
// let timerId1 = setTimeout(function tick() {
//   console.log("tick1");
//   timerId1 = setTimeout(tick, 1000); // (*)
// }, 5000);

// let timerId = setTimeout( greet = () => {
//     console.log( "Hi" );
//     timerId = setTimeout (greet, 250)
// },250);

// let greet = () => {
//     console.log( "Hi, Eren" );
// };
// let timer = setTimeout( greet, 1000)

// setTimeout(greeting = s() => {
//     console.log( "Hi, Mikasa" )
// }, 1000);

// let counter = 0;
// let timerId = setInterval(() => {
//     if(counter === 10){
//         clearInterval(timerId);
//     }
//     console.log(counter++);
// }, 1000);

//                                                                                  FUNCTION BINDING
// let user = {
//   firstName: "John",
// };
// function func() {
//   console.log(this.firstName);
// }
// let funcUser = func.bind(user);
// funcUser();

// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   },
// };
// let sayHi = user.sayHi.bind(user);
// console.log(sayHi);

//                                                                                  ARROW FUNCTIONS REVISITED
// let group = {
//   title: "Survey Corps",
//   students: ["Eren", "Mikasa", "Armin"],
//   showList(){
//     this.students.forEach( student => {
//       console.log(`${this.title}: ${student}` );
//     });
//   },
// };
// group.showList();

//                                                                                  PROPERTY FLAGS
// let user = {
//   firName: "John",
// };
// let descriptor = Object.getOwnPropertyDescriptor(user, 'firName');       //.getOwnPropertyDescriptor
// console.log( JSON.stringify( descriptor, null, 2 ));

// let user = {
//   firNam: "John",
// };
// Object.defineProperty(user, "firNam", {
//   writable: false,
//   configurable: false,
// });

// Object.defineProperty(user, "firNam", {
//   writable: true,
// });

// let descriptor = Object.getOwnPropertyDescriptor(user, "firNam");
// console.log(descriptor);

let user = {
  name: "John"
};
Object.defineProperty(user, "name", {
  writable: false,
  configurable: false
});
// won't be able to change user.name or its flags
// all this won't work:
user.name = "Pete";
// delete user.name;
Object.defineProperty(user, "name", { value: "Pete" });
// Object.defineProperty(user, "name", {
//   writable: true,
// });                                             