<template>
  <div class="article">
    <h3 class="title">“GripTape” Secret Box Launching</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
      pellentesque tincidunt scelerisque amet velit facilisis accumsan neque.
    </p>
    <div class="image"></div>
    <h5 class="sub-title">Subtitle 1</h5>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
      suspendisse consequat vitae sit malesuada egestas est. Eget pulvinar
      consectetur velit commodo pellentesque nulla feugiat ultrices condimentum.
      Vitae velit aenean netus enim suscipit id. Fringilla eget placerat mi et
      odio ultricies in pharetra, quisque. Lacus, lobortis lacinia etiam
      molestie eu. Iaculis pellentesque enim est augue malesuada. Pellentesque
      sit mauris sit arcu semper amet arcu aliquet. Est ipsum ullamcorper
      facilisi morbi feugiat lobortis egestas sed donec. In quisque pretium
      consequat diam arcu.
    </p>
    <br />
    <p>
      Arcu risus amet quam ut mauris. In ultricies sodales quis ut fermentum
      aenean amet, id. Ac sit senectus sagittis turpis. Eget eu feugiat ipsum
      odio metus gravida velit integer. Maecenas pharetra, rhoncus, id lacus in
      sed leo sollicitudin. In risus nisl consectetur ac commodo enim. Magna
      porttitor elementum morbi volutpat. Dui amet, enim placerat quis commodo
      sed nec, pulvinar feugiat. Lorem urna, aliquam mauris ut integer nulla.
      Ultricies ullamcorper pretium malesuada eu integer justo risus dui non.
    </p>
    <div class="image"></div>
    <h5 class="sub-title">Subtitle 1</h5>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
      suspendisse consequat vitae sit malesuada egestas est. Eget pulvinar
      consectetur velit commodo pellentesque nulla feugiat ultrices condimentum.
      Vitae velit aenean netus enim suscipit id. Fringilla eget placerat mi et
      odio ultricies in pharetra, quisque. Lacus, lobortis lacinia etiam
      molestie eu. Iaculis pellentesque enim est augue malesuada. Pellentesque
      sit mauris sit arcu semper amet arcu aliquet. Est ipsum ullamcorper
      facilisi morbi feugiat lobortis egestas sed donec. In quisque pretium
      consequat diam arcu.
    </p>
    <br />
    <p>
      Arcu risus amet quam ut mauris. In ultricies sodales quis ut fermentum
      aenean amet, id. Ac sit senectus sagittis turpis. Eget eu feugiat ipsum
      odio metus gravida velit integer. Maecenas pharetra, rhoncus, id lacus in
      sed leo sollicitudin. In risus nisl consectetur ac commodo enim. Magna
      porttitor elementum morbi volutpat. Dui amet, enim placerat quis commodo
      sed nec, pulvinar feugiat. Lorem urna, aliquam mauris ut integer nulla.
      Ultricies ullamcorper pretium malesuada eu integer justo risus dui non.
    </p>
    <br />
    <h5 class="sub-title">Thank you for reading!</h5>
    <br />
    <nav class="tags">
      <a href="#">Community</a>
      <a href="#">Hackathon</a>
      <a href="#">COVID-19</a>
      <a href="#">DevOps</a>
      <a href="#">JavaScript</a>
      <a href="#">Angular</a>
    </nav>
    <br />
    <br />
    <br />
    <h4 class="sub-title">More From Secret Box</h4>
    <br />
    <div class="more-artile">
      <div class="card" v-for="i in 3" :key="i">
        <div class="card-image"></div>
        <div class="card-body">
          <div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="7.5" stroke="#4E4B66" />
              <path
                d="M9.85334 5.17679C9.85334 6.20014 9.02375 7.02973 8.0004 7.02973C6.97705 7.02973 6.14746 6.20014 6.14746 5.17679C6.14746 4.15344 6.97705 3.32385 8.0004 3.32385C9.02375 3.32385 9.85334 4.15344 9.85334 5.17679Z"
                stroke="#4E4B66"
              />
              <path
                d="M12.2352 13.1767C12.2352 11.9286 11.789 10.7317 10.9947 9.84915C10.2005 8.96662 9.12321 8.47083 7.99994 8.47083C6.87667 8.47083 5.79941 8.96662 5.00514 9.84915C4.21087 10.7317 3.76465 11.9286 3.76465 13.1767"
                stroke="#4E4B66"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Secret Agent
          </div>
          <h6>Sienna Network</h6>
          <span>Mar 3 . 8 min read</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.article {
  width: 100%;
  position: relative;
  background: var(--grayscale);
  padding: 30px 25%;
  @media (max-width: 1024px) {
    padding: 30px 5%;
  }
  & .title {
    margin-bottom: 30px;
  }
  & .sub-title {
    margin-bottom: 30px;
  }
  & .image {
    margin: 30px 0;
    width: 100%;
    height: 300px;
    background: #c4c4c4;
  }
  & .tags {
    display: flex;
    flex-wrap: wrap;
    & a {
      padding: 10px;
      border-radius: 5px;
      background: #eff0f6;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
  & .more-artile {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 30px;
    border-top: 1px solid var(--primary-gray);
    .card {
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 32%;
      margin-right: 1%;
      background: white;
      margin-bottom: 30px;
      @media (max-width: 1024px) {
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
      }
      & .card-body {
        padding: 5%;
      }
      & .card-image {
        background: var(--primary-gray);
        width: 100%;
        height: 200px;
      }
    }
    .card:hover {
      box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
    }
  }
}
</style>
