<template>
  <div class="app">
    <s-navbar page="docs" />
    <main class="main">
      <router-view />
    </main>
    <s-footer :page="$route.path == '/' ? 'home' : ''" />
  </div>
</template>

<script>
import SNavbar from "../components/Navbar.vue";
import SFooter from "../components/Footer.vue";
export default {
  components: {
    SNavbar,
    SFooter,
  },
};
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  @media (min-width: 1920px) {
    max-width: 1920px;
  }
}
.main {
  width: 100%;
  font-size: 1rem;
  @media (max-width: 250px) {
    font-size: 0.5rem;
  }
}
</style>
