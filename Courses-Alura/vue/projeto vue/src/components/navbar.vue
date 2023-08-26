<template>
    <div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Projets</a>
        <a href="#">Certificates</a>
        <a href="#">Contact</a>
      </nav>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {};
    },
  };
</script>

<style scoped>
  nav {
    display: flex;
    padding: 10px;
    text-align: center;
    align-items: center;
    background-color: rgb(0, 0, 0);
    color: white;
    justify-content: space-around;
    border-bottom: 0.1px solid rgb(167, 167, 167);
  }

  nav a{
    padding: 10px;
    text-decoration: none;
    color: yellow;
    font-size: 1.2em;
    font-weight: bold;
  }

  nav a:hover {
    background-color: rgb(255, 255, 255);
    color: black;
    border-radius: 10px;
  }
</style>
