<template>
    <h1>Seja bem vindo ao meu projeto Vue</h1>
    <h1>{{ frase }}</h1>
</template>

<script>
    export default {
        name: 'lifecycle',
        data() {
            return {
                frase: ''
            }
        },
        created(){
            setTimeout(() => {
                this.frase = "Fique a vontade e se divirta..."
            }, 3000);
        }
    }
</script>