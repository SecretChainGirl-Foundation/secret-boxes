<template>
  <div :class="($store.state.darkMode == true) ? 'dark-mode' : ''">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
  },
};
</script>
