let display = document.getElementById("display");

function toDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = error;
  }
}

function deleteNum() {
  display.value = display.value.slice(0, -1);
}