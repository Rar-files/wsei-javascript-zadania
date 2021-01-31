//Zadanie 1
let listElements = document.querySelectorAll(".list");

//Zadanie 2
function getTag(element){
    return element.tagName;
}
let exampleElement = document.getElementById("inputText");
let getTagResult = getTag(exampleElement);
console.log(getTagResult);

//Zadanie 3
let list = document.getElementById("list");

//Zadanie 4
function printElements(elements){
    elements.forEach(a => console.log(a));
}

printElements(document.querySelectorAll("li"));
printElements(document.querySelectorAll("ul"));
printElements(document.querySelectorAll("span"));
printElements(document.querySelectorAll("div.list span"));
printElements(document.querySelectorAll("div#spans span"));