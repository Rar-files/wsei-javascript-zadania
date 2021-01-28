let root = document.getElementById("root");

//1
let newDiv = document.createElement("div");

newDiv.id  = "newDiv";
newDiv.innerHTML = "To jest nowy element";

root.appendChild(newDiv);

//2
let newLs = document.createElement("ul");
let lsElement = document.createElement("li");
let fruits = ["Jabłko", "Kiwi", "Banan", "Pomarańcz", "Granat", "Truskawki"];

function addFruit(fruit){
    lsElement.innerHTML = fruit;
    newLs.appendChild(lsElement.cloneNode(true));
}

fruits.forEach(fruit => addFruit(fruit));
root.appendChild(newLs);

//3
for(i=newLs.childElementCount;i>-1; i--){
    if(i%2==1)
        newLs.removeChild(newLs.children[i])
}

//4
let newButton = document.createElement("button");
newButton.innerHTML = "click me";
root.appendChild(newButton);

newButton.addEventListener("click", function() {newButton.remove()});

//5
let countDiv = document.createElement('div');
let rnd = getRandomInt(1,20);

function addCountDiv(count){
    countDiv.innerHTML = "to jest div numer " + count;
    root.appendChild(countDiv.cloneNode(true));
}

for(i = 1; i<= rnd; i++)
    addCountDiv(i);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

//6
let htmlStruct = document.createElement("div");

function createDiv(id){
    let buforDiv = document.createElement('div');
    buforDiv.innerHTML = "to jest div";
    buforDiv.id = id;
    return buforDiv;
}
function createSpan(id){
    let buforSpan = document.createElement('div');
    buforSpan.innerHTML = "to jest span"
    buforSpan.id = id;
    return buforSpan;
}

htmlStruct.appendChild(createDiv("div1"));
htmlStruct.appendChild(createSpan("span1"));
let bufor = createDiv("div2");
htmlStruct.appendChild(bufor.appendChild(createDiv("div3")));
htmlStruct.appendChild(createSpan("span2"));

root.appendChild(htmlStruct);