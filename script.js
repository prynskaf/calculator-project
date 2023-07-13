// Get the display element from the DOM
const display = document.querySelector("#display");
// Get all the buttons from the DOM
const buttons = document.querySelectorAll("button");

// Iterate over each button
buttons.forEach((item) => {
  // Set the onclick event handler for each button
  item.onclick = () => {
    // Clear the display if the "clear" button is clicked
    if (item.id == "clear") {
      display.innerText = "";
    }
    // Remove the last character from the display if the "backspace" button is clicked
    else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    }
    // Evaluate the expression in the display if the "equal" button is clicked
    else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    }
    // Show "Empty!" in the display if it is empty and the "equal" button is clicked
    else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    }
    // Append the click   button's id to the display
    else {
      display.innerText += item.id;
    }
  };
});

// Get the theme toggle button, calculator element, and toggle icon from the DOM
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;

// Set the onclick event handler for the theme toggle button
themeToggleBtn.onclick = () => {
  // Toggle the "dark" class on the calculator element
  calculator.classList.toggle("dark");
  // Toggle the "active" class on the theme toggle button
  themeToggleBtn.classList.toggle("active");
  // Invert the value of isDark
  isDark = !isDark;
};
