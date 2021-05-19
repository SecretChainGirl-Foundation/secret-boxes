<template>
  <nav :class="page == 'docs' ? 'navbar docs-layout' : 'navbar default-layout'">
    <router-link to="/" class="logo">
      <img
        v-if="$store.state.darkMode == 0"
        src="/Logo Black.png"
        alt="Secret Box Logo"
      />
      <img v-else-if="toggleMenu" src="/Logo Black.png" alt="Secret Box Logo" />
      <img v-else src="/Logo White.png" alt="Secret Box Logo" />
      <h4 v-if="page == 'docs'">Secret Boxes Guide</h4>
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
          fill="currentColor"
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
      <li class="nav-dropdown">
        <div
          class="nav-dropdown-link"
          @click="toggleDropdown = !toggleDropdown"
        >
          <span>Boxes</span>
          <svg
            v-if="!toggleDropdown"
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L9 9L17 1"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            v-else
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8.5L8 1.5L15 8.5"
              stroke="currentColor"
              stroke-width="1.5"
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
          <li @click="scrollTo('about-section')">
            <img src="/img/box-blue.png" alt="Figment learn" />
            <h4>Figment learn</h4>
          </li>
          <li @click="scrollTo('about-section')">
            <img src="/img/box-orange.png" alt="Richie Rich" />
            <h4>Richie Rich</h4>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/docs">Docs</router-link>
      </li>
      <li>
        <router-link to="/updates">Updates</router-link>
      </li>
      <li>
        <router-link to="/tutorials">Tutorial</router-link>
      </li>
      <li>
        <router-link to="/support">Support</router-link>
      </li>
      <li v-if="page == 'docs'">
        <div class="search-form">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="7.84394"
              cy="7.84442"
              r="5.99237"
              stroke="#200E32"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.0117 12.3235L14.3611 14.6667"
              stroke="#200E32"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <input type="text" placeholder="Search .." />
        </div>
      </li>
      <li @click="$store.commit('darkModeToggle')" class="dark-mode-settings">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.9618 9.79C17.8045 11.4922 17.1657 13.1144 16.1201 14.4668C15.0744 15.8192 13.6653 16.8458 12.0575 17.4265C10.4497 18.0073 8.7098 18.1181 7.04132 17.7461C5.37283 17.3741 3.84481 16.5345 2.63604 15.3258C1.42727 14.117 0.587755 12.589 0.215723 10.9205C-0.156309 9.25202 -0.0454686 7.51208 0.535275 5.9043C1.11602 4.29651 2.14265 2.88737 3.49503 1.84175C4.84741 0.79614 6.46961 0.157305 8.17182 0C7.17523 1.34827 6.69566 3.00945 6.82035 4.68141C6.94503 6.35338 7.66568 7.92506 8.85122 9.1106C10.0368 10.2961 11.6084 11.0168 13.2804 11.1415C14.9524 11.2662 16.6135 10.7866 17.9618 9.79Z"
            fill="currentColor"
          />
        </svg>
      </li>
      <li class="navbar__social">
        <Social />
      </li>
    </ul>
  </nav>
</template>

<script>
import Social from "./common/Social.vue";

export default {
  props: ["page"],
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
    to(link) {
      this.$router.push(link);
      this.toggleMenu = false;
      this.toggleDropdown = false;
    },
    scrollTo(el) {
      if(this.$route.path !== '/'){
        this.$router.push("/#"+el)
      }else{
        this.toggleMenu = false;
        this.toggleDropdown = false;
        this.$emit("scrollTo", el);
      }
    },
  },
  watch: {
    $route() {
      this.resetToggle();
    },
  },
};
</script>

<style lang="scss">
.dark-mode-settings{
  cursor: pointer;
}
.navbar {
  z-index: 1200;
  padding: 0 10%;
  display: flex;
  width: 100vw;
  height: 135px;
  background: var(--theme-bg);
  color: var(--theme-color);
  justify-content: center;
  align-items: center;
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
    padding: 3px 5px;
  }
  & .logo {
    display: flex;
    z-index: 1204;
    & h4 {
      padding: 16px;
      @media (max-width: 1024px) {
        display: none;
      }
    }
  }
  & .logo img {
    height: 70px;
    @media (max-width: 414px) {
      height: 40px;
    }
  }
  &__navbar-list {
    width: 100%;
    left: 0;
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
    & li {
      padding: 30px 16px;
      & a:hover {
        border-bottom: 2px solid var(--primary);
      }
    }
    @media (max-width: 1024px) {
      display: none;
      position: fixed;
      background: var(--primary);
      color: var(--background);
      width: 100%;
      margin: 0;
      top: 0;
      left: 0;
      padding: 24px;
      padding-top: 80px;
      overflow-y: scroll;
      height: 100%;
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
    & .nav-dropdown-link {
      &:hover {
        border-bottom: 2px solid var(--primary);
      }
    }
  }
  & .navbar-dropdown {
    display: none;
    position: absolute;
    background: white;
    color: var(--background);
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

  & .search-form {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 10px;
    padding: 0 16px;
    background: white;
    & input {
      width: 90%;
      padding: 16px;
      border-radius: 10px;
      border: 0;
      &:focus {
        outline: none;
      }
    }
  }
}

.default-layout {
  margin-top: 50px;
  @media (max-width: 1024px) {
    margin-top: 0;
  }
}
.docs-layout .logo {
  width: 35%;
  @media (max-width: 1552px) {
    width: 50%;
  }
  @media (max-width: 1024px) {
    width: auto;
  }
  @media (max-width: 1282px) {
    width: 20%;
    h4 {
      display: none;
    }
  }
}
.docs-layout .search-form {
  @media (max-width: 1552px) {
    display: none;
  }
}
</style>
