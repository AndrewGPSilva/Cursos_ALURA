<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          My Website
        </a>
        <button class="navbar-burger" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': isMenuOpen }">
        <div class="navbar-start">
          <a class="navbar-item" href="/">Home</a>
          <a class="navbar-item" href="/about">About</a>
          <a class="navbar-item" href="/services">Services</a>
          <a class="navbar-item" href="/contact">Contact</a>
        </div>
      </div>
    </nav>
</template>
  
<script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
</script>
  
  <style scoped>
  .navbar {
    background-color: #333;
    color: white;
  }
  
  .navbar-brand {
    display: flex;
    align-items: center;
  }
  
  .navbar-burger {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: block;
  }
  
  .navbar-menu {
    display: none;
  }
  
  @media (max-width: 768px) {
    .navbar-burger {
      display: block;
    }
  
    .navbar-menu.is-active {
      display: block;
    }
  
    .navbar-start {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .navbar-item {
      margin-bottom: 0.5rem;
    }
  }
</style>
  