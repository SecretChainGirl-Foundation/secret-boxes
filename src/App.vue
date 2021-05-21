<template>
  <div :class="($store.state.darkMode == true) ? 'dark-mode body' : 'body'">
    <div v-if="$store.state.pageLoading">
       <div v-if="$store.state.darkMode == true" class="page-loading page-loading-dark">
        <img src="/Logo White.png" alt="Logo Secret Box" />
      </div>
      <div v-else class="page-loading page-loading-primary">
        <img src="/Logo Black.png" alt="Logo Secret Box" />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted(){
    this.setLoading()
  },
  // watch: {
  //   $route() {
  //     this.setLoading()
  //   },
  // },
  methods:{
    setLoading(){
        this.$store.commit("setPageLoading",true)
        var v = this;
        setTimeout(function () {
          v.$store.commit("setPageLoading",false)
        }, 1000);
    }
  }
}
</script>
<style lang="scss" scoped>
.body{
  background: var(--theme-bg-light);
}
.page-loading{
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
  & img{
    width: 120px;
    margin: auto;
  }
  transition: ease-in-out;
}
.page-loading-primary{
  background: var(--primary);
}
.page-loading-dark{
  background: var(--theme-bg-light);
}
</style>