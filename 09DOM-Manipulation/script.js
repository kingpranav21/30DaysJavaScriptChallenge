//Activity - 1  Selecting and Manipulating Elements

//task - 1 Select an HTML element by its ID and change its text content.
let textId = (document.getElementById("tel-id").innerHTML =
  "Hi , Myself Pranav, A backend developer");

//task - 2 Select an HTML element by its class and change its background color.
let bgColorClass = document.getElementsByClassName("bg-color");
for (let i = 0; i < bgColorClass.length; i++) {
  bgColorClass[i].style.backgroundColor = "orange";
}

//Activity - 2 Creating and Appending Elements

//task - 3 Create a new div element with some text content and append it to the body.
const newPara = document.createElement("div");
newPara.textContent = "I am learning, DOM";
document.body.appendChild(newPara);

//task - 4 Create a new li element and add it to an existing ul list.

const item = document.createElement("li");
item.textContent = "Operating System";
const ulEle = document.getElementById("ListSubjects");
ulEle.appendChild(item);

//Activity - 3 Removing Elements

//task - 5 Select an HTML element and remove it from the DOM.

const ele = document.getElementById("first");
ele.remove();

//task - 6 Remove the last child of a specific HTML element.

ulEle.removeChild(ulEle.lastChild);

//Activity - 4 Modifying Attributes and Classes

//task - 7 Select an HTML element and change one of its attributes (e.g., src of an img tag).
const imgEle = document.getElementsByTagName("img");
imgEle[0].src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9i1TE-G8g3DQKXPi1q0dacR44EU2EI7OAZjPODuHfloc6CjrqpXsdLnflhwNRQYWLxI&usqp=CAU";

//task - 8 Add and remove a CSS class to/from an HTML element.

ulEle.classList.add("myCss");

const liEle = document.getElementById("newSub");
liEle.classList.remove("newLi");

//Activity - 5 Event Handling

//task - 9 Add a click event listener to a button that changes the text content of a paragraph.
let h2Ele = document.querySelector(".newh2");
const buttonEle = document.querySelector(".buttonEl");
buttonEle.addEventListener("click", () => {
  h2Ele.textContent = "You are the Energy";
});

//task - 10 Add a mouseover event listener to an element that changes its border color.
const colorChangeEl = document.querySelector(".colorChanger");
colorChangeEl.addEventListener("mouseover", () => {
  colorChangeEl.style.borderColor = "blue";
});
