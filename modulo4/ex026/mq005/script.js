let contagem = 0
let menu = document.getElementById("menu")

function verificar_tamanho() {
    if(window.innerWidth >= 768){
        menu.style.display = 'block'
    }else{
        menu.style.display = 'none'
    }
}


function mostrar_mais() {
    
    if(contagem == 0){

        menu.style.display = "block"
        contagem = contagem + 1

    }
    else if(contagem == 1){

        menu.style.display = "none"
        contagem = contagem - 1

    }
}