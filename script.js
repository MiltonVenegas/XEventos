function FunctionOnClick() {
    window.location.href = "https://materializecss.com/buttons.html";
}

function FunctionContext() {
    event.preventDefault();
    var popUp = document.getElementById("popup");
    popUp.style.display = "block";

}

function FunctionOnDbClick() {
    var RandomColor = Aletoriedad();
    document.body.style.backgroundColor = RandomColor;
    console.log("Hecho");
}

function FunctionDown() {
    document.getElementById("Mantener").classList.add("active");
}

function FunctionUp(){
    document.getElementById("Mantener").classList.remove("active");
}

function FunctionEnter() {
    var boton = document.getElementById("Aumentar");
    boton.style.transform = "scale(1.2)";
}

function FunctionLeave() {
    var boton = document.getElementById("Disminuir");
    boton.style.transform = "scale(0.5)";
}
function FunctionMove(color) {
    document.getElementById("Mover").style.backgroundColor = color;
  }

function FunctionOut(){
    var mensaje = document.getElementById("Mensaje");
    mensaje.style.display = "block";
}
function FunctionOver(){
    var mensaje = document.getElementById("Mensaje");
    mensaje.style.display = "none";
}


/* Funciones internas */

function ClosePopUp() {
    var popUp = document.getElementById("popup");
    popUp.style.display = "none";
}

function Aletoriedad() {
    var Letras = "0123456789ABCDEF";
    var Color = "#";
    for (var i = 0; i < 6; i++) {
        Color += Letras[Math.floor(Math.random() * 16)];
    }

    return Color;
}

/* Eventos ScrollDown && ScrollUp */ 

var contador = 0;
var Top = 0;
var Elemento = document.getElementById("contador");

window.addEventListener("scroll", function() {
    var Barra = window.pageYOffset || document.documentElement.scrollTop;
    if (Barra > Top) {
        // Scroll hacia abajo
        contador++;
        if (Elemento.style.display !== 'none') {
            Elemento.innerText = contador;
        }
    } else {
        // Scroll hacia arriba
        contador--;
        if (Elemento.style.display !== 'none') {
            Elemento.innerText = contador;
        }
    }
    Top = Barra;
}, false);

function MostrarContador(action) {
    if (action === 'Mostrar') {
        Elemento.style.display = 'block';
    } else if (action === 'Esconder') {
        Elemento.style.display = 'none';
    }
}


/* Anotacion importante, el contador no es preciso, depende de los perifericos del equipo */





