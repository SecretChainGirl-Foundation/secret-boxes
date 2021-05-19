<template>
  <div>
    <home-hero v-on:scrollTo="scrollToElement" />
    <home-about class="about-section" />
    <home-news />
  </div>
</template>

<script>
import HomeHero from "./home/Hero.vue";
import HomeAbout from "./home/About.vue";
import HomeNews from "./home/News.vue";
export default {
  props:['scrollToData'],
  components: {
    HomeHero,
    HomeAbout,
    HomeNews,
  },
  watch: { 
    scrollToData: function(newVal) { 
      this.scrollToElement(newVal)
      this.$emit("setScrollTo","")
    }
  },
  mounted(){
    let link = window.location.href
    if(link.split("#")[1]){
     this.scrollToElement(link.split("#")[1])
    }
  },
  methods: {
    scrollToElement(element) {
      // console.log(element)
      const el = this.$el.getElementsByClassName(element)[0];
      // console.log(el);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>