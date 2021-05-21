<template>
  <div class="app">
    <s-topbar />
    <s-navbar page="default" v-on:scrollTo="scrollToElement" />
    <main class="main">
      <transition name="slide-fade">
      <router-view v-on:setScrollTo="setScrollTo" :scrollToData="scrollToData" />
      </transition>
    </main>
    <s-footer :page="$route.path == '/' ? 'home' : ''" />
  </div>
</template>

<script>
import STopbar from "../components/Topbar";
import SNavbar from "../components/Navbar";
import SFooter from "../components/Footer";
export default {
  data(){
    return {
      scrollToData : ''
    }
  },
  components: {
    STopbar,
    SNavbar,
    SFooter,
  },
  methods:{
    setScrollTo(data){
      this.scrollToData = data
    },
    scrollToElement(el){
      this.scrollToData = el
    }
  }
};
</script>

<style lang="scss" scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.app {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  @media (min-width: 1920px) {
    max-width: 1920px;
  }
}
.main {
  background: var(--theme-bg-light);
  width: 100%;
  font-size: 1rem;
  @media (max-width: 1024px) {
    padding-top: 80px;
  }
  @media (max-width: 250px) {
    font-size: 0.5rem;
  }
}
</style>
