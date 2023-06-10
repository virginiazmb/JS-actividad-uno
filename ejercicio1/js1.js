const peso_estudiante = []

let sign = prompt(`
    ¿Desea agregar los pesos de los estudiantes?
    1. Si
    2. No
    `)

let show = sign.toLowerCase().trim()

/* bucle para que el programa se siga ejecutando 
mientras que el usuario siga o quiera agregar 
mas estudiantes */

while (show === 'si') {
let peso_de_estudiante = parseFloat(prompt("Ingrese el peso: "))

    if (!isNaN(peso_de_estudiante)) {
    peso_estudiante.push(peso_de_estudiante)
    }

let msnj = prompt(`
¿Desea seguir?
1. Ingresa "si" para continuar agregando pesos
2. Ingresa "no" para finalizar y ver lista de pesos
`)

show = msnj.toLowerCase().trim()
console.log(`Respuesta: ${show}`);
    if (isNaN(show) && show === 'no') {
    break
    }
}

        const lista_pesos = peso_estudiante.sort((peso1, peso2) => peso1 - peso2)
        const menor_peso = lista_pesos[0]
        const mayor_peso = lista_pesos[lista_pesos.length - 1]
        let menor_de_40Kg = 0;
        let entre_40kg_y_50Kg = 0;
        let entre_50kg_60Kg = 0;
        let mayor_de_60Kg = 0;

    for (let i = 0; i < lista_pesos.length; i++) {
        if (lista_pesos[i] < 40) {
        menor_de_40Kg++;
        }
        if (lista_pesos[i] >= 40 && lista_pesos[i] < 50) {
            entre_40kg_y_50Kg++;
        }
        if (lista_pesos[i] >= 50 && lista_pesos[i] < 60) {
            entre_50kg_60Kg++;
        }
        if (lista_pesos[i] > 60) {
            mayor_de_60Kg++;
        }
}

document.getElementById("menor40").innerHTML = "Los estudiantes de peso menor a 40Kg  son: " + menor_de_40Kg + " estudiantes";
document.getElementById("entre40").innerHTML += "Los estudiantes de peso entre 40kg y 50kg son: " + entre_40kg_y_50Kg + " estudiantes";
document.getElementById("entre50").innerHTML += "Los estudiantes de peso entre 50kg y 60kg son: " + entre_50kg_60Kg + " estudiantes";
document.getElementById("mayor60").innerHTML += "Los estudiantes de peso mayores a 60kg son: " + mayor_de_60Kg + " estudiantes";


