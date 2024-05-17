let temperature = prompt("Ingresa la temperatura actual:");

if (temperature == "") {
    alert("No ingresaste una temperatura, recuerda que debe ser un valor numérico.");
} else if (isNaN(temperature)) {
    alert("Favor de ingresar una temperatura válida en número");
} else if (temperature < 1) {
    alert("Temperatura actual " + temperature + "°, frío considerable.");
} else if (temperature < 5) {
    alert("Temperatura actual " + temperature + "°, frío considerable.");
} else if (temperature < 10) {
    alert("Temperatura actual " + temperature + "°, frío agradable.");
} else if (temperature < 20) {
    alert("Temperatura actual " + temperature + "°, día agradable.");
} else if (temperature < 28) {
    alert("Temperatura actual " + temperature + "°, calor agradable.");
} else if (temperature < 35) {
    alert("Temperatura actual " + temperature + "°, calor considerable.");
} else {
    alert("Temperatura actual " + temperature + "°, ¡Calor extremo!, tomar precauciones.");
}