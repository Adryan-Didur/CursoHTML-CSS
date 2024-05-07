let contagem = 0

function mostrar_mais() {
    var menu = document.getElementById("menu")
    if(contagem == 0){

        menu.style.display = "block"
        contagem = contagem + 1

    }
    else if(contagem == 1){

        menu.style.display = "none"
        contagem = contagem - 1

    }
}