let display = document.getElementById('calculator__solution');

let buttons = Array.from(document.getElementsByClassName('calculator_buttons'));

buttons.map( button => {
    button.addEventListener("click", (e) => {
        
        switch(e.target.innerText){
            case 'RESET':
                display.innerText = '';
                break;
            case 'DEL':
                if(display.innerText)
                {display.innerText = display.innerText.slice(0,-1);}
                break;
            case '=' :
                 try {
                    display.innerText = eval(display.innerText);
                 } catch{
                     display.innerText = "Error"
                 }
                break;
             default:
                display.innerText = display.innerText + e.target.innerText;
         }
    })
}
)
