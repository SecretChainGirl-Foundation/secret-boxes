<template>
  <div class="app">
    <Hero />
    <!-- About on Progress -->
    <About />
    <News />
    <FooterIndex />
  </div>
</template>

<script>
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import News from "../components/News.vue";
import FooterIndex from "../components/FooterIndex.vue";

export default {
  name: "App",
  components: {
    Hero,
    News,
    About,
    FooterIndex,
  },
};
</script>
