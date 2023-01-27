//In Javascript, we can declare a variable in 3 ways
//1. by using var
//2. by using let
//3. by using const

//var is global scope where let and cnst are block scope
//in var we can redeclare and reassign the variable
// var myName = "John";
// console.log(myName);
// myName ="Alex";
// console.log(myName);
// var myName="Taylor";
// console.log(myName);


// const myName = "john";
// console.log(myName);
//myName = "Alex" //this will give error because it is creating a new string alex then it is trying to assign new name to alex

//how to modify
//in const it is not possible to redeclare and reassign variable again
// const myName = [];
// console.log(myName);
// myName.push("John")
// console.log(myName);


//in let we can reassign a  variable but we cannot redeclare the variable
// let myName ="John";
// console.log(myName);
// myName ="Alex";
// console.log(myName);


//ReferenceError: num is not defined
// function addTwoNumbe(num1, num2) {
//     var num =5;
//     return num1 + num2;
// }
// console.log(num);

//global scope
// {
//     var num=5;
// }
// console.log(num);

//String Interpolation
// let firstName = "koushal";
// let lastName = "sharma"; 

// //console.log(firstName+ " "+lastName);
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

//Defaut Params
// function addTwoNumber(num1, num2) {
//     return num1+num2;
// }
// console.log(addTwoNumber(1,2));

// let addTwoNumber =(num1, num2) => {
//     return num1+num2;
// };
// console.log(addTwoNumber(1,2));

// let addTwoNumber = (num1, num2=5) => {
//     console.log(num1);
//     console.log(num2);
//     return num1 + num2;
// }
// //console.log(addTwoNumber(1,2));
// console.log(addTwoNumber(1,10));

//rest and spread operator are applicable in arrays and object in js
// let array = [5, 10, 15, 20, 25];
// let newArray = [...array,30 , 35, 40];
// console.log(newArray);
//Spread Operator -> ...
// console.log(array);
// console.log(...array);
//rest operator -> ...
// let maxOfNumbers = (...numbers) => {
//     let maximum = Number.MIN_VALUE;
//     for(let number of  numbers) {
//         maximum = Math.max(maximum,number);
//     }
//     return maximum;
// };
//console.log(maxOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9));
//let maxOfTwoNumbers = (num1, num2) => Math.max(num1, num2);
//let maxOfThreeNumbers = (num1, num2, num3) => Math.max(num1, num2, num3);

//For Object
let object = {
    name: "John",
    age: 24,
    address: {
    city: "New York",
    state: "NY",
    country: "USA",
    },

};
// let object2 = {...object, country:"USA", favoritesong: "Numb by linkin Park"};
// let object2 ={...object};
let object2 = JSON.parse(JSON.stringify(object));
object2.address.city = "Newark";
console.log(object);
console.log(object2);

