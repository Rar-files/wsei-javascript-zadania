let calc = document.getElementById("calculator");
let buttons = calc.querySelectorAll('button');
let input = calc.querySelector('input');
let number = null;
let number2 = null;


for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        if(this.innerText === '+'){
            input.value = number + number2;
            number = null;
            number2 = null;
        } else if (this.innerText === '-'){
            
        } else if (this.innerText === '*') {
            
        } else if (this.innerText === '/'){
            
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
