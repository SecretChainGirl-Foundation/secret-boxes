<template>
  <footer :class="$route.path == '/' ? 'footer-index' : ''">
    <nav class="footer-bar">
      <Social />
    </nav>
    <nav class="footer-bar2">
      <div class="left">
        <a href="#">SCG Foundation</a>
        <a href="#">Contact</a>
        <a href="#">Support </a>
        <a href="#">Team </a>
        <a href="#">Privacy Policy </a>
      </div>
      <div class="right">
        <a href="#">© 2021 SecretChainGirl Foundation</a>
      </div>
    </nav>
  </footer>
</template>


<script>
import Social from "../common/Social.vue";

export default {
  name: "App",
  components: {
    Social,
  },
};
</script>

<style lang="scss">
footer {
  position: relative;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  // overflow: hidden;
}

.footer-index {
  margin-top: -150px;
}
.footer-bar {
  width: 80%;
  left: 10%;
  position: absolute;
  bottom: 50px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--dark-1);
  & a {
    margin-right: 10px;
  }
  @media (max-width: 1024px) {
    text-align: center;
    border-bottom: none;
    left: 0%;
    width: 100%;
    bottom: 100px;
  }
}
.footer-bar2 {
  width: 80%;
  left: 10%;
  position: absolute;
  bottom: 10px;
  padding-bottom: 10px;
  display: flex;
  & a {
    margin-right: 10px;
  }
  & .right {
    margin-left: auto;
    & a {
      color: white;
    }
  }
  @media (max-width: 1024px) {
    justify-content: center;
    justify-items: center;
    text-align: center;
    flex-wrap: wrap;
    bottom: 0;
    & .left {
      width: 100%;
      margin-top: 0px;
    }
    & .right {
      width: 100%;
    }
    left: 0%;
    width: 100%;
  }
}
</style>


