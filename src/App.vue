<template>
  <div class="app">
    <TopBar />
    <Navbar />
    <main class="main">
      <router-view />
    </main>
    <FooterGlobal />
  </div>
</template>

<script>
import TopBar from "./components/TopBar.vue";
import Navbar from "./components/layout/Navbar.vue";
import FooterGlobal from "./components/layout/FooterGlobal.vue";

export default {
  name: "App",
  components: {
    TopBar,
    Navbar,
    FooterGlobal,
  }
};
</script>

<style lang="scss">
// Global CSS

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


// Reset Default Style
a {
  text-decoration: none;
  color: var(--default);
}
button {
  border: none;
}
button:focus,
input:focus {
  outline: none;
}
// End  Reset Default Style

:root {
  // Variable
  // Color
  --background: #1e2022;
  --dark-5: #121314;
  --dark-4: #2f3133;
  --dark-3: #424345;
  --dark-2: #535556;
  --dark-1: #666769;
  --primary: #f8d948;
  --primary-gray: #939597;
  --secondary: #4867f8;
  --secondary-dark: #0096B7;
  --grayscale: #FCFCFC;
  --grayscale-title-active: #14142B;
  --error-dark: #C30052;
  // Shadow
  --focus-shadow: 0px 0px 16px rgba(255, 217, 17, 0.35);
  --drop-shadow: 3px 6px 10px rgba(0, 0, 0, 0.25);
}

// Typography
.font-gobold {
  font-family: "Gobold High";
}
h1 {
  font-family: "Gobold High";
  font-style: normal;
  font-weight: normal;
  font-size: 96px;
  line-height: 120px;
  /* identical to box height */
  letter-spacing: 1.5px;
}

h2 {
  font-family: "Gobold High";
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 75px;
  /* identical to box height */
  letter-spacing: 1px;
}

h3 {
  font-family: "Gobold High";
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 60px;
  /* identical to box height */
  letter-spacing: 1.5px;
}

h4 {
  font-family: "Gobold High";
  font-style: normal;
  font-weight: normal;
  font-size: 34px;
  line-height: 42px;
  letter-spacing: 2.5px;
}

h5 {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
}

h6 {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.15px;
}

// End Typography

// General
body {
  color: var(--background);
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  // overflow-x: hidden;
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
  width: 100%;
  margin-top: 185px;
  font-size: 1rem;
  @media (max-width: 1024px) {
    margin-top: 80px;
  }
  @media (max-width: 250px) {
    font-size: .5rem;
  }
}

// End General

// Button Style

.btn {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 1.25px;
  text-transform: capitalize;
  padding: 8px 20px;
  cursor: pointer;
}
.btn-primary {
  background: #4e4b66;
  border-radius: 10px;
  color: white;
}
.btn-primary:hover {
  background: #6e7191;
}
.btn-primary-yellow {
  background: var(--primary);
  border-radius: 10px;
  color: var(--background);
  font-weight: normal;
}

.btn-secondary {
  background: #fcfcfc;
  border: 1px solid #4e4b66;
  border-radius: 8px;
}
.btn-secondary:hover {
  background: #fff2b7;
}

.btn-link {
  padding:8px;
  background: #fcfcfc;
  border-radius: 8px;
}
.btn-link:hover {
  background: #fff2b7;
}
.btn-icon-hover svg {
  display: none;
}
.btn-icon-hover:hover svg {
  display: inline-block;
  margin-left: 10px;
}

.btn-lg {
  padding: 16px 16px;
}
.btn-sm {
  padding: 8px;
  font-size: 14px;
  font-weight: normal;
}
// End Button Style

// Margin
.mt-4 {
  margin-top: 24px;
}
.mt-5 {
  margin-top: 32px;
}
.mr-3 {
  margin-right: 16px;
}


// Color
.text-primary{
  color: var(--primary);
}

</style>
