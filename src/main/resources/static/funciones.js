// ============================================================
// EJERCICIO CONSOLIDADO - Versión Web
// ============================================================

// 🔌 INTERRUPTOR DE CONEXIÓN
// false = la lógica corre en JavaScript (funciona solo, sin Java)
// true  = la lógica corre en Java con Spring Boot (Paso 2)
// 🔌 INTERRUPTOR DE CONEXIÓN
const USAR_JAVA = true;

// Dirección de la API de Java (la usaremos en el Paso 2)
const URL_API_JAVA = "http://localhost:8080/api/evaluar";

// ------------------------------------------------------------
// Referencias a los elementos del HTML
// ------------------------------------------------------------
const formularioEstudiante = document.getElementById("formularioEstudiante");
const campoNombreApellido = document.getElementById("nombreApellido");
const campoEdad = document.getElementById("edad");
const campoNota = document.getElementById("nota");
const mensajeError = document.getElementById("mensajeError");
const tarjetaResultados = document.getElementById("tarjetaResultados");

const resEstudiante = document.getElementById("resEstudiante");
const resEdad = document.getElementById("resEdad");
const resNota = document.getElementById("resNota");
const resClasificacion = document.getElementById("resClasificacion");
const resEstado = document.getElementById("resEstado");

// ------------------------------------------------------------
// LÓGICA EN JAVASCRIPT (misma lógica de tu código en Java)
// Devuelve un objeto con la misma forma que devolverá Java después
// ------------------------------------------------------------
function evaluarEstudianteLocal(nombreApellido, edad, nota) {
    const resultado = {
        nombreApellido: nombreApellido,
        edad: edad,
        nota: nota,
        edadValida: true,
        notaValida: true,
        clasificacion: "",
        estado: ""
    };

    // Validación de edad (igual que: edad < 15 || edad > 100)
    if (edad < 15 || edad > 100) {
        resultado.edadValida = false;
        return resultado;
    }

    // Validación de nota (igual que: nota < 0 || nota > 20)
    if (nota < 0 || nota > 20) {
        resultado.notaValida = false;
        return resultado;
    }

    // Clasificación de la nota
    if (nota <= 10) {
        resultado.clasificacion = "Desaprobado";
    } else if (nota <= 13) {
        resultado.clasificacion = "Regular";
    } else if (nota <= 17) {
        resultado.clasificacion = "Bueno";
    } else {
        resultado.clasificacion = "Excelente";
    }

    // Estado final
    resultado.estado = nota <= 10 ? "No aprobó" : "Aprobó";

    return resultado;
}

// ------------------------------------------------------------
// LÓGICA EN JAVA (Paso 2): envía los datos a Spring Boot
// ------------------------------------------------------------
async function evaluarEstudianteJava(nombreApellido, edad, nota) {
    const respuesta = await fetch(URL_API_JAVA, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombreApellido, edad, nota })
    });

    if (!respuesta.ok) {
        throw new Error("No se pudo conectar con el servidor Java");
    }

    return await respuesta.json();
}

// ------------------------------------------------------------
// Funciones para mostrar información en pantalla
// ------------------------------------------------------------
function crearInsignia(texto, claseColor) {
    return `<span class="insignia ${claseColor}">${texto}</span>`;
}

function mostrarError(texto) {
    mensajeError.textContent = texto;
    mensajeError.hidden = false;
}

function ocultarError() {
    mensajeError.hidden = true;
}

function mostrarResultados(resultado) {
    // textContent evita insertar código HTML malicioso en el nombre
    resEstudiante.textContent = resultado.nombreApellido;

    // Reiniciamos los campos que pueden no aplicar
    resEdad.innerHTML = "";
    resNota.innerHTML = "";
    resClasificacion.innerHTML = "—";
    resEstado.innerHTML = "—";

    // Edad
    if (!resultado.edadValida) {
        resEdad.innerHTML = crearInsignia("Edad inválida", "invalido");
        resNota.innerHTML = "—";
        tarjetaResultados.hidden = false;
        return;
    }
    resEdad.textContent = resultado.edad + " años";

    // Nota
    if (!resultado.notaValida) {
        resNota.innerHTML = crearInsignia("Nota inválida", "invalido");
        tarjetaResultados.hidden = false;
        return;
    }
    resNota.textContent = resultado.nota;

    // Clasificación (la clase CSS es el texto en minúsculas)
    const claseClasificacion = resultado.clasificacion.toLowerCase();
    resClasificacion.innerHTML = crearInsignia(resultado.clasificacion, claseClasificacion);

    // Estado
    const claseEstado = resultado.estado === "Aprobó" ? "aprobo" : "no-aprobo";
    resEstado.innerHTML = crearInsignia(resultado.estado, claseEstado);

    tarjetaResultados.hidden = false;
}

// ------------------------------------------------------------
// Evento principal: cuando se envía el formulario
// ------------------------------------------------------------
formularioEstudiante.addEventListener("submit", async function (evento) {
    evento.preventDefault(); // evita que la página se recargue
    ocultarError();

    const nombreApellido = campoNombreApellido.value.trim();
    const edad = Number(campoEdad.value);
    const nota = Number(campoNota.value);

    // Validaciones básicas del formulario
    if (nombreApellido === "") {
        mostrarError("Por favor, ingresa tu nombre y apellido.");
        return;
    }

    if (campoEdad.value === "" || !Number.isInteger(edad)) {
        mostrarError("La edad debe ser un número entero.");
        return;
    }

    if (campoNota.value === "" || !Number.isInteger(nota)) {
        mostrarError("La nota debe ser un número entero.");
        return;
    }

    try {
        let resultado;

        if (USAR_JAVA) {
            resultado = await evaluarEstudianteJava(nombreApellido, edad, nota);
        } else {
            resultado = evaluarEstudianteLocal(nombreApellido, edad, nota);
        }

        mostrarResultados(resultado);

    } catch (error) {
        mostrarError("⚠️ Error: " + error.message);
    }
});