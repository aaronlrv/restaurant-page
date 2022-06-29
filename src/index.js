import firstModule from "./firstmodule"
import contact from "./contact"
import menu from "./menu"


let menuBtn = document.querySelector(".menuButton")
let homeBtn = document.querySelector(".homeBtn")
let contactBtn = document.querySelector(".contactBtn")
let container = document.querySelector("#content")

/* lets user initially start on homepage*/
firstModule.first()


menuBtn.addEventListener("click", () => {
    console.log("Menu Button Working!")
    container.textContent = ""
    menu.generateMenu()

})

homeBtn.addEventListener("click", () => {
    console.log("Home Button Working!")
    container.textContent = ""
    firstModule.first()
})

contactBtn.addEventListener("click", () => {
    console.log("Contact Button Working!")
    container.textContent = ""
    contact.contactInfo()
})

console.log("Hello World!")


