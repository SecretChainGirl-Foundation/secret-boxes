<template>
  <section class="hero">
    <div class="hero__text">
      <h1 class="title">SECRET BOXES</h1>
      <p class="description">
        The beautiful, fun and easy way to get started building Secret Apps.
      </p>
      <router-link
        class="btn btn-primary btn-lg btn-icon-hover"
        to="/secret/boxes"
        >Start Unboxing

        <svg
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1665 4.81706L1.1665 4.81706"
            stroke="#FCFCFC"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.1333 0.80083L11.1666 4.81683L7.1333 8.8335"
            stroke="#FCFCFC"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>

      <router-link to="/tutorial" class="btn btn-secondary btn-lg" href="#"
        >Tutorials</router-link
      >
    </div>
    <div class="hero__image">
      <lottie-player
        src="https://assets1.lottiefiles.com/private_files/lf30_5iyj3nbd.json"
        background="transparent"
        speed="1"
        style="width: 100%"
        loop
        autoplay
      ></lottie-player>
    </div>
    <div class="hero__arrow-bottom" @click="$emit('scrollTo', 'about-section')">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.6668 14.1667L20.0002 25.8334L8.3335 14.1667"
          stroke="#200E32"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.hero {
  width: 100%;
  padding: 50px 10%;
  display: flex;
  flex-wrap: wrap;
  background: var(--theme-bg-light);
  color: var(--theme-color);
  &__text {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    padding-right: 10%;

    & .title {
      margin-bottom: 20px;
    }
    & .description {
      margin-bottom: 20px;
      width: 100%;
    }
    & .btn-primary,
    .btn-secondary {
      margin-top: 10px;
      margin-right: 10px;
    }

    @media (max-width: 1024px) {
      width: 100%;
      justify-items: center;
      justify-content: center;
      padding-right: 0;
    }
  }
  &__image {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
    & img {
      width: 90%;
    }
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
  &__arrow-bottom {
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 1024px) {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    text-align: center;
  }
}
</style>
