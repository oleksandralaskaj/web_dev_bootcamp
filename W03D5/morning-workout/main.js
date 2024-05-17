const text = document.querySelector(".text")
const lock = document.querySelector(".padlock")

let isLocked = false;

lock.addEventListener("mouseenter", () => {
    if (!isLocked) {
        text.classList.toggle("text_visible")
    }
})
lock.addEventListener("mouseleave", () => {
    if (!isLocked) {
        text.classList.toggle("text_visible")
    }
})
lock.addEventListener("click", () => {
    isLocked = !isLocked;
    lock.classList.toggle("padlock_clicked")
})

