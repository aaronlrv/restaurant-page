import firstModule from "./firstmodule"
import contact from "./contact"
import menu from "./menu"


let menuBtn = document.querySelector(".menuButton")
let homeBtn = document.querySelector(".homeBtn")
let contactBtn = document.querySelector(".contactBtn")

menuBtn.addEventListener("click", () => {
    console.log("Menu Button Working!")

})

homeBtn.addEventListener("click", () => {
    console.log("Home Button Working!")
})

contactBtn.addEventListener("click", () => {
    console.log("Contact Button Working!")
})

console.log("Hello World!")


