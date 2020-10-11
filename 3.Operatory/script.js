//Zadanie 1
let a = true;
let b = false;
console.log(a==b);

//Zadanie 2
let c = 5;
let d = 10;
let moduloResult = 0;
moduloResult = c%d;
console.log(moduloResult)

//Zadanie 3
let txt1 = "tekst";
let txt2 = "TEKST";
let stringsResult = "";
stringsResult = txt1 + txt2;
console.log(stringsResult);

//Zadanie 4
var someNumber = 425;
var someString = "425";
console.log(someNumber == someString); //true, ponieważ 425 jest równe 425
console.log(someString === someNumber); //false, ponieważ te zmienne mają inny typ

//Zadanie 5
let counter = 30;
console.log(counter);
console.log(++counter);
console.log(--counter);

//Zadanie 6
let x = 1;
let y = 4;
let result = null;
result = x>y;

console.log(result);
/*wynik false, ponieważ do funkcji result przypisaliśmy wynik operacji
 logicznej */