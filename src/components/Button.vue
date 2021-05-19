<template>
  <button :class="ClassName">
    {{ text }}
  </button>
</template>
<script>
export default {
  props: {
    text: String,
    primary: String,
    primaryYellow: String,
    secondary: String,
    link: String,
  },
  data() {
    return {
      ClassName: "",
    };
  },
  created() {
    this.ClassName = "btn btn-primary";
  },
};
</script>
<style lang="scss" scoped>
button {
  border: none;
}
button:focus {
  outline: none;
}
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
  color: var(--background);
  border: 1px solid #4e4b66;
  border-radius: 8px;
}
.btn-secondary:hover {
  background: #fff2b7;
}

.btn-link {
  padding: 8px;
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
</style>
