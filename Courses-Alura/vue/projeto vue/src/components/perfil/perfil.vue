<template>
    <div>
        <h2>Usuario: {{ nome }}</h2>
        <img :src="img_source" :alt="alt">
    </div>
</template>

<script>
    export default {
        name: "perfil",
        data() {
            return {
                img_source: "/avatar.jpg",
                alt: "Imagem de Perfil",
                nome: "Andrew Silva"
            }
        }
    }
</script>