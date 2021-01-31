//Zadanie 1
let tab = [1,'dwa',3,'cztery', 5];
tab.forEach(a => console.log(a));
console.log();
console.log();


//Zadanie 2
const arr = ["foo", "bbb", 2, 17, "str", 12];

//1
console.log(arr[0]);
console.log(arr[1]);
console.log();

//2
console.log(arr[arr.length - 1]);
console.log();

//3
arr.forEach(a => console.log(a));
console.log();

//4
arr.forEach((a, i) => {
    if (i % 2 == 0) console.log(a);
})
console.log();

//5
arr.forEach(a => {
    if (typeof a === "string") console.log(a);
})
console.log();

//6
arr.forEach(a => {
    if (typeof a === "number") console.log(a);
})
console.log();
console.log();


//Zadanie 3
let tab = [1,2,3,4,5,6];

//1
function sumTab(tab){
    let sum =0;
    tab.forEach(a => sum=sum+a);
    return sum;
}
console.log(sumTab(tab));
console.log();

//2
function diffTab(tab){
    let diff =0;
    tab.forEach(a => diff=diff-a);
    return diff;
}
console.log(diffTab(tab));
console.log();

//3
function avgTab(tab)
{
    return sumTab(tab)/tab.length;
}
console.log(avgTab(tab));
console.log();

//4
function printEvenNumbers(tab){
    for(i = 0; i<tab.length; i++)
        if(tab[i]%2==0)
            console.log(tab[i]);
}
printEvenNumbers(tab);
console.log();

//5
function printOddNumbers(tab){
    for(i = 0; i<tab.length; i++)
        if(tab[i]%2==1)
            console.log(tab[i]);
}
printOddNumbers(tab);
console.log();

//6
function max(tab){
    let max =tab[0];
    function ifMax(value){
        if(max<value)
            max = value
    }
    tab.forEach(a => ifMax(a));
    console.log(max);
}
max(tab);
console.log();

//7
function min(tab){
    let min =tab[0];
    function ifMin(value){
        if(min>value)
            min = value
    }
    tab.forEach(a => ifMin(a));
    console.log(min);
}
min(tab);
console.log();

//8
function invertedTab(tab){
    for(i = tab.length-1;i>-1; i--)
        console.log(tab[i]);
}
invertedTab(tab);
console.log();


//Zadanie 4
let tab4 = [4,3,7,9,3,4];

function sumTabElements(tab){
    bufor =0;
    tab.forEach(number => {bufor += number});
    return bufor;
}

console.log(sumTabElements(tab4));


//Zadanie 5
let tab5 = [4,3,5,2,3,4];

function func5(tab){
    avg = tab.reduce((a, b) => a + b , 0) / tab.length;
    tab.forEach(number => {console.log(number*avg)});
}

func5(tab5);


//Zadanie 6
function func6(array) {

    var arr = array.filter(a=> a % 2 == 0);
    var result = arr.reduce((a, b) => a + b , 0) / arr.length;

    console.log(result);
}

func6([1,2,3,4,5,6,7,8,9,10])


//Zadanie 7
function sortTab(arr) {
    console.log(arr.sort((a, b) => a- b));
}

sortTab([5, 3, 1, 55, 33, 11]);


//Zadanie 8
function func8(arr1, arr2) {
    for(i=0; i<arr1.length; i++)
        arr1[i] = arr1[i] + arr2[i];
    return arr1;
}

console.log(func8([5, 3, 1, 55, 33, 11], [4,3,7,9,3,4]));


//Zadanie 9
function func9(arr, delateValue){
    let newArr = [];
    arr.forEach(a => {if(a!=delateValue) newArr.push(a)})
    return newArr;
}

console.log(func9([5, 33, 1, 6, 33, 2], 33));


//Zadanie 10
function func10(arr){
    for(i = 0; i<arr.length; i++)
        arr[i] = arr[i]*-1
    return arr;
}

console.log(func10([5, 33, 1, 6, 33, 2]));