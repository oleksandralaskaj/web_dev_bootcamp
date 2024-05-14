const btn = document.querySelector("button");
const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
btn.addEventListener("click", () => {
    const oldNumber = Number(prompt("Insert your old seat number (0 to 259):"));
    if (oldNumber >= 0 && oldNumber < 260) {
        const column = oldNumber % 10;
        const row = letters[Math.floor(oldNumber / 10)];
        alert(`A new seat number is ${row + column}.`);
    } else {
        alert(`Wrong number, try again.`);
    }
})

