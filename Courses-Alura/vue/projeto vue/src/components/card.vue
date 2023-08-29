<template>
  <div>
    <div class="card" style="width: 23rem;">
      <img src="/src/assets/onepiece.jpg" class="card-img-top" alt="Foto de One Piece">
      <div class="card-body">
        <h5 class="card-title" v-if="title">{{ title }}</h5>
        <h5 class="card-title" v-else>Nenhum título informado...</h5>
        <p class="card-text">Essa é a famosa tripulação do Yonkou Luffy do Chapéu de Palha</p>
        <a href="#" class="btn btn-primary" v-show="link">Acessar sinopse</a>
        <perfil />
      </div>
    </div>
  </div>
</template>
  
<script>
import perfil from './perfil/perfil.vue'
export default {
  name: 'card',
  components: {
    perfil
  },
  data() {
    return {
      title: "One Piece",
      link: ""
    }
  }
}
</script>
  