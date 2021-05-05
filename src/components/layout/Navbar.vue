<template>
  <nav class="navbar">
    <router-link to="/" class="logo">
      <img src="/logo.png" alt="Secret Box Logo" />
    </router-link>
    <div class="btn-menu" @click="toggleMenu = !toggleMenu">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.7953 0H2.20472C1.61999 0 1.05921 0.217737 0.645748 0.605312C0.232282 0.992887 0 1.51855 0 2.06667C0 2.61478 0.232282 3.14044 0.645748 3.52802C1.05921 3.9156 1.61999 4.13333 2.20472 4.13333H29.7953C30.38 4.13333 30.9408 3.9156 31.3542 3.52802C31.7677 3.14044 32 2.61478 32 2.06667C32 1.51855 31.7677 0.992887 31.3542 0.605312C30.9408 0.217737 30.38 0 29.7953 0Z"
          fill="black"
        />
        <path
          d="M29.7953 9.74268H2.20472C1.61999 9.74268 1.05921 9.96041 0.645748 10.348C0.232282 10.7356 0 11.2612 0 11.8093C0 12.3575 0.232282 12.8831 0.645748 13.2707C1.05921 13.6583 1.61999 13.876 2.20472 13.876H29.7953C30.38 13.876 30.9408 13.6583 31.3542 13.2707C31.7677 12.8831 32 12.3575 32 11.8093C32 11.2612 31.7677 10.7356 31.3542 10.348C30.9408 9.96041 30.38 9.74268 29.7953 9.74268Z"
          fill="black"
        />
        <path
          d="M32 21.5525C32 21.0044 31.7677 20.4787 31.3542 20.0912C30.9408 19.7036 30.38 19.4858 29.7953 19.4858H2.20472C1.61999 19.4858 1.05921 19.7036 0.645748 20.0912C0.232282 20.4787 0 21.0044 0 21.5525C0 22.1006 0.232282 22.6263 0.645748 23.0139C1.05921 23.4014 1.61999 23.6192 2.20472 23.6192H29.7953C30.38 23.6192 30.9408 23.4014 31.3542 23.0139C31.7677 22.6263 32 22.1006 32 21.5525Z"
          fill="black"
        />
      </svg>
    </div>
    <ul
      :class="toggleMenu ? 'navbar__navbar-list show' : 'navbar__navbar-list'"
    >
      <li class="navbar__close-btn" @click="toggleMenu = !toggleMenu">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 6L18.7742 18.7742"
            stroke="#14142B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 18.7744L18.7742 6.00022"
            stroke="#14142B"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </li>
      <li class="nav-dropdown" >
        <div class="nav-dropdown-link" @click="toggleDropdown = !toggleDropdown">
          <span>Boxes</span>
          <svg
            width="8"
            height="7"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L9 9L17 1"
              stroke="#111111"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <ul
          :class="
            toggleDropdown
              ? 'navbar-dropdown show font-gobold'
              : 'navbar-dropdown font-gobold'
          "
        >
          <li @click="to('/secret/counter')">
            <img src="/img/box-gray.png" alt="Secret Counter" />
            <h4>Secret Counter</h4>
          </li>
          <li>
            <img src="/img/box-blue.png" alt="Figment learn" />
            <h4>Figment learn</h4>
          </li>
          <li>
            <img src="/img/box-orange.png" alt="Richie Rich" />
            <h4>Richie Rich</h4>
          </li>
        </ul>
      </li>
      <li>
        <a href="#">Docs</a>
      </li>
      <li>
        <a href="#">Updates</a>
      </li>
      <li>
        <router-link to="/tutorial">Tutorial</router-link>
      </li>
      <li>
        <router-link to="/support">Support</router-link>
      </li>
      <li class="navbar__social">
        <Social />
      </li>
    </ul>
  </nav>
</template>

<script>
import Social from "../common/Social.vue";

export default {
  name: "App",
  components: {
    Social,
  },
  data: () => {
    return {
      toggleMenu: false,
      toggleDropdown: false,
    };
  },
  methods: {
    resetToggle() {
      this.toggleMenu = false;
      this.toggleDropdown = false;
    },
    to(link){
      this.toggleMenu = false;
      this.$router.push(link)
    }
  },
  watch: {
    $route(to, from) {
      this.resetToggle();
    },
  },
};
</script>


<style lang="scss">
.navbar {
  z-index: 1200;
  padding: 0 10%;
  display: flex;
  width: 100vw;
  height: 135px;
  background: white;
  position: absolute;
  justify-content: flex-start;
  justify-items: flex-end;
  align-content: center;
  align-items: center;
  top: 50px;
  left: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;

  @media (max-width: 1024px) {
    height: 80px;
  }

  & .btn-menu {
    display: none;
  }
  & a {
    padding: 5px;
  }
  & .logo {
    z-index: 1204;
  }
  & .logo img {
    height: 70px;
    @media (max-width: 414px) {
      height: 40px;
    }
  }
  &__navbar-list {
    width: 100%;
    position: absolute;
    left: 0;
    display: flex;
    justify-content: center;
    justify-items: center;
    list-style: none;

    & li {
      padding: 30px 20px;
      & a:hover {
        border-bottom: 2px solid var(--primary);
      }
    }
    @media (max-width: 1024px) {
      display: none;
      position: fixed;
      background: var(--primary);
      width: 100%;
      margin: 0;
      top: 0;
      left: 0;
      padding: 24px;
      padding-top: 80px;
      &.show {
        display: block;
      }
    }
  }

  &__social {
    display: none;
  }

  &__close-btn {
    display: none;
  }

  @media (max-width: 1024px) {
    justify-content: center;
    justify-items: center;
    top: 0;
    & .btn-menu {
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      background: var(--primary);
      padding: 18px;
      height: 80px;
    }

    &__social {
      display: block;
    }

    &__close-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      display: block;
      display: flex;
      width: 100%;
      & svg {
        margin-left: auto;
      }
    }
  }

  & .nav-dropdown {
    cursor: pointer;
    position: relative;
    & span {
      padding-right: 10px;
    }
  }
  & .navbar-dropdown {
    display: none;
    position: absolute;
    background: white;
    list-style: none;
    margin-left: -50%;
    width: 300px;
    border: 1px solid var(--dark-1);
    border-radius: 15px;
    margin-top: 15px;
    & li {
      display: flex;
      align-items: center;
      align-content: center;
      & h4 {
        padding-left: 20px;
      }
      &:hover {
        background: var(--primary);
        border-radius: 15px;
        cursor: pointer;
      }
      & a {
        display: flex;
      }
    }
    &.show {
      display: block;
    }
    @media (max-width: 1024px) {
      margin-left: 0;
    }
  }
  @media (min-width:1024px){
      & .nav-dropdown:hover .navbar-dropdown{
          display: block;
      }
  }
}
</style>