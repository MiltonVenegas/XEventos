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

function FunctionDown(button) {
    button.style.backgroundColor = "lightblue";

}

function FunctionEnter() {
    var boton = document.getElementById("Aumentar");
    boton.style.transform = "scale(1.2)";
}

function FunctionLeave() {
    var boton = document.getElementById("Disminuir");
    boton.style.transform = "scale(0.5)";
}

function FunctionMove() {
    var button = document.getElementById("Mover");
    button.style.backgroundColor = color;
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









