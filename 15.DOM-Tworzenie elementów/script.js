let root = document.getElementById("root");

//Zadanie 1
let newDiv = document.createElement("div");

newDiv.id  = "newDiv";
newDiv.innerHTML = "To jest nowy element";

root.appendChild(newDiv);


//Zadanie 2
let newLs = document.createElement("ul");
let lsElement = document.createElement("li");
let fruits = ["Jabłko", "Kiwi", "Banan", "Pomarańcz", "Granat", "Truskawki"];

function addFruit(fruit){
    lsElement.innerHTML = fruit;
    newLs.appendChild(lsElement.cloneNode(true));
}

fruits.forEach(fruit => addFruit(fruit));
root.appendChild(newLs);


//Zadanie 3
for(i=newLs.childElementCount;i>-1; i--){
    if(i%2==1)
        newLs.removeChild(newLs.children[i])
}

//Zadanie 4
let newButton = document.createElement("button");
newButton.innerHTML = "click me";
root.appendChild(newButton);

newButton.addEventListener("click", function() {newButton.remove()});


//Zadanie 5
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


//Zadanie 6
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
let div2 = createDiv("div2");
div2.appendChild(div2.appendChild(createDiv("div3")));
htmlStruct.appendChild(div2);
htmlStruct.appendChild(createSpan("span2"));

console.log(htmlStruct);


//Zadanie 7
let list1 = document.createElement('ul');
list1.id = "list1";

let li1 = document.createElement('li');
li1.innerText = 'li 1';
let li2 = document.createElement('li');
li2.innerText = 'li 2';
let li3 = document.createElement('li');
li3.innerText = 'li 3';
let li4 = document.createElement('li');
li4.innerText = 'li 4';
let li5 = document.createElement('li');
li5.innerText = 'li 5';
let li6 = document.createElement('li');
li6.innerText = 'li 6';

list1.appendChild(li1);
list1.appendChild(li2);
list1.appendChild(li3);
list1.appendChild(li4);
list1.appendChild(li5);
list1.appendChild(li6);

let list2=document.createElement('ul');
list2.id="list2";

root.appendChild(list1);
root.appendChild(list2);


let button1=document.createElement('button');
button1.id="button1";
button1.innerHTML="click 1";

let button2=document.createElement('button');
button2.id="button2";
button2.innerHTML="click 2";

root.appendChild(button1);
root.appendChild(button2);

button1.addEventListener('click', function(){
   let list1 = document.querySelector('#list1');
   let list2 = document.querySelector('#list2');
   let button1 = document.querySelector('#button1');
   let button2 = document.querySelector('#button2');
  
    if(list1.children.length>0){
      let element=list1.lastChild;
      list2.appendChild(element);
      button2.disabled = false;
    }
    else{
     button1.disabled = true;
     
    }
});

button2.addEventListener('click', function(){
   let list1 = document.querySelector('#list1');
   let list2 = document.querySelector('#list2');
  let button2 = document.querySelector('#button2');
  
  if(list2.children.length>0){
    let element=list2.lastChild;
    list1.appendChild(element);
    button1.disabled = false;
  }
  else{
    button2.disabled = true;
  }
});


//Zadanie 8
let form = document.createElement('form');

let element = document.createElement('input');
element.placeholder = "Submit element";

let text = document.createElement('input');
text.placeholder = "Submit text";

let color = document.createElement('input');
color.placeholder = "Submit color";

let amount = document.createElement('input');
amount.placeholder = "Submit amount";

let submit = document.createElement('button');
submit.innerText = "Sumbit";
submit.type = "submit";

let endDiv = document.createElement('div');

submit.addEventListener('click', function(e) {
  e.preventDefault();
  for (let i = 0; i < parseInt(amount.value); i++) {
      let create = document.createElement(`${element.value}`);
      create.style.color = `${color.value}`;
      create.innerText = text.value;
      root.appendChild(create);
    }
});

form.appendChild(element);
form.appendChild(color);
form.appendChild(text);
form.appendChild(amount);
form.appendChild(submit);

root.appendChild(form);
root.appendChild(endDiv);


//Zadanie 9
var result = document.createElement('div');
root.appendChild(result);

var firstname = field('div', 'Imię');
var firstnameInput = input(firstname);
var surname = field('div', 'Nazwisko');
var surnameInput = input(surname);
var age = field('div', 'Wiek');
var ageInput = input(age);
var children = field('div', 'Ilość dzieci');
var childrenInput = input(children);
var more = field('button', 'Więcej');
var tButton = field('button', 'Utwórz');

function field(e, v) {
  var nameDiv = document.createElement(e);
  nameDiv.textContent = v;
  result.appendChild(nameDiv);
  return nameDiv;
}

function input(e) {
  var input = document.createElement('input');
  input.type = "text";
  e.appendChild(input);
  return input;
}

