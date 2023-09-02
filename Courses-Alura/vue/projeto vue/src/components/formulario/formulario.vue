<template>
    <div class="container-form">
        <form action="" @submit="enviarFormulario($event)">
            <div>
                <label for="nome">Digite seu nome:</label>
                <input type="text" v-model="name">
            </div>
            <div>
                <label for="tecnologias">Digite suas tecnologias:</label>
                <input type="text" v-model="tecnologia">
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>
        </form>
        <h2 v-if="name && tecnologia">
            O úsuario {{ name }} tem como {{ tecnologia }} como sua tecnologia preferida...
        </h2>
    </div>
</template>

<script>
    export default {
        name: "formulario",
        data(){
            return {
                name: "",
                tecnologia: ""
            }
        },
        methods: {
            enviarFormulario(e) {
                e.preventDefault();
                console.log(this.name);

                const containerForm = document.querySelector('.container-form');
                if (containerForm) {
                    containerForm.style.backgroundColor = '#112222';
                    containerForm.style.color = '#FFFFFF'
                }
            }
        }
    }
</script>

<style scoped>
    .container-form {
        background-color: aquamarine;
        padding: 20px;
        margin: 5px;
        color: black;
        align-items: center;
        text-align: center;
        border-radius: 5px;
        border: 2px solid rgb(255, 0, 0);
    }

    label {
        display: block;
        padding: 10px;
        font-weight: bold;
        font-size: 2em;
    }

    h2 {
        margin-top: 20px;
    }

    button[type="submit"] {
        margin: 10px;
    }

    input[type="text"] {
        border-radius: 10px;
        width: 400px;
        height: 50px;
    }
</style>