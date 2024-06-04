const displayScreen = document.getElementById("screen");

function appendToDisplay(input) {
    displayScreen.value += input;
}

function clearDisplay() {
    displayScreen.value = "";
}

function calculate() {
    try {
    displayScreen.value = eval(displayScreen.value);
    }
    catch(error) {
        displayScreen.value = "error";
    }
}

function squared() {
    try {
        displayScreen.value = Math.pow(eval(displayScreen.value), 2)    
    }
    catch(error) {
        displayScreen.value = "error";
    }
}

function cubed() {
    try {
        displayScreen.value = Math.pow(eval(displayScreen.value), 3)
    }
    catch(error) {
        displayScreen.value = "error";
    }
}

function root() {
    try {
        displayScreen.value = Math.sqrt(eval(displayScreen.value));
    }
    catch(error) {
        displayScreen.value = "error";
    }
}
