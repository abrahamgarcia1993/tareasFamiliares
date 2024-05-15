const div = document.querySelector("div");
const form = document.querySelector("form");
const inputNombre = document.querySelector("input");
const select = document.createElement("select");
const inputScore = document.createElement("input");
const inputTarea = document.createElement("input");
const btnEnviar = document.createElement("button");
const divPuntuacion = document.createElement("div");
const body = document.querySelector("body");
btnEnviar.textContent = "Enviar";
const arrayPersonas = [];
inputScore.setAttribute("type", "number");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombre = inputNombre.value;
    
    // Verificar si el nombre ya está en el select
    let nombreExiste = false;
    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value === nombre) {
            nombreExiste = true;
            break;
        }
    }
    if (!nombreExiste) {
        let option = document.createElement("option");
        option.setAttribute("value", nombre);
        option.textContent = nombre;
        select.appendChild(option);
    }
    
    div.appendChild(select);
    div.appendChild(inputTarea);
    div.appendChild(inputScore);
    div.appendChild(btnEnviar);
});

btnEnviar.addEventListener("click", () => {
    const nombre = inputNombre.value;
    if (!arrayPersonas.some(persona => persona.nombre === nombre)) {
        arrayPersonas.push({ nombre: nombre, score: 0 });
    }
    
    compararPersonas(arrayPersonas);
    actualizarPuntuaciones();
    crearTarea();
});

function compararPersonas(arrayPersonas) {
    for (let i = 0; i < arrayPersonas.length; i++) {
        if (arrayPersonas[i].nombre === select.value) {
            arrayPersonas[i].score += parseInt(inputScore.value);
        }
    }
}

function actualizarPuntuaciones() {
    // Limpiar el div de puntuaciones antes de volver a crearlo
    divPuntuacion.innerHTML = "";
    for (let i = 0; i < arrayPersonas.length; i++) {
        const p = document.createElement("p");
        p.textContent = `${arrayPersonas[i].nombre} tiene una puntuación de ${arrayPersonas[i].score}`;
        divPuntuacion.appendChild(p);
    }
    body.appendChild(divPuntuacion);
}

function crearTarea() {
    const divTarea = document.createElement("div");
    const pTarea = document.createElement("h2");
    const deleteTarea = document.createElement("button");
    let tarea = inputTarea.value;
    
    deleteTarea.textContent = "X";
    deleteTarea.style.color = "red";
    pTarea.textContent = tarea;
    
    deleteTarea.addEventListener("click", () => {
        divTarea.remove();
    });
    
    divTarea.appendChild(pTarea);
    divTarea.appendChild(deleteTarea);
    div.appendChild(divTarea);
}

//crear una funcion que recorra el arrayPersonas por cada persona cree un p y luego se lo envie a este p