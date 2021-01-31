function Person(firstName, secondName, age, country, city){
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
    this.country = country;
    this.city = city;

    this.printPerson = _printPerson;
    this.addYear = _addYear;
}

function _printPerson(){
    console.log(
        this.firstName + " " +
        this.secondName + " " +
        this.age + " " +
        this.country + " " +
        this.city
    );
}

function _addYear(){
    this.age += 1;
}

var person = new Person("Dominik", "Widlak", 21, "Polska", "Myślenice");
var person2 = new Person("Adam", "Nowak", 36, "Polska", "Warszawa");

person.printPerson();
person2.printPerson();
person.addYear();
person.printPerson();
person2.addYear();
person2.addYear();
person2.printPerson();


//Zadanie 2
person.favoriteMeals = [];
person2.favoriteMeals = [];
person.printMeals = function() {console.log(this.favoriteMeals);}
person2.printMeals = function() {console.log(this.favoriteMeals);}
person.addMeal = function(meal) {this.favoriteMeals.push(meal);}
person2.addMeal = function(meal) {this.favoriteMeals.push(meal);}

person.addMeal("Schabowy");
person.addMeal("Hamburger");
person.addMeal("Kebab");
person2.addMeal("Sushi");
person2.addMeal("Kimchi");
person.printMeals();
person2.printMeals();

//Zadanie 3
function Calc(){
    this.a = 0;
    this.b = 0;

    this.setAB = _setAB;
    this.division = _division;
    this.multiplication = _multiplication;
    this.addition = _addition;
    this.subtraction = _subtraction;
}

function _setAB(a,b){
    this.a = a;
    this.b = b;
}

function _division(){
    if(this.b==0) throw "b nie może być zerem";
    else
    console.log(this.a/this.b);
}

function _multiplication(){
    console.log(this.a*this.b);
}

function _addition(){
    console.log(this.a+this.b);
}

function _subtraction(){
    console.log(this.a-this.b);
}

var newCalc = new Calc();
newCalc.setAB(4,5);
newCalc.division();
newCalc.multiplication();
newCalc.addition();
newCalc.subtraction();
newCalc.setAB(4,0);
newCalc.division();

//Zadanie 4
let sym = {
    laderSteps: 0,
    courentStep: 0,
    setLaderSteps: function(steps){
        this.laderSteps = steps;
    }
}

sym.up = function _up(){
    if(this.laderSteps<=this.courentStep) console.log("Jesteś już na górze, nie możesz wejść wyżej");
    else{
        this.courentStep++;
        console.log("Wchodzisz szczebel wyżej");
        if(this.laderSteps<=this.courentStep) console.log("Wszedłeś na góre.");
    }
}

sym.down = function _down(){
    if(1>this.courentStep) console.log("Jesteś już na dole, nie możesz zejść niżej");
    else{
        this.courentStep--;
        console.log("Schodzisz szczebel niżej");
        if(1>this.courentStep) console.log("Zszedłeś na dół.");
    }
}

sym.setLaderSteps(2);
sym.up();
sym.up();
sym.up();
sym.down();
sym.down();
sym.down();