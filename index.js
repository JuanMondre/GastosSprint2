
let total = 0;
let cant = 0;

function extraerDatos() {
    /* Tomo los datos del formulario*/
    var nombre = document.getElementById("nombre");
    var gasto = document.getElementById("gasto");
    var lista = document.getElementById("lista");
    var nombre2 = document.getElementsByName("nombre")[0]
    var gasto2 = document.getElementsByName("gasto")[0]
    /* Poceso los datos del formulario */
    if (nombre.value != "" && gasto.value != "" && gasto.value>=0){
        /* Creo la lista */
        var li = document.createElement("li");
        li.className = "items white"
        li.innerText = nombre.value + ": $" + gasto.value;
        total = total + parseFloat(gasto.value);
        nombre.value = "";
        gasto.value = "";
        lista.appendChild(li);
        nombre2.placeholder="Nombre";
        gasto2.placeholder="Gasto";
        cant = cant + 1
    } 
    else {
            alert("Por favor, Verifique que ha completado todos los datos o que han sido ingresados correctamente");
    }
}

/* Muestro total */
function totalDisplay(total) {
    var displayTotal = document.getElementById("total");
    if (isNaN(total)){
        displayTotal.innerText = "Total:"
    } else{
        displayTotal.innerText = "Total: $" + total;
    } 
}

function division(total, gente) {
    if (gente != 0){
        return "$" + (total / gente).toString();
    } else {
        return ""
    }
    
}
/* Muestro individual */
function Individual() {
    var displayAporteIndividual = document.getElementById("monto");
    var aporteIndividual = "El monto a gastar por persona es de:" + division(total, cant);
    displayAporteIndividual.innerText = aporteIndividual;
}
/* LLamo a todas las funciones */
function calculo() {
    extraerDatos();
    totalDisplay(total);
    Individual();
}