function clear() {
  firstnameInput.value = '';
  surnameInput.value = '';
  ageInput.value = '';
  childrenInput.value = '';
}

function td(i, tr) {
  var name = document.createElement('td');
  name.textContent = i.value;
  tr.appendChild(name);
  return name;
}

function dButton(tr) {
  var dTd = document.createElement('td');
  var dB = document.createElement('button');
  dB.textContent = 'Usuń';
  dTd.appendChild(dB);
  tr.appendChild(dTd);
  return dB;
}

more.addEventListener('click', function() {
  var table = document.getElementsByTagName('table')[0]; 
  if(table !== undefined) {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    td(firstnameInput, tr);
    td(surnameInput, tr);
    td(ageInput, tr);
    td(childrenInput, tr);
    var dB = dButton(tr);
    dB.addEventListener('click', () => {
        table.removeChild(tr); 
    });
    clear();
  } 
});

function th(div, tr) {
  var name = document.createElement('th');
  name.textContent = div.textContent;
  tr.appendChild(name);
  return name;
}

tButton.addEventListener('click', function() {
  var table = document.createElement('table');
  table.style.border = '1px solid black';
  result.appendChild(table);
  var header = document.createElement('tr');
  table.appendChild(header);
  th(firstname, header);
  th(surname, header);
  th(age, header);
  th(children, header);
  var dTh = document.createElement('th');
  dTh.textContent = 'Usuń';
  header.appendChild(dTh);
  var first = document.createElement('tr');
  table.appendChild(first);
  td(firstnameInput, first);
  td(surnameInput, first);
  td(ageInput, first);
  td(childrenInput, first);
  var dB = dButton(first);
  dB.addEventListener('click', () => { table.removeChild(first); });
   clear();
});


//Zadanie 10
validation(firstnameInput, surnameInput, ageInput, childrenInput);
function validation(f, s, a, c) {
  var validator1 = /[a-zA-Z]+/g;
  var validator2 = /\d{1,3}/g;
  f.addEventListener('change', function() {
    if(validator1.test(f.value)) f.value = f.value.substring(0, 1).toUpperCase() + f.value.substring(1);
    else console.log('Podano błędne dane!');
  });

  s.addEventListener('change', function() {
    if(validator1.test(s.value)) s.value = s.value.substring(0, 1).toUpperCase() + s.value.substring(1);
    else console.log('Podano błędne dane!');
  });

  a.addEventListener('change', function() {
    if(!validator2.test(a.value)) console.log('Podano błędne dane!');
  });

  c.addEventListener('change', function() {
    if(!validator2.test(c.value)) console.log('Podano błędne dane!');
  });
}


//Zadanie 11
function check(string){
  var regex=/\d+/g;
  var matches=string.match(regex);
  var sum=0;
  var multiplication=1;
  
  for(var i=0;i<matches.length;i++){
    sum+=parseInt(matches[i],10);
    multiplication*=parseInt(matches[i],10);
  }
  console.log("suma wynosi "+sum);

  for(var j=1;j<=multiplication;j++){
     var div= document.createElement('div');
    div.textContent=j+". "+string;
    root.appendChild(div);
  }
  
}
check("2we3f3");


//Zadanie 12
function checkIfAla(string){
  var object={};
  object.text=string;
  object.find=function(){
    
    if(this.text.indexOf('Ala')>-1){
       this.text.replace("Ala","Ola");
       }
    else{
      let divAla=document.createElement('div');
      divAla.innerHTML="Słowo Ala nie występuje w tekście.";
      root.appendChild(divAla);
    }
  }
  object.find();
}
checkIfAla("Ala ma kota");
checkIfAla("Ja mam kota");


//Zadanie 13
var x=["ala","ma","kota"];

function function1(x){
  var array=[];
  for(var i=0;i<x.length;i++){
    array[i]=x[i].length;
  }
 return array;
}

var result1=function1(x);

function function2(result1){
  var sum=0;
  for(var i=0;i<result1.length;i++){
    sum+=result1[i];
  }
  return sum;
}
var result2=function2(result1);

function function3(result1,result2){
  return result2/result1.length;
}
console.log(function3(result1,result2));


//Zadanie 14
let object14 = {name: '', surname: '', age: ''};
var button;
function set(object){
  object.name="Dominik";
  object.surname="Jan";
  object.age='21';
  
  object.nameLength=object.name.length;
  object.surnameLength=object.surname.length;
  object.ageLength=object.age.length;
  
  if(object.nameLength>5 || object.surnameLength>5 || object.ageLength){
    button=document.createElement('button');
    button.innerHTML="CLEAR";
    root.appendChild(button);
  }
}
set(object14);
console.log(object14);
  if(document.querySelector('button')){
    button.addEventListener('click',function(){
      object14 = {name: '', surname: '', age: ''};
      console.log(object14);
  });
}