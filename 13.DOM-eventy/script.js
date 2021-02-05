//Zadanie 1
let btn1 = document.getElementById("test-event");
btn1.addEventListener("click", () => {console.log(btn1)});

let body = document.querySelector("body");
// body.addEventListener("mousemove", () => {console.log(body)});

btn1.addEventListener("mouseover", () => {console.log(btn1)});

body.addEventListener("keypress", () => {console.log(body)});

body.addEventListener("wheel", () => {console.log(body)});

let input1 = document.getElementById("input-test");
input1.addEventListener("change", () => {console.log(input1)});


//Zadanie 2
let btn2 = document.getElementById("ex2");
btn2.addEventListener('click', () => {
    btn2.nextElementSibling.innerHTML = ex2.dataset.text;
})


//Zadanie 3
let ex3 = document.getElementById("ex3");
ex3.addEventListener("mouseover", () => {
    ex3.style.backgroundColor = "#0000ff";
})
ex3.addEventListener("mouseout", () => {
    ex3.style.backgroundColor = "#ff0000";
})


//Zadanie 4
let input4 = document.getElementById("input-test");
String.prototype.isNumber = function(){return /^\d+$/.test(this);}
input4.addEventListener("change", () => {
    if(input4.value.isNumber()){
        input4.value = '';
        input4.nextElementSibling.innerHTML = "nie można wpisywać cyfr";
    }
    else{
        input4.value == "";
    }
});


//Zadanie 5 (W html nie znajduje się ex5, daltego został dodany wraz z span)
let count = 0;
let ex5 = document.getElementById("ex5");

ex5.addEventListener("click", e => countF(e));
function countF(e){
    if(count <10){
        count++;
        ex5.nextElementSibling.innerHTML = count;
    }
    else{
        e.target.removeEventListener("click", countF);
    }
}


//Zadanie 6
let ex6 = document.querySelector("body");
ex6.addEventListener("wheel", () => {
    console.log(ex6.parentNode.scrollTop);
    if(ex6.parentNode.scrollTop>200){
        ex6.style.backgroundColor = "#ff0000";
    }
    else{
        ex6.style.backgroundColor = "#ffffff";
    }
})


//Zadanie 7
let calc = document.getElementById("calculator");
let buttons = calc.querySelectorAll('button');
let input = calc.querySelector('input');
let number = null;
let number2 = null;

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        if(this.innerText == '+'){
            input.value = number + number2;
            number = null;
            number2 = null;
        } else if (this.innerText == '-'){
            input.value = number - number2;
            number = null;
            number2 = null;
        } else if (this.innerText == '*') {
            input.value = number * number2;
            number = null;
            number2 = null;
        } else if (this.innerText == '/'){
            if(number2 == 0) input.value = "Nie można podzielić";
            else
                input.value = number / number2;
            number = null;
            number2 = null;
        } else {
            if(number === null) {
                input.value = '';
                number = Number(this.innerText);
            } else {
                number2 = Number(this.innerText);
            }
        }
    })
}
