const displayInput = document.getElementById('display_input');
const calculatorButtons = document.querySelectorAll('button');

let evalValue = "";
calculatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
            // console.log( evalValue);
            
            if(e.target.innerHTML === '=') {
                    evalValue = eval(evalValue);
                    displayInput.value =  evalValue;
                 
                }else if(e.target.innerHTML === "AC"){
                    displayInput.value = "";
                    evalValue = "";
                }
                else if(e.target.innerHTML === "Del"){
                    displayInput.value = evalValue.slice(0, evalValue.length - 1);
                    evalValue = displayInput.value;
                    
                }
                
                else{
                    evalValue += e.target.innerHTML;
                    displayInput.value = evalValue;
                }
                
    })
})

