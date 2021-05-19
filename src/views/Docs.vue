<template>
  <div class="box">
    <div class="list-menu-wrapper">
      <ul class="list-menu">
        <li v-for="menu in listMenu" :key="menu.id">
          <h6 @click="subListMenuActive(menu.id)">
            <router-link :to="menu.link"
              ><s-icon :name="menu.icon" /> {{ menu.name }}
              <svg
                class="arrow-icon"
                v-if="menu.sub"
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66602 1.33341L6.33268 6.00008L1.66602 10.6667"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </router-link>
          </h6>
          <ul class="list-menu" v-if="menu.sub">
            <li
              v-for="submenu in menu.sub"
              :key="submenu.id"
              :class="
                menuActive.includes(menu.id)
                  ? 'sub-list-menu active'
                  : 'sub-list-menu'
              "
            >
              <h6 @click="subListMenuActive(submenu.id)">
                <router-link :to="submenu.link"
                  ><s-icon :name="submenu.icon" /> {{ submenu.name }}
                  <svg
                    class="arrow-icon"
                    v-if="submenu.sub"
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.66602 1.33341L6.33268 6.00008L1.66602 10.6667"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </router-link>
              </h6>
              <ul class="list-menu" v-if="submenu.sub">
                <li
                  v-for="submenu1 in submenu.sub"
                  :key="submenu1.id"
                  :class="
                    menuActive.includes(submenu.id)
                      ? 'sub-list-menu active'
                      : 'sub-list-menu'
                  "
                >
                  <h6>
                    <router-link :to="submenu1.link">
                      <s-icon :name="submenu1.icon" /> {{ submenu1.name }}
                    </router-link>
                  </h6>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div
      :class="
        $route.path == '/docs'
          ? 'content-wrapper full-width'
          : 'content-wrapper'
      "
    >
      <s-docs-home v-if="$route.path == '/docs'" />
      <div v-else>
        <h2>Error and How to Resolve Them</h2>
        <br />
        <h6 class="solution1">Solution 1</h6>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam id
          voluptate beatae natus, culpa voluptatum quo consectetur sed autem
          amet in voluptates rerum reprehenderit. Minus voluptatem in mollitia
          voluptas dolore.
        </p>
        <br />
        <h6 class="solution2">Solution 2</h6>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam id
          voluptate beatae natus, culpa voluptatum quo consectetur sed autem
          amet in voluptates rerum reprehenderit. Minus voluptatem in mollitia
          voluptas dolore.
        </p>
        <br />
        <h6 class="common-error">Common Error</h6>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam id
          voluptate beatae natus, culpa voluptatum quo consectetur sed autem
          amet in voluptates rerum reprehenderit. Minus voluptatem in mollitia
          voluptas dolore.
        </p>
        <br />
        <h6 class="error-table">Error Table</h6>
        <br />
        <div class="card-qa-article">
          <h6>What this article useful?</h6>
          <div class="action">
            <button class="btn btn-primary">Yes</button>
            <button class="btn btn-secondary">No</button>
          </div>
        </div>

        <span class="text-suggestion">
          Have a Suggestion ? <a href="#">Edit this doc on github</a>
        </span>
      </div>
    </div>
    <ul class="list-menu-wrapper-right" v-if="$route.path !== '/docs'">
      <li @click="scrollToElement('solution1')">Solution 1</li>
      <li @click="scrollToElement('solution2')">Solution 2</li>
      <li @click="scrollToElement('common-error')">Common Error</li>
      <li @click="scrollToElement('error-table')">Error Table</li>
    </ul>
  </div>
</template>
<script>
import SIcon from "../components/common/Icon.vue";
import SDocsHome from "./docs/home.vue";

export default {
  components: {
    SIcon,
    SDocsHome,
  },
  data() {
    return {
      menuActive: [],
      listMenu: [
        {
          id: 0,
          icon: "home",
          name: "Home",
          link: "/docs",
        },
        {
          id: 1,
          icon: "rocket",
          name: "Getting Started",
          link: "#",
          sub: [
            {
              id: 10,
              name: "Submenu",
              link: "#",
              sub: [
                {
                  id: 11,
                  name: "Submenu 1",
                  link: "/docs/getting-started",
                },
              ],
            },
            {
              id: 12,
              name: "Submenu",
              link: "/docs/getting-started",
            },
          ],
        },
        {
          id: 2,
          icon: "boxes",
          name: "Boxes",
          link: "/docs/boxes",
        },
        {
          id: 3,
          icon: "secret-network",
          name: "Secret Network Essentials",
          link: "/docs/secret-network-essetials",
        },
      ],
    };
  },
  methods: {
    subListMenuActive(id) {
      if (!this.menuActive.includes(id)) {
        this.menuActive.push(id);
      } else {
        this.menuActive = this.menuActive.filter((i) => {
          return i !== id;
        });
      }
    },
    scrollToElement(id) {
      const el = this.$el.getElementsByClassName(id)[0];
      console.log(el);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  padding: 50px 10%;
  @media (max-width: 1024px) {
    padding: 50px 5%;
  }
  width: 100%;
  background: var(--theme-bg-light);
  color: var(--theme-color);
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  & .list-menu-wrapper {
    width: 25%;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
  & .content-wrapper {
    width: 60%;
    padding: 16px 30px;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
  & .full-width {
    width: 75%;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
  & .list-menu-wrapper-right {
    width: 15%;
    height: auto;
    list-style: none;
    cursor: pointer;
    border-left: 1px solid var(--theme-color);
    li {
      padding: 16px;
      &:hover {
        color: var(--primary);
      }
    }
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
  & .list-menu {
    list-style: none;
    width: 100%;
    margin: 0;
    padding-left: 10px;
    & li {
      cursor: pointer;
      & h6 a {
        padding: 16px;
        width: 100%;
        border-radius: 10px;
        display: flex;
        align-items: center;
        & .icon {
          padding-right: 10px;
        }
        &:hover {
          color: var(--primary);
          background: var(--theme-bg-light-2);
        }
        & .arrow-icon {
          margin-left: 15px;
        }
      }
    }
  }
  & .sub-list-menu {
    display: none;
    &.active {
      display: block;
    }
  }
}
.card-qa-article {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 20px;
  margin: 16px 0;
  border-radius: 10px;
  background: var(--primary);
  color: var(--background);
  & .action {
    margin-left: auto;
    & .btn {
      margin-top: 10px;
      margin-right: 10px;
    }
  }
}
.text-suggestion {
  display: block;
  width: 100%;
  text-align: right;
  & a {
    color: var(--primary);
  }
}
</style>
