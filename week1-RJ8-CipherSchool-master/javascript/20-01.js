//1. .map()
// let array = [1,2,3,4,5];
// let newArray = [];
// for (let i=0; i<array.length; i++) {
//     newArray[i] = array[i]*array[i];
// }
// console.log(newArray);

// let array = [5, 10, 15, 20];
// function functionForMap(element) {
//     return element * element;
// }
// let newArray = array.map(functionForMap);
// console.log(newArray);
//In js a function is also a js object

// let addTwoNumbers = (a,b) => a+b;
// let num1 = 4;
// let num2 = 5;
// addTwoNumbers(num1, num2);
// console.log(addTwoNumbers);

// let arr= [5, 10, 15, 20];
// let newArr = arr.map((element, index) =>{
//     console.log(index);
//     return element * element;
// });
// console.log(newArr);

//foreach()
// let array = [1,2,3,4,5];
// array.forEach((element , index) => {
//     console.log(element);
// });

// let arr = [1,2,3,4,5];
// array.forEach((element, index) => {
//     element *= element;
//     console.log(element);
// });
// console.log("Array is: ",array);

//filter
// let array = [10, 20, 30, 40, 50];
// let newArray = array.filter((element) => {
//    return element >=30;
// })
// console.log(newArray);

// int[] new array = array.stream().filter(element => {
//     return element >= 30;
// }).toArray(int[]::new);

// vector<int> v;
// for(int i = 0; i<sizeof(array)/sizeof(array[0]); i++) {
//     if(array[i] >=30){
//         v.push_back(array[i]);
//     }
// }

// List<Integer> list = new ArrayList<>();
// for(int i=0; i<array.length; i++) {
//     if(array[i] >= 30) {
//         list.add(array[i]);
//     }
// }

// let array = [10, 20, 30, 40, 50];
// let temp = Array.find((value) => {
//     return value > 20;
// });
// console.log(temp);

//.sort
// let array = [10, 50, 40, 30, 20];
// let sortedArray = array.sort();
// console.log(sortedArray);

// let array = [10, 50, 111, 30, 20];
// let sortedArray = array.sort((el1, el2)=> {
//     el1 = Number(el1);
//     el2 = Number(el2);
//     return el1 - el2;
// });
// console.log(sortedArray);

//object destructuring
// let myObject = {
//     name: "Alex",
//     age:24,
//     address: {
//         street:"Brooklyn",
//         city: "New York",
//         state: "NY",
//         passportDetails: {
//             passportNumber: "ABCD1234",
//         },
//     },
// };
// console.log(details.address.passportDetails.passportNumber);
// let passportNumber = details.address.passportDetails.passportNumber;
// console.log(passportNumber);


// let myName = details.name;
// let age = details.age;

// let{name: myName, age} = details;
// console.log(myName, age);

// let {
//     address: {
//         country,
//         passportDetails: {passportNumber},
//     },
// } = details;
// console.log(country, passportNumber);
// if(array1 == array2);

// let obj1 = {name: "Shantanu", age:24};
// let obj2 = {name : "Shantanu"};
// function areEqual(obj1, obj2) {
//     if(obj1 == obj2) {
//         return true;
//     }
//     if(Object.keys(obj1).length != Object.keys(obj2).length){
//         return false;
//     }
//     for(let  key of Object.keys(obj1)) {
//         if(typeof obj2[key] == "undefined") {
//             return false;
//         }
//         if(obj2[key] == obj1[key]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(areEqual(obj1, obj2));


//Map and set
// let map = new Map();
// map.set(1, "Shantanu");
// map.set(2, "Alex");
// console.log(map);
// map.values()

// let set = new Set();
// set.add(1);
// set.add(-1);
// set.has()
// console.log(set);

// class Animal {
//    noOfLegs;
//    color;
//    family;
//    sound;
//    constructor(noOfLegs, color, family, sound){
//     this.noOfLegs = noOfLegs;
//     this.color = color;
//     this.family = family;
//     this.sound = sound;
//    }
//    showAnimal(){
//     console.log(`The animal belongs to family ${this.family}`)
//    }
// }

// let animal = new Animal (4, "brown", "roden", "something");
// console.log(animal);
// animal.showAnimal();

