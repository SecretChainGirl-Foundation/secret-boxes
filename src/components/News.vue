<template>
  <section class="news">
    <h1 class="title">NEWS & UPDATES</h1>
    <p class="description">
      What’s going on in the Secret Boxes universe? Here is where devs can find
      out about new Secret Boxes, launch announcements, protocol updates,
      developer working groups and more.
    </p>
    <div class="news__list">
      <div class="rectangle">
        <div class="content" style="background-image: url('/img/news-1.png')">
          <div class="bg-layer"></div>
          <h3 class="title">“GripTape” Secret Box Launching Soon</h3>
          <p>
            Brought to you by the Stake or Die! team, GripTape makes it easy to
            interact with the network.
          </p>
        </div>
      </div>
      <div class="square">
        <div class="content" style="background-image: url('/img/news-2.png')">
          <div class="bg-layer"></div>
          <h3 class="title">“Richie Rich” Secret Box</h3>
          <p>Who’s the richest?</p>
        </div>
      </div>
      <div class="square">
        <div class="content" style="background-image: url('/img/news-3.png')">
          <div class="bg-layer"></div>
          <h3 class="title">Secret Voting Box</h3>
          <p>Vote early, often and in private.</p>
        </div>
      </div>
      <div class="rectangle" style="align-items: flex-end">
        <div class="content" style="background-image: url('/img/news-4.png')">
          <div class="bg-layer"></div>
          <h3 class="title">Sienna Network</h3>
          <p>First DeFi Protocol built on Secret Network.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.news {
  padding: 50px 10%;
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  background: var(--grayscale);
  & .title {
    padding: 30px 0;
    width: 100%;
    text-align: center;
  }
  & .description {
    padding: 0 20%;
    padding-bottom: 50px;
    width: 100%;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.15px;
    @media (max-width: 414px) {
      padding: 0 5%;
    }
  }
  &__list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    & .rectangle {
      width: 70%;
      height: 350px;
      padding: 10px;
      @media (max-width: 1024px) {
        width: 100%;
      }
    }
    & .square {
      width: 30%;
      height: 350px;
      padding: 10px;
      @media (max-width: 1024px) {
        width: 50%;
      }
    }
    & .rectangle .content,
    .square .content {
      position: relative;
      background-color: var(--dark-1);
      width: 100%;
      height: 100%;
      border-radius: 10px;
      padding: 10px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
    & .rectangle .bg-layer,
    .square .bg-layer {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: var(--dark-1);
      opacity: 0.5;
      border-radius: 10px;
    }

    & .rectangle:hover .bg-layer,
    .square:hover .bg-layer {
      background-color: var(--dark-5);
      opacity: 0.8;
    }
    & .title,
    p {
      width: 100%;
      text-align: left;
      bottom: 0;
      color: white;
      position: absolute;
    }
    & p {
      display: none;
    }
    & .rectangle:hover .title,
    .rectangle:hover p,
    .square:hover .title,
    .square:hover p {
      width: 100%;
      text-align: center;
      bottom: 20%;
      color: white;
      position: absolute;
      display: inline-block;
    }

    & .bg-layer:hover .rectangle .title {
      left: 0;
      text-align: center;
    }
    @media (max-width: 414px) {
      display: none;
    }
  }
}
</style>
