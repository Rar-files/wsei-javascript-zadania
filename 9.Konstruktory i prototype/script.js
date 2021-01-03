function Person(firstName, secondName, age, country, city, meals){
    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
    this.country = country;
    this.city = city;

    this.print = printPerson;
    this.addYear = makeItOlder;
}

function printPerson(){
    console.log(this);
}

function makeItOlder(){
    this.age += 1;
}

var person1 = new Person("Dawid", "Wiecheć", 29, "Polska", "Kraków");
var person2 = new Person("Agnieszka", "Pawluś", 27, "Polska", "Kraków");

person1.addYear();
person2.addYear();
person1.addYear();
console.log(person1);
console.log(person2);