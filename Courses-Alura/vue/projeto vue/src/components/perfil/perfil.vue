<template>
    <div>
        <div>
            <button @click="showPerfil">{{ statusBtn }}</button>
            <div v-show="showPerfilDiv">
                <h2>Usuario: {{ nome }}</h2>
                <img :src="img_source" :alt="alt">
            </div>
        </div>
        <div>
            <tecnologias />
        </div>
    </div>
</template>

<script>
    import tecnologias from '../tecnologias/tecnologias.vue'
    export default {
        name: "perfil",
        data() {
            return {
                img_source: "/avatar.jpg",
                alt: "Imagem de Perfil",
                nome: "Andrew Silva",
                statusBtn: "Esconder Perfil",
                showPerfilDiv: true
            }
        },
        components: {
            tecnologias
        },
        methods: {
            showPerfil() {
                if(this.statusBtn === "Esconder Perfil") {
                    this.statusBtn = "Mostrar Perfil"
                    this.showPerfilDiv = false
                } else {
                    this.statusBtn = "Esconder Perfil"
                    this.showPerfilDiv = true
                }
            }
        }
    }
</script>