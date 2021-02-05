function Person(firstName, secondName, age, country, city, launguage){
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.launguage = launguage;

    this.changeCity = _changeCity;
    this.changeAge = _changeAge;
}

function _changeCity(_city){
    this.city = _city;
}

function _changeAge(_age){
    this.age = _age;
}

var person1 = new Person("Dominik", "Widlak", 21, "Polska", "Myślenice", "Polski");
var person2 = new Person("Ewelina", "Kowalska", 27, "Polska", "Kraków", "Polski");
var person3 = new Person("Dimitry", "Glugotry", 29, "Sosnowiec", "Sosnowiec", "Ukraiński");
var person4 = new Person("J.K.", "Rowling", 29, "Anglia", "Londyn", "Angielski");
var person5 = new Person("Bob", "Smith", 43, "USA", "Chicago", "Angielski");

person1.changeAge(54);
person2.changeAge(6);
person1.changeAge(18);
person3.changeCity("Wrocław");
person5.changeCity("Los Angeles");
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);


//Zadanie 2
function Calc(){
    this.operation = [];

    this.division = _division;
    this.multiplication = _multiplication;
    this.addition = _addition;
    this.subtraction = _subtraction;

    this.printMemory = _printMemory;
    this.clearMemory = _clearMemory;
}

function _division(a, b){
    buffor = a/b;
    result = (a+"/"+b+"="+buffor);
    this.operation.push(result);
    console.log(result);
}

function _multiplication(a,b){
    buffor = a*b;
    result = (a+"*"+b+"="+buffor);
    this.operation.push(result);
    console.log(result);
}

function _addition(a,b){
    buffor = a+b;
    result = (a+"+"+b+"="+buffor);
    this.operation.push(result);
    console.log(result);
}

function _subtraction(a,b){
    buffor = a-b;
    result = (a+"-"+b+"="+buffor);
    this.operation.push(result);
    console.log(result);
}

function _printMemory(){
    console.log("Memory:")
    this.operation.forEach(a => {console.log(a)});
}

function _clearMemory(){
    this.operation = [];
    console.log("Memory cleared.")
}

var Calc1 = new Calc();
var Calc2 = new Calc();

Calc1.addition(2,3);
Calc1.subtraction(3,2);
Calc2.addition(2,2);
Calc2.addition(3,4);

Calc1.printMemory();
Calc2.printMemory();
Calc2.clearMemory();
Calc2.printMemory();

//Zadanie 3
function Game(){
    this.number = 0;
    this.randomNumber = function(){
        this.number = Math.floor(Math.random() * 10) + 1;
        this.rnd();
    }
    this.rnd = function(){
        if(this.number>5){
            clearInterval(time);
            console.log("Program sie zakończył");
        }
    }
    
}

let game1 = new Game();
var time= setInterval(()=>game1.randomNumber(),1000);