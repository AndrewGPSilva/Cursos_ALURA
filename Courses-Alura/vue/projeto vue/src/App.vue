<template>
  <div class="container-pai">
    <nav>
      <Navbar />
    </nav>
    <div class="containerBoasVindas">
      <Lifecycle />
    </div>
    <main>
      <article class="card-1">
        <Card />
      </article>
      <article class="card-2">
        <Card />
      </article>
      <article class="card-2">
        <Card />
      </article>
      <formulario />
    </main>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
  import Card from './components/card.vue';
  import Navbar from './components/navbar.vue';
  import Footer from './components/footer.vue';
  import Lifecycle from './components/lifecycle.vue';
  import formulario from './components/formulario/formulario.vue'
  export default {
    name: "App",
    components: {
      Card,
      Navbar,
      Footer,
      Lifecycle,
      formulario
    }
  }
</script>

<style scoped>
  main {
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    background-color: black;
    color: white;
    margin: 10px;
    border-radius: 10px;
    justify-content: center;
  }

  .card-1 {
    padding: 10px;
  }
  .card-2 {
    padding: 10px;
  }

  .container-pai {
    background-color: rgb(94, 94, 94);
  }

  .containerBoasVindas {
    text-align: center;
    margin: 10px;
    color: rgb(255, 255, 255);
  }
</style>