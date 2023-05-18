let listaDeItens = []

const form = document.getElementById("form-itens")
const itensInput = document.getElementById("receber-item")
const ulitens = document.getElementById('lista-de-itens')

form.addEventListener("submit", function (evento) {
    evento.preventDefault()
    salvarItens()
    mostrarItem()
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

function mostrarItem() {
    ulitens.innerHTML = ''
    listaDeItens.forEach((elemento,index)=> {
        ulitens.innerHTML += `
    <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
        <div>
            <input type="checkbox" class="is-clickable" />
            <input type="text" class="is-size-5" value="${elemento.valor}"></input>
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
    </li>
    `
    })

    const inputsCheck = document.querySelectorAll('input[type="checkbox"]')

    inputsCheck.forEach(i => {
        i.addEventListener('click', (evento)=> {
            console.log(evento.target.parentElement.parentElement.getAttribute('data-value'))
        })
    })
}