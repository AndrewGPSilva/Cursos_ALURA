import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const formulario = document.querySelector(".form");

formulario.addEventListener("submit", event => {
    event.preventDefault();
    controller.adicionar();
})