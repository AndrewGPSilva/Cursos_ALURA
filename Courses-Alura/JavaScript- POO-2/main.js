let listaDeItens = []

const form = document.getElementById("form-itens")
const itensInput = document.getElementById("receber-item")

form.addEventListener("submit", function (evento) {
    evento.preventDefault()
    salvarItens()
})

function salvarItens() {
    const itemCompras = itensInput.value
    const checarDuplicado = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === itemCompras.toUpperCase())

    if(checarDuplicado) {
        alert("Item já foi adicionado!")
    } else {
        listaDeItens.push ({
            valor: itemCompras
        })
    }

    console.log(listaDeItens)
}


