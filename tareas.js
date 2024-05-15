const div = document.querySelector("div");
const form = document.querySelector("form");
const inputNombre = document.querySelector("input");
const select = document.createElement("select");
const inputScore = document.createElement("input");
const inputTarea = document.createElement("input");
const btnEnviar = document.createElement("button");
const divPuntuacion= document.createElement("div")
const body= document.querySelector("body")
btnEnviar.textContent = "enviar";
const arrayPersonas = [];
inputScore.setAttribute("type", "number");

function compararPersonas(arrayPersonas) {
    for (let i = 0; i < arrayPersonas.length; i++) {
        if (arrayPersonas[i].nombre === select.value) {
            arrayPersonas[i].score += parseInt(inputScore.value);
        }
        /* console.log(arrayPersonas[i].nombre); */
    }
}
function mostrarPuntuacion(arrayPersonas){
    for(let i=0; i<arrayPersonas.length; i++){
        const p= document.createElement("p")
        if(arrayPersonas[i].nombre==inputNombre.value){
            p.textContent=`${arrayPersonas[i].nombre} tiene una puntuacion de ${arrayPersonas[i].score}`
        }
        
        
        console.log(arrayPersonas)
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let option = document.createElement("option");
    let nombre = inputNombre.value;
    option.setAttribute("value", nombre);
    option.textContent = nombre;
    select.appendChild(option);
    div.appendChild(select);
    div.appendChild(inputTarea);
    div.appendChild(inputScore);
    div.appendChild(btnEnviar);
});
btnEnviar.addEventListener("click", () => {
    arrayPersonas.push({ nombre: inputNombre.value, score: 0 });
    compararPersonas(arrayPersonas);
    body.appendChild(divPuntuacion)
    divPuntuacion.appendChild(p)
    mostrarPuntuacion(arrayPersonas);
    console.log(arrayPersonas);
    console.log(arrayPersonas);
    const divTarea= document.createElement("div")
    const pTarea= document.createElement("p")
    const deleteTarea= document.createElement("button")
    let tarea=inputTarea.value
    deleteTarea.textContent="X"
    deleteTarea.style.color="red"
    pTarea.textContent=tarea
    divTarea.appendChild(pTarea)
    divTarea.appendChild(deleteTarea)
    div.appendChild(divTarea)
    deleteTarea.addEventListener("click",()=>{
        divTarea.remove()
    })
});

console.log(arrayPersonas)
//crear una funcion que recorra el arrayPersonas por cada persona cree un p y luego se lo envie a este p