
"use strict";
// const a = 5;
// console.log(a);


// function myFunc(a = "Hello"){
//     return a;
// }
// console.log(myFunc("Hello1"));

// function myClass(a=10,b=20){
//         return a+b;
// }

// class myClass{
//    constructor(a=10,b=20){
//        return a+b;
//    }

// }
// https://www.w3schools.com/js/js_object_prototypes.asp
// const infoObj = new myClass();

// console.log(infoObj);


// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//   }

//   Person.prototype.language = "Azerbaijan";
  
//   const myFather = new Person("John", "Doe", 50, "blue");
//   const myMother = new Person("Sally", "Rally", 48, "green");

//   console.log(myFather.eyeColor);


// https://www.w3schools.com/js/js_api_fetch.asp


class Car{
    constructor(brand,model){
        this.myBrand = brand;
        this.myModel = model;
    }

    myWay(name){
        return `${name} drive ` //+this.myBrand;
    }
}

class Pet extends Car{
    
    myPet(animal){
        return `I' have ${animal}`
    }
}
const newPet = new Pet();
const myCar = new Car("BMW","x5");

console.log(myCar.myWay("Nadir"));
console.log(newPet.myPet("Aslan"));
console.log(newPet.myWay("Reshad"));







