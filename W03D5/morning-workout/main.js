const text = document.querySelector(".text")
const lock = document.querySelector(".padlock")
let isLocked = false;

lock.addEventListener("mouseenter", () => {
    if (isLocked === false) {
        text.classList.toggle("text_visible")
    }
})
lock.addEventListener("mouseleave", () => {
    if (isLocked === false) {
        text.classList.toggle("text_visible")
    }
})
lock.addEventListener("click", () => {
    isLocked = !isLocked;
    lock.classList.toggle("padlock_clicked")
})

