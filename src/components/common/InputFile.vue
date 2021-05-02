<template>
  <div
    class="input-box"
    @dragover="dragover"
    @dragleave="dragleave"
    @drop="drop"
  >
    <input
      type="file"
      multiple
      name="fields[assetsFieldHandle][]"
      id="assetsFieldHandle"
      class="input-file"
      @change="onChange"
      ref="file"
      accept=".pdf,.jpg,.jpeg,.png"
    />

    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.38948 7.98403H4.45648C2.42148 7.98403 0.771484 9.63403 0.771484 11.669L0.771484 16.544C0.771484 18.578 2.42148 20.228 4.45648 20.228H15.5865C17.6215 20.228 19.2715 18.578 19.2715 16.544V11.659C19.2715 9.63003 17.6265 7.98403 15.5975 7.98403L14.6545 7.98403"
        stroke="#200E32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.0215 1.19057V13.2316"
        stroke="#200E32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.10645 4.11877L10.0214 1.19077L12.9374 4.11877"
        stroke="#200E32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>

    <div class="input-text"><span>Add File</span> or Drop File</div>
    <ul class="mt-4 list-data" v-if="this.filelist.length">
      <li class="text-sm p-1" v-for="file in filelist" :key="file">
        {{ file.name }}
        <button
          class="ml-2"
          type="button"
          @click="remove(filelist.indexOf(file))"
          title="Remove file"
        >
          remove
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filelist: [], // Store our uploaded files
    };
  },
  methods: {
    onChange() {
      this.filelist = [...this.$refs.file.files];
    },
    remove(i) {
      this.filelist.splice(i, 1);
    },
    dragover(event) {
      event.preventDefault();
      // Add some visual fluff to show the user can drop its files
      if (!event.currentTarget.classList.contains("bg-green-300")) {
        event.currentTarget.classList.remove("bg-gray-100");
        event.currentTarget.classList.add("bg-green-300");
      }
    },
    dragleave(event) {
      // Clean up
      event.currentTarget.classList.add("bg-gray-100");
      event.currentTarget.classList.remove("bg-green-300");
    },
    drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange(); // Trigger the onChange event manually
      // Clean up
      event.currentTarget.classList.add("bg-gray-100");
      event.currentTarget.classList.remove("bg-green-300");
    },
  },
};
</script>

<style lang="scss">
.input-box {
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: center;
  /* Grayscale / Background */
  background: #f7f7fc;
  /* Grayscale / Body */
  border: 1px solid #4e4b66;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 16px 16px;
  width: 70%;
  @media (max-width: 1024px) {
    width: 100%;
  }
  & ul{
    width: 100%;
    list-style: none;
    padding: 10px 10%;
  }
  & svg {
    margin-right: auto;
    width: 10%;
  }
  & .input-file {
    position: absolute;
    opacity: 0;
  }
  & .input-text {
    width: 90%;
    text-align: center;
    & span {
      color: var(--secondary-dark);
    }
  }
}
</style>
