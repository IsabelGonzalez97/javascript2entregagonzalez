// Arrays para almacenar los nombres y tiempos de espera
const names = [];
const waitTimes = [];

// Capturar la interacción con los botones
document.getElementById('registerButton').addEventListener('click', registerTurn);
document.getElementById('averageButton').addEventListener('click', calculateAverageWaitTime);
document.getElementById('filterButton').addEventListener('click', filterWaitTimes);
document.getElementById('searchButton').addEventListener('click', findByName);

// Función para capturar y registrar los datos
function registerTurn() {
    let name = prompt("Ingresa tu nombre:");
    let waitTime = parseInt(prompt("Ingresa tu tiempo de espera en minutos:"));
    
    if (isValidWaitTime(waitTime)) {
        names.push(name);
        waitTimes.push(waitTime);
        alert(`${name}, con un tiempo de espera de ${waitTime} minutos, ha sido registrado.`);
        displayResult(`${name}, con un tiempo de espera de ${waitTime} minutos, ha sido registrado.`);
    } else {
        alert("Por favor, ingresa un tiempo de espera válido.");
        displayResult("Por favor, ingresa un tiempo de espera válido.");
    }
}

// Validar el tiempo de espera
function isValidWaitTime(waitTime) {
    return waitTime > 0;
}

// Calcular el tiempo de espera promedio
function calculateAverageWaitTime() {
    let sum = 0;
    for (let i = 0; i < waitTimes.length; i++) {
        sum += waitTimes[i];
    }
    let average = (sum / waitTimes.length).toFixed(2);
    console.log(`Tiempo de espera promedio: ${average} minutos`);
    alert(`Tiempo de espera promedio: ${average} minutos`);
    displayResult(`Tiempo de espera promedio: ${average} minutos`);
}

// Filtrar tiempos de espera mayores o iguales a un valor mínimo
function filterWaitTimes() {
    let minWaitTime = parseInt(prompt("Ingresa el tiempo de espera mínimo para filtrar:"));
    let filteredTimes = waitTimes.filter(time => time >= minWaitTime);
    console.log(`Tiempos de espera mayores o iguales a ${minWaitTime} minutos: ${filteredTimes.join(', ')}`);
    alert(`Tiempos de espera mayores o iguales a ${minWaitTime} minutos: ${filteredTimes.join(', ')}`);
    displayResult(`Tiempos de espera mayores o iguales a ${minWaitTime} minutos: ${filteredTimes.join(', ')}`);
}

// Buscar un nombre en la lista
function findByName() {
    let searchName = prompt("Ingresa el nombre para buscar:");
    let foundName = names.find(name => name.toLowerCase() === searchName.toLowerCase());
    if (foundName) {
        console.log(`${foundName} ha sido encontrado en la lista.`);
        alert(`${foundName} ha sido encontrado en la lista.`);
        displayResult(`${foundName} ha sido encontrado en la lista.`);
    } else {
        console.log("No se ha encontrado el nombre ingresado.");
        alert("No se ha encontrado el nombre ingresado.");
        displayResult("No se ha encontrado el nombre ingresado.");
    }
}

// Mostrar resultados en la página
function displayResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML += `<p>${message}</p>`;
}
