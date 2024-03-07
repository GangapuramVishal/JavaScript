// ----------------------------------- JavaScript From Basic------------------------------------------
// ----OUTPUT-----------
// console.log("Hello World");
// alert("Hello world");
// document.write("Hello World");
let myname = promt("emter your name:");

// let x = 5, y = 7;
// let sum = x + y;
// console.log("sum of " + x + " and " + y + " is " + sum)

// let num1 = parseInt(readline("enter the number: "));
// let num2 = parseInt(readline("enter number2 : "));
// let sum = num1 + num2;
// console.log(`the sume of two numbers ${num1} and ${num2} is ${sum}`);

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter the number: ', (num1) => {
//   // Your code logic here
//   console.log(`You entered: ${num1}`);
//   rl.close();
// });

// let age = 25;
// let price = 10.99;
// let gpa = 9.8;

// console.log(`my current age is: ${age}`);
// console.log(`my bike price  is: ${price}`);
// console.log(`my current gpa is: ${gpa}`);
// console.log(typeof price);

//--------------------accept user input-------------
//simple way--------

// let user;
// user = window.prompt("What is your name: ");      //output shows in html page
// console.log(user);

// professional way-------

// let username;
// document.getElementById("mysubmit").onclick = function(){
//     username = document.getElementById("mytext").value;
//     console.log(username);
// }

//based on input change the H1 element---------
// let username;
// document.getElementById("mysubmit").onclick = function(){
//     username = document.getElementById("mytext").value;
//     document.getElementById("myh1").textContent = `Hello ${username}`
// };
// ---------------------type conversion--------------------

// let x, y = 5, z = " ";
// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);
// ---------- calculating circumference---------------------------
// const PI = 3.14;
// let radius = Number(window.prompt("Enter the radius of circle: "));
// let circumference = 2 * PI * radius;
// console.log(typeof radius); 
// console.log(circumference);
 
// using webpage-------------------------

// const PI = 3.14159
// let radius;
// let circumference;
// document.getElementById("mysubmit").onclick = function(){
//     radius = document.getElementById("mytext").value;
//     circumference = 2 * PI * radius;
//     document.getElementById("myh3").textContent = `circumference of a circle is: ${circumference} cm`;
// }

// --------------------- Math = Built in object that provides a collection 
//                       of properties and methods -------------------------------------------------------------

// let x = 3.22;
// let y = 2;
// let z;

// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x,y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.cos(y);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x);
// let max = Math.max(x,y,z);
// let min = Math.min(x,y);
// console.log(z);

// Generatin random number---------------------------
// let number = 20;
// let randomNum = Math.round(Math.random()* number);
// console.log(randomNum);

// const result = Math.round(Math.random()* 10)+ 1;
// console.log(result);



// ---------------- If statements If a condition is true, execute some code 
//                  if not, do something else------------------------------

// let age = 13;

// if (age > 18){
//     console.log("your older enough to enter this site");
// }
// else {
//     console.log("you must be 18+ to enter this age")
// }

//if Statements in website-------------------------------------


// const mytext = document.getElementById("mytext");
// const mysubmit = document.getElementById("mysubmit");
// const resultElement = document.getElementById("resultElement");
// let age;

// mysubmit.onclick = function(){
//     age = mytext.value;
//     age = Number(age);
//     if (age>=100) {
//         resultElement.textContent= `Your too old to enter this site`;
//     }
//     else if (age>=18){
//         resultElement.textContent=`your old enough to enter this site`; 
//     }
//     else if (age == 0){
//         resultElement.textContent = `Your just born baby so can't enter this site`;
//     }

//     else if (age < 0){
//         resultElement.textContent =` your age cannot be in negative`;
//     }
//     else {
//         resultElement.textContent = `your age must be 18+ to enter the site`;
//     }

// }

// -------------------- Ternary operator------------------------------------------
// a shortcut to if{} statements helps to assign a variable based on a condition. \
// condition ? codeIfTrue : codeIfFalse;

// let age = 20;
// let message = age >=18 ? "your an adult" : "your still an minor";
// console.log(message); 

// let purchaseAmount = 70;
// let discount = purchaseAmount >100 ? 10 : 0;
// console.log(`your total is ${purchaseAmount - purchaseAmount*(discount/100)}`);

// -----------------------------Switch--------------------------------------------------
// can be efficient replacment to many else if statements

// let day = 7;
// switch(day){
//     case 1:
//         console.log("It's a monday");
//         break
//     case 2:
//         console.log("It's a tuesday");
//         break
//     case 3:
//         console.log("It's a wednesday");
//         break
//     case 4:
//         console.log("It's a thursday");
//         break
//     case 5:
//         console.log("It's a friday");
//         break
//     case 6:
//         console.log("It's a saturday");
//         break
//     case 7:
//         console.log("It's a sunday");
//         break
//     default:
//         console.log(`${day} it's not a day`);
// }

