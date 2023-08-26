<template>
    <h1>{{ frase }}</h1>
</template>

<script>
    export default {
        name: 'lifecycle',
        data() {
            return {
                frase: 'Seja bem vindo ao meu projeto Vue'
            }
        },
        created(){
            setTimeout(() => {
                this.frase = "Fique a vontade e se divirta..."
            }, 3000);
        }
    }
</script>