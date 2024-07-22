//Activity - 1 Basic Event Handling


//task - 1 Add a click event listener to a button that changes the text content of a paragraph.
const pareEle = document.getElementById("paraId");
const buttonEle = document.getElementById("buttonEl");
buttonEle.addEventListener("click", () => {
  pareEle.innerHTML = "consectetur adipiscing elita";
});

//task - 2 Add a double-click event listener to an image that toggles its visibility.
const imgEle = document.getElementById("imgEl");
imgEle.addEventListener("dblclick", () => {
  if (imgEle.style.display == "none") {
    imgEle.style.display = "block";
  } else {
    imgEle.style.display = "none";
  }
});

//Activity - 2 Mouse Events

//task - 3  Add a mouseover event listener to an element that changes its background color.
const ballEl = document.querySelector(".ball");
ballEl.addEventListener("mouseover", () => {
  ballEl.style.backgroundColor = "yellow";
});

//task - 4 Add a mouseout event listener to an element that resets its background color.
ballEl.addEventListener("mouseout", () => {
  ballEl.style.backgroundColor = "red";
});

//Activity - 3 Keyboard Events

//task - 5  Add a keydown event listener to an input field that logs the key pressed to the console.
const inputEle = document.getElementById("inputEl");
const pEle = document.getElementById("pEl");
inputEle.addEventListener("keydown", (event) => {
  console.log(`Key Pressed : ${event.key}`);
  pEle.textContent = `Key Pressed : ${event.key}`;
});

//task - 6 Add a keyup event listener to an input field that displays the current value in a paragraph.
inputEle.addEventListener("keyup", (event) => {
  const newHead = document.createElement("h3");
  newHead.textContent = `Key Value : ${event.target.value}`;
  pEle.appendChild(newHead);
});

//Activity - 4 Form Events

//task - 7 Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.getElementById("formEl");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameEle = document.getElementById("nameEl");
  const emailEle = document.getElementById("emailEl");
  console.log(`Form Data : ${nameEle.value} : ${emailEle.value}`);
});

//task - 8 Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const dropdown = document.querySelector(".options");
dropdown.addEventListener("change", (e) => {
  selected.textContent = `Selected Sweet : ${e.target.value}`;
});

//Activity - 5

//task - 9
const ulEle = document.getElementById("ulEl");
ulEle.addEventListener("click", (e) => {
  if (e.target.nodeName === "LI") {
    console.log(e.target.innerText);
  }
  //or tagName
});

//task - 10
const parent = document.getElementById("parentEle");
const addChildbtn = document.getElementById("addChild");

addChildbtn.addEventListener("click", () => {
  const child = document.createElement("p");
  child.textContent = "Child created";
  parent.appendChild(child);
});
