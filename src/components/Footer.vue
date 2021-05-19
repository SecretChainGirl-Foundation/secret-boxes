<template>
  <footer class="footer-home" v-if="page == 'home'">
    <div class="footer-home__form">
      <h5 class="title">Sign up for the Mailing List</h5>
      <p class="description">
        We don’t send these very often so you know if you get an email from us,
        it’s gonna be good and it’s gonna be worth reading!
      </p>
      <form action="#">
        <div class="form-group">
          <label for="name">Name</label>
          <input class="input-text" type="text" placeholder="name" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input class="input-text" type="text" placeholder="email" />
        </div>
        <div class="form-group">
          <input class="input-checkbox" type="checkbox" value="1" />
          <span>I agree to receive cool stuff from the Secret Boxes Team!</span>
        </div>
        <div>
          <button type="submit" class="btn btn-primary">Subscribe</button>
        </div>
      </form>
    </div>
    <div class="footer-home__contact">
      <a href="#" class="title"> <h3>CONTACT US</h3></a>
      <br />
      <a href="#" class="title"> <h3>TEAM</h3></a>
      <br />
      <a href="#" class="title"> <h3>GITHUB</h3> </a>
      <p>
        We’d love to hear from you! Feel free to contact us with your ideas or
        feedback. And check out our GitHub to see how you can contribute.
      </p>

      <a href="#">support@secretboxes.io</a>
    </div>

    <img src="/img/footer-il1.png" class="footer-home__il1" alt="Il1" />
    <img src="/img/footer-il2.png" class="footer-home__il2" alt="Il2" />
    <img src="/img/footer-il3.png" class="footer-home__il3" alt="Il3" />
  </footer>

  <footer class="footer-default">
    <nav class="footer-bar">
      <s-social />
    </nav>
    <nav class="footer-bar2">
      <div class="left">
        <a terget="_BLANK" href="http://secretchaingirl.foundation/"
          >SCG Foundation</a
        >
        <a href="#">Contact</a>
        <router-link to="/support">Support </router-link>
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
import SSocial from "../components/common/Social.vue";
export default {
  props: ["page"],
  components: {
    SSocial,
  },
};
</script>
<style lang="scss" scoped>
.footer-default {
  background: var(--theme-bg);
  color: var(--theme-color);
  position: relative;
  height: 150px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
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
}

.footer-home {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  min-height: 800px;
  @media (max-width: 1024px) {
    min-height: 180px;
  }
  &__form {
    width: 60%;
    height: auto;
    padding: 50px 20% 50px 10%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    background: var(--primary);
    & .title {
      margin-bottom: 20px;
    }
    & .description {
      margin-bottom: 20px;
    }
    & .btn-default {
      margin-top: 10px;
      margin-right: 10px;
    }
    & .form-group {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin-bottom: 20px;
      & label {
        margin-bottom: 10px;
        width: 100%;
      }
      & .input-text {
        width: 100%;
        background: white;
        padding: 14px;
        border-radius: 10px;
        border: 1px solid var(--default);
      }
      & .input-checkbox {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
    @media (max-width: 1024px) {
      display: none;
    }
  }
  &__contact {
    background: var(--primary-gray);
    width: 40%;
    height: auto;
    padding: 50px 10%;
    color: white;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    & a {
      color: white;
    }
    & p {
      padding: 50px 0;
    }
    & .title {
      width: 100%;
      line-height: 50px;
    }
    @media (max-width: 1024px) {
      display: none;
    }
  }
  &__il1 {
    position: absolute;
    left: 45%;
    height: 90%;
  }
  &__il2 {
    position: absolute;
    left: 30%;
    top: 70%;
  }
  &__il3 {
    position: absolute;
    left: 80%;
    top: 80%;
  }

  @media (max-width: 1024px) {
    &__il1 {
      display: none;
    }
    &__il2 {
      display: none;
    }
    &__il3 {
      display: none;
    }
  }
}
</style>
