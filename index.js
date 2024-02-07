const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
    try{
        let result = eval(display.value);

        if (!isNaN(result)) {
            result = parseFloat(result.toFixed(7));
            display.value = result;
        }
    }
    catch(error){
        display.value = "Error";
    }
}
