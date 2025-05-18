let display = document.querySelector('#screen')
const appendToDisplay = (value) => {
    
display.value += value
}

const clearDisplay = () => {
    display.value = ''
}
const removeLast = () => {
    display.value = display.value.slice(0, -1)
}
const calculateResult = () => {

    try {
        display.value = eval(display.value)
    } catch (error) {
        display.value = 'error'
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
  
    if (!isNaN(key) || key === '.') {
      appendToDisplay(key);
    }

    if (['+', '-', '*', '/'].includes(key)) {
      appendToDisplay(key);
    }
  
    if (key === 'Enter') {
      calculateResult();
    }
  
    if (key === 'Backspace') {
      removeLast();
    }
    if (key === 'Escape') {
      clearDisplay();
    }
  });
  
  