// ------------------- String Method = Allow you to manipulate and work with text-----------------------------------
// let username = "Vishal Bobby";
// console.log(username.charAt(6));
// console.log(username.indexOf("B"));
// console.log(username.lastIndexOf("b"));
// console.log(username.length);
// username = username.trim();
// console.log(username.trim()); //trim the white space in the beginning of the string
// console.log(username.toUpperCase());
// console.log(username.toLowerCase());
// console.log(username.repeat(2));
// console.log(username.startsWith("V"));
// console.log(username.endsWith("y"));
// console.log(username.includes(" "));
// console.log(username.replace("b", "d"));
// console.log(username.replaceAll("b", "d"));
// console.log(username.padStart(15,"0")); // it fill with 0 until the lenght of username is 15
// console.log(username.padEnd(20,"0"));

// String slicing = creating a substring from a portion of another srting ----------------------------------
// syntax: string.slice(start, end);

// let userName = "Gangapuram Vishal";
// let firstName = userName.slice(0, userName.indexOf(" "));
// let lastName = userName.slice(userName.indexOf(" "));

// console.log(`first name : ${firstName}`);
// console.log(`last name : ${lastName}`);
// -------------------- Method Chaning ----------------------------

// No Method chaininh--------------------
// let username = window.prompt("Enter username: ");
// let letter = username.charAt(0);
// letter = letter.toUpperCase();
// let extraLetter = username.slice(1);
// extraLetter = extraLetter.toLowerCase();
// console.log(letter + extraLetter);


// Method chaining-------------------------------------
// username = username.trim().charAt(0).toUpperCase + username.trim.slice(1).toLowerCase();
// console.log(username);

// ---------------------------- While Loop-----------------------------

// let username = "";
// while(username === ""){         //repeat the below code until the condition is false
//     username = window.prompt("Enter your name");
// }
// console.log(`HI ${username}`);
//-------------------- login example

// let loggedIn = false;
// let username;
// let password;

// while (!loggedIn){
//     username = window.prompt("enter your username");
//     password = window.prompt("Enter your password");

//     if (username === "MyuserName" && password === "Mypassword"){
//         loggedIn = true;
//         console.log("your logged In!");
//     }
//     else{
//         console.log("invalide username or password");
//     }
// }


//--------------------------DO Whlie loop

// let username;
// do{
//     username = window.prompt("Enter your name")
// } while(username === "" || username === null)

// console.log(`Hello ${username}`);

// --------------- For loop------------------------

// for (let i = 0; i<=20; i++){
//     if (i%2 == 0){
//         continue
//     }
//     else{
//         console.log(i);
//     }
// }
// console.log("out of loop");

// ------------------------- Function's ------------------------
// A section of reusable code 
// function add(){
//     code 

// }

// -------------------------------- Array's---------------------------------------
// A variable like structure that can hold more than 1 value

// let fruits = ["apple", "banana", "orange"]; 

// fruits.push("Mango"); //add elements to end of array
// fruits.pop(); //remove elements from the end
// fruits.unshift("mango"); // add elememts in the 1st
// fruits.shift(); // remove elements from beginning
// console.log(fruits.length);
// console.log(fruits.indexOf("mango"));
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);\
// fruits.sort();
// fruits.sort.reverse();


// // for(let i=0;i<fruits.length; i++){
// //     console.log(fruits[i]);
// // }

// for (let fruit of fruits){
//     console.log(fruit);
// }

// for (let j = fruits.length -1; j >= 0; j--){
//     console.log(fruits[j]);
// }
// ----------------------------------------- Spread Operator------------------------------------
// Allows an iterable such as an array or string to be expanded into seprate elements (unpack elements)

// let numbers = [1,2,3,4,5,6];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// console.log(minimum);

// let name = "gangapuram vishal";
// let letters = [...name].join("-");
// console.log(letters);

// let fruit = ["apple", "orange", "mango"];
// let vegitables  = ["corrot","potato", "beans"];
// console.log([...fruit,...vegitables, "cocanut","egg"]);

// ------------------------------------------- Rest parameters ----------------------------------------------------
// (...rest)allow a function work with a variable number of arguments by bundling them into an array
// spread = expands an array into seprate elements 
// rest = bundles seprate elements into an array

// function fridge(...foods){
//     return foods;
// }

// const food1 = "pizza";
// const food2 = "burger";
// const food3 = "hot dog";
// const food4 = "shusi";

// const eatble = fridge(food1,food2,food3,food4);
// console.log(eatble);

// function sum(...numbers){
//     result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result;
// }

// const total = sum(1,2,3,4,5)
// console.log(`Total of a numbers is ${total}rs`);

// function average(...numbers){
//     let sum = 0;
//     let avg;
//     for(let num of numbers){
//         sum += num;
//     }
//     avg = sum/ numbers.length;
//     return avg
// }
// const avg = average(1,2,3,4,5,6,7,8,9,10);
// console.log(avg);

//========================================== combining strings
// function combineFullName(...string){
//     return string.join(" "); 
// }

// const fullName = combineFullName("Mr.", "Gangapuram", "Vishal");
// console.log(fullName);
