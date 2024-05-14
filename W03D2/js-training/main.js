const weather = prompt("What's the wether is like today?")

switch (weather) {
    case "sunny":
        alert("Use sunscreen!");
        break;
    case "windy":
        alert("Wea a coat.");
        break;
    case "rainy":
        alert("Tak an umbrella!");
        break;
    default: alert("Dress accordingly, you stupid.")
}