const btn = document.querySelector("button");
const letters = ["A", "B", "C", "D", "E", "F"];
btn.addEventListener("click", () => {
    const oldNumber = Number(prompt("Insert your old seat number:"));
    if (oldNumber >= 0 && oldNumber < 60) {
        const column = oldNumber % 10;
        const row = letters[Math.floor(oldNumber / 10)];
        alert(`A new seat number is ${row + column}.`);
    } else {
        alert(`Wrong number, try again.`);
    }
})

