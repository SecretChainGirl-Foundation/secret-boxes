<template>
  <nav class="topbar">
    <Social />
  </nav>
</template>

<script>
import Social from "./common/Social.vue";

export default {
  name: "App",
  components: {
    Social,
  },
};
</script>


<style lang="scss" scoped>
.topbar {
  padding: 0 10%;
  height: 50px;
  background: var(--primary);
  display: flex;
  width: 100%;
  justify-items: flex-end;
  justify-content: flex-end;
  position: absolute;
  align-items: center;
  align-content: center;
  top: 0;
  left: 0;
  z-index: 1201;
  & a {
    margin-top: 5px;
    padding: 5px;
  }
}

@media (max-width: 1024px) {
  .topbar {
    display: none;
  }
}
</style>
