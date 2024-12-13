
const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    if (b === 0) {
        return 'Syntax Error';
    } 
    return a / b;
}

const modulus = (a, b) => {
    return a % b;
}

const operate = (a, b, operator) => {
    if(operator === '+') {
        return add(a, b);

    }   else if(operator === '-') {
        return subtract(a, b);
        }

        else if (operator === '*') {
        return multiply(a, b);
            } 

        else if(operator === '/') {
        return divide(a, b);      
    }
        else if(operator === '%') {
        return modulus(a, b);
        }
    
}
// Define The Value Of Buttons
document.getElementById('pad').addEventListener('click', (event) => {
    console.log(event.target.textContent);
      let currentValue = event.target.getAttribute('data-value');
      
//append input to display
 if (currentValue){
document.getElementById('display').value += currentValue;
   }

 //clear button
   else if(event.target.id === 'clear-btn') {
    document.getElementById('display').value = '';  
   }


//equal button
    else if(event.target.id === 'equal-btn') {
   let input = document.getElementById('display').value;
   let operator = input.match(/[+\-*/%]/)     //find any of these operators
   if (operator) {
    let operands = input.split(operator[0]);

    let a = parseFloat(operands[0].trim()); //splits operands and operators in order for each operand to be treated individually 
    let b = parseFloat(operands[1].trim())

    document.getElementById('display').value = operate(a, b, operator[0]);  // Call the operate function with the operands and operator
   }
}

//delete button
   else if(event.target.id === 'delete-btn') {
   let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
    
   }
   


})

