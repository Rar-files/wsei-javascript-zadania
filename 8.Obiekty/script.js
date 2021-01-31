//Zadanie 1
let car = {
    name: "AUDI",
    age: 12,
    type: "Hatchback",
    doors: 5,
}

console.log(car);


//Zadanie 2
car.ChangeName = function changeName(a){
    this.name = a;
}
car.ChangeName("BMW");
console.log(car);


//Zadanie 3 
let sumObj = {
    sum:0,
    sumArray(arr){
        this.sum= arr.reduce((a,b)=>a+b,0)
    }
}
sumObj.sumArray([3,6,2,8,6]);
console.log(sumObj.sum);


//Zadanie 4
console.log("name: " + car.name);
console.log("age: " + car.age);
console.log("type: " + car.type);
console.log("doors: " + car.doors);


//Zadanie 5
car.obj = {
    objName: "example",
    objValue: "value"
}
console.log(car.obj);


//Zadanie 6
car.bulbColor = "Blue";
car.sayHello = function(){
    console.log("Hello");
}
car.sayHello();