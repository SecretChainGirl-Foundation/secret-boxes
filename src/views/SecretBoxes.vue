<template>
  <div class="box">
    <ul class="list-box">
      <li class="right-to-left">
        <lottie-player
          src="https://assets5.lottiefiles.com/private_files/lf30_sqamzndl.json"
          background="transparent"
          speed="1"
          class="image"
          loop
          autoplay
        ></lottie-player>

        <div class="box-item">
          <div class="text">
            <h3 class="title">
              SECRET COUNTER
              <a class="btn btn-secondary" href="#">New</a>
            </h3>
            <br />
            <p class="description">
              This is the starting point for learning about Secret Contracts.
              Based on the “simple counter” secret contract this box illustrates
              the basics of querying and modifying contract state using the
              “getCount” and “increment” messages.
            </p>
            <br />
          </div>
          <div class="action">
            <router-link to="/secret/counter" class="btn btn-primary mr-3"
              >Let’s Go!</router-link
            >
            <a target="_BLANK" href="/docs" class="btn btn-secondary mr-3"
              >Docs</a
            >
            <a href="#" class="btn btn-secondary">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0.197266C3.58267 0.197266 0 3.77927 0 8.19727C0 11.7319 2.292 14.7306 5.47133 15.7886C5.87067 15.8626 6 15.6146 6 15.4039V13.9146C3.77467 14.3986 3.31133 12.9706 3.31133 12.9706C2.94733 12.0459 2.42267 11.7999 2.42267 11.7999C1.69667 11.3033 2.478 11.3139 2.478 11.3139C3.28133 11.3699 3.704 12.1386 3.704 12.1386C4.41733 13.3613 5.57533 13.0079 6.032 12.8033C6.10333 12.2866 6.31067 11.9333 6.54 11.7339C4.76333 11.5306 2.89533 10.8446 2.89533 7.77993C2.89533 6.90593 3.208 6.1926 3.71933 5.6326C3.63667 5.4306 3.36267 4.6166 3.79733 3.51527C3.79733 3.51527 4.46933 3.3006 5.998 4.33527C6.636 4.15793 7.32 4.06927 8 4.06593C8.68 4.06927 9.36467 4.15793 10.004 4.33527C11.5313 3.3006 12.202 3.51527 12.202 3.51527C12.6373 4.61727 12.3633 5.43127 12.2807 5.6326C12.794 6.1926 13.104 6.9066 13.104 7.77993C13.104 10.8526 11.2327 11.5293 9.45133 11.7273C9.738 11.9753 10 12.4619 10 13.2086V15.4039C10 15.6166 10.128 15.8666 10.534 15.7879C13.7107 14.7286 16 11.7306 16 8.19727C16 3.77927 12.418 0.197266 8 0.197266Z"
                  fill="#4E4B66"
                />
              </svg>
              Repo</a
            >
          </div>
        </div>
      </li>
      <li class="left-to-right">
        <lottie-player
          src="https://assets2.lottiefiles.com/private_files/lf30_0vbtxqrd.json"
          background="transparent"
          speed="1"
          class="image"
          loop
          autoplay
        ></lottie-player>
        <div class="box-item">
          <div class="text">
            <h3 class="title">
              FIGMENT LEARN
              <a class="btn btn-secondary" href="#">New</a>
            </h3>
            <br />
            <p class="description">
              Figment Learn is a fun learning pathway to help developers quickly
              learn about working with the Secret Network. Using the DataHub
              gateway you’ll be taken through the steps to deploy a secret
              contract to the testnet, and even get some SCRT tokens for your
              efforts!
            </p>
            <br />
          </div>
          <div class="action">
            <a
              target="_BLANK"
              href="https://learn.figment.io/network-documentation/secret/secret-pathway"
              class="btn btn-primary mr-3"
              >Let’s Go!</a
            >
            <a
              target="_BLANK"
              href="https://learn.figment.io/network-documentation/secret/secret-101"
              class="btn btn-secondary"
              >Docs</a
            >
          </div>
        </div>
      </li>
      <li class="right-to-left">
        <lottie-player
          src="https://assets10.lottiefiles.com/private_files/lf30_woabmjiz.json"
          background="transparent"
          speed="1"
          class="image"
          loop
          autoplay
        ></lottie-player>
        <div class="box-item">
          <div class="text">
            <h3 class="title">
              RICHIE RICH
              <a class="btn btn-secondary" href="#">Coming Soon</a>
            </h3>
            <br />
            <p class="description">
              How do you find out who’s the richest without revealing your net
              worth to the world? This secret box, based on Yao’s Millionaires’
              Problem, illustrates how that can be done with secret contracts.
            </p>
            <br />
          </div>
          <div class="action">
            <a href="#" class="btn btn-primary mr-3">Subscribe</a>
            <a href="#" class="btn btn-secondary">Learn More</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.box {
  padding: 50px 10%;
  width: 100%;
  background: var(--theme-bg-light);
  color: var(--theme-color);
  & .list-box {
    width: 100%;
    list-style: none;
    margin: 0;
    & li {
      padding: 50px 0;
      width: 100%;
      margin-bottom: 10px;
      @media (max-width: 1024px) {
        display: block;
      }
      & .image {
        width: 384px;
        @media (max-width: 1024px) {
          width: 100%;
        }
      }
      & .box-item {
        width: 50%;
        padding: 5%;
        @media (max-width: 1024px) {
          width: 100%;
        }
        & .text {
          width: 100%;
          & .btn {
            margin-left: 10px;
          }
        }
        & .title {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          align-content: center;
          @media (max-width: 1024px) {
            justify-items: center;
            justify-content: center;
          }
          @media (max-width: 414px) {
            margin-top: 0;
            text-align: center;
          }
          & .btn {
            padding: 2px 4px;
          }
        }
        & .action {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          @media (max-width: 1024px) {
            & .btn {
              display: inline-block;
              margin-bottom: 16px;
            }
          }
        }
      }
    }
  }
  .right-to-left {
    display: block;
    & .image {
      float: right;
    }
  }
  .left-to-right {
    display: flex;
  }
}
</style>
