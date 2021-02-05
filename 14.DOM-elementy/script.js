//Zadanie 1
var ex1=document.getElementsByClassName("more-divs");
function y(e){
  var array=[];
  for(var i=0; i<e.length; i++){
    array.push(e[i].tagName);
  }
  return array;
}
console.log(y(ex1));


//Zadanie 2
var ex2=document.querySelector('.short-list');
function example2(ex2) {
//1
    console.log(ex2.innerHTML);
//2
    console.log(ex2.outerHTML);
//3
  console.log([...ex2.classList].join(', '));
 //4
  console.log([...ex2.classList]);
//5
  console.log(ex2.dataset)
} example2(ex2);
 

//Zadanie 3
var ex3 = document.querySelector('#datasetCheck');
var array=[ex3.dataset.numberone, ex3.dataset.numbertwo, ex3.dataset.numberThree];

function show(array) {
  var add=0;
  var sub=0;

    array.forEach((e) => {
      add += parseInt(e);
      sub -= parseInt(e);
    })
    console.log(add, sub);
}
show(array);


//Zadanie 4
document.querySelector('#spanText').textContent="Jakiś tam dowolny tekst";


//Zadanie 5
document.querySelector('#spanText').classList.add('dowolna');


//Zadanie 6
var text=document.querySelector("#classes");
function f(textClass){
  var stringT="";
  textClass.forEach(i=>{
    console.log(i);
    stringT+=i+" + ";
    
  })
  console.log(stringT);
  text.classList = '';
  console.log( "Usunięto wszystkie klasy");
  console.log(text.classList);
}
f(text.classList);


//Zadanie 7
var ex7=document.querySelectorAll("#longList li");
function add(ex7){
    ex7.forEach(element =>{
    if(!element.hasAttribute('data-text')) {
            element.dataset.text = 'text';
        }
  })
  
}
add(ex7);


//Zadanie 8
var txt="tekst_z_parametru";
function first(txt){
  Object = {
    newClass: txt,
  }
  second(Object);
}
function second(){
  var objClass=Object.NewClass;
  document.querySelector('#myDiv').classList.add(objClass);
}

//Zadanie 9 
var ex9= document.querySelector('#numbers');

function changeClass(random){
  if(random%2==0){
    ex9.classList.add="even";
  }
  else{
    ex9.classList.add="odd";
  }
}
changeClass(Math.floor(Math.random()*10));
console.log(ex9);

//10
var longList = document.querySelector('#longList');

function createArray(longList) {
    var li=longList.querySelectorAll('li');
    let array = [];
    li.forEach(function(element) {
        array.push(element.innerText);
      });
 return array;
}console.log(createArray(longList));

//11
var liChildren = Array.prototype.slice.call(document.querySelector('#longList').children);

function changeChildren(liChildren) {
    liChildren.forEach(function(element) {
        var rand = Math.round(Math.random() * 10);
        element.dataset.oldValue = element.innerText;
        element.innerText = rand;
    });        
}
 changeChildren(liChildren);