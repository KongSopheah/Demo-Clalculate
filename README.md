# Demo Calculator

A simple calculator project built with HTML, CSS, and JavaScript.

## Features

- Addition
- Subtraction
- Multiplication
- Division
- Clear display
- Error handling

## Technologies

- HTML
- CSS
- JavaScript

## How to Use

1. Open `calculate.html` in your browser.
2. Enter numbers using the calculator buttons.
3. Choose an operation.
4. Press `=` to get the result.
5. Press `C` to clear the display.

## JavaScript Functions

```javascript
function AppendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function Total() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
```
