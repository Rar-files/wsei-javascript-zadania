//Zadanie 1
console.log(document.getElementById("buz").parentNode);
console.log(document.getElementById("baz").previousElementSibling);
console.log(document.getElementById("foo").children);
console.log(document.getElementById("foo").parentNode);
console.log(document.getElementById("foo").children[0]);
console.log(document.getElementById("foo").children[1]);


//Zadadnie 2
let ex2 = document.getElementById("ex2");
ex2.addEventListener("click", () => {console.log(ex2.children[0].children[0].children[0].children[1].children[0].children[0].innerHTML)});


//Zadanie 3
var ex3Buttons = document.querySelectorAll("#ex3 button");

function hideSpan(element){
    let span = element.parentNode.children[1];
    element.addEventListener("click", () => {changeDisplay(span)});
}

function changeDisplay(element){
    if(element.style.display == "block"){
        element.style.display = "none";
    }
    else{
        element.style.display = "block"
    }
}
ex3Buttons.forEach(element => {hideSpan(element)});


//Zadanie 4
function changeColor(element){
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    element.parentNode.parentNode.style.backgroundColor = randomColor;
}
console.log(ex3Buttons.parentNode);
ex3Buttons.forEach(element => {element.addEventListener("click", () => {changeColor(element)})});


//Zadanie 5 (Podpunkty zadania do odkomentowania)
// /*1.*/let toChange = document.querySelector("#ex5 ul").children[0];
// /*2.*/let toChange = document.querySelector("#ex5 ul").children[10];
/*3. i 4.*/let toChange = document.querySelectorAll("#ex5 ul li");
// /*5.*/let toChange = document.querySelector("#ex5 ul");

let rectangles = document.querySelectorAll("#ex5 div");

function changer(color){
    if(NodeList.prototype.isPrototypeOf(toChange)){
        toChange.forEach(element => {
            // if(element%2==0)  /*<- do odkomentowania w przypadku podpunktu 3.*/
                element.style.backgroundColor = color;});
    }
    else{
        toChange.style.backgroundColor = color;
    }
}

rectangles.forEach(element => element.addEventListener("mouseover",() => {changer(element.style.backgroundColor)}));

//Zadanie 6
let startPoint = document.getElementById("ex6");

let p1 = startPoint.children[0].children[0].children[0];
let p2 = startPoint.children[0].parentNode.children[0].children[0].nextElementSibling.parentElement;
let p3 = startPoint.parentNode.children[0].parentNode.children[1].children[0].children[0].children[0];