const obrazovka = document.getElementById("screen");

function appendToDisplay(input) {
    obrazovka.value += input;
}

function clearDisplay() {
    obrazovka.value = "";
}

function calculate() {
    try {
    obrazovka.value = eval(obrazovka.value);
    }
    catch(error) {
        obrazovka.value = "error";
    }
}