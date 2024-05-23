import {SectionInBody} from "./scripts/SectionInBody.js";

const exerciseFixedBox =document.getElementById("exercise_fixed_box")

const exerciseFixedButton = document.getElementById("exercise_fixed_button")
exerciseFixedButton.addEventListener("click", ()=> {
    exerciseFixedBox.classList.toggle("moved")
})

const exerciseBgBox = document.getElementById("exercise_bg_box")
const exerciseBgButton  = document.getElementById("exercise_bg_button")
exerciseBgButton.addEventListener("click", ()=> {
    exerciseBgBox.classList.toggle("chaged")
})