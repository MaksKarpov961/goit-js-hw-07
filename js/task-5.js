function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonChange = document.querySelector(".change-color")
const output = document.querySelector(".color")
const bodyColor = document.querySelector("body")


buttonChange.addEventListener("click", buttonChangeClick)


function buttonChangeClick(event) {
  output.textContent = getRandomHexColor()
  bodyColor.style.backgroundColor = getRandomHexColor()
  
}