const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    alert('Ekspresi tidak valid');
  }
}

function sqrt() {
  if (display.value) {
    display.value = Math.sqrt(parseFloat(display.value));
  }
}

function power() {
  if (display.value) {
    display.value += '**';
  }
}
