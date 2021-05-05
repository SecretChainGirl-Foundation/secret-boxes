<template>
  <section class="hero">
    <div class="hero__text">
      <h1 class="title">SECRET BOXES</h1>
      <p class="description">
        The beautiful, fun and easy way to get started building Secret Apps.
      </p>
      <a class="btn btn-primary btn-lg btn-icon-hover" href="#"
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
      </a>
      <a class="btn btn-secondary btn-lg" href="#">Tutorials</a>
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
    <div class="hero__arrow-bottom" @click="scrollToElement">
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
    <div class="next-to-about"></div>
  </section>
</template>

<script>
export default {
  methods:{
    scrollToElement() {
      const el = this.$el.getElementsByClassName('next-to-about')[0];
      console.log(el)
      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({behavior: 'smooth'});
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.hero {
  padding: 50px 10%;
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  min-height: 714px;
    background: var(--grayscale);

  &__text {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    padding-right: 10%;

    & .title {
      font-family: Gobold High;
      font-style: normal;
      font-weight: normal;
      font-size: 118px;
      line-height: 147px;
      letter-spacing: 1.5px;
      margin-bottom: 20px;
      color: #091133;
    }
    & .description {
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 32px;
      /* or 133% */

      letter-spacing: 0.15px;

      /* Colour/Main/Blue/900 */

      color: #091133;
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