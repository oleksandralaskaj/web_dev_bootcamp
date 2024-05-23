import {ProgressBar} from './ProgressBar';

const obR = new ProgressBar("r")
document.body.appendChild(obR.element)

const obG = new ProgressBar("g")
document.body.appendChild(obG.element)

const obB = new ProgressBar("b")
document.body.appendChild(obB.element)

const getColorValues = () => {
    return {
        "r": obR.value,
        "g": obG.value,
        "b": obB.value,
    }
}

const changeColor = () => {
    const obj = getColorValues()
    const newValueRGB =`RGB(${obj.r * 15}, ${obj.g * 15}, ${obj.b * 15})`
    document.querySelector(".color-block").style.backgroundColor = newValueRGB
    document.querySelector(".color-desc").innerText =newValueRGB
}

const minusPlusBtns = document.querySelectorAll(".btn-minus, .btn-plus")
minusPlusBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        changeColor()
    })
})