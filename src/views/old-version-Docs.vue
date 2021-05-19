<template>
  <div class="box">
    <ul class="list-menu">
      <li v-for="i in 10" :key="i">
        <h6 @click="subListMenuActive(i)">Lorem ipsum {{ i }}</h6>
        <ul
          :class="
            menuActive.includes(i) ? 'sub-list-menu active' : 'sub-list-menu'
          "
        >
          <li>
            <h6>
              <svg
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.500244" width="8" height="8" fill="#14142B" /></svg
              >Lorem ipsum
            </h6>
          </li>
          <li>
            <h6>
              <svg
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.500244" width="8" height="8" fill="#14142B" />
              </svg>

              Lorem ipsum
            </h6>
          </li>
          <li>
            <h6>
              <svg
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.500244" width="8" height="8" fill="#14142B" />
              </svg>
              Lorem ipsum
            </h6>
          </li>
        </ul>
      </li>
      <li>
        <h6 style="display: flex">
          <span>FAQ </span>
          <svg
            style="margin-left: 10px"
            width="20"
            height="20"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.7161 14.7234H5.49609"
              stroke="#200E32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.7161 10.5369H5.49609"
              stroke="#200E32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.25109 6.36011H5.49609"
              stroke="#200E32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.9085 1.24976C12.9085 1.24976 5.23149 1.25376 5.21949 1.25376C2.45949 1.27076 0.750488 3.08676 0.750488 5.85676V15.0528C0.750488 17.8368 2.47249 19.6598 5.25649 19.6598C5.25649 19.6598 12.9325 19.6568 12.9455 19.6568C15.7055 19.6398 17.4155 17.8228 17.4155 15.0528V5.85676C17.4155 3.07276 15.6925 1.24976 12.9085 1.24976Z"
              stroke="#200E32"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </h6>
      </li>
      <li>
        <h6>
          <div class="form-group">
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="7.84442"
                  cy="7.84442"
                  r="5.99237"
                  stroke="#200E32"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.0122 12.3235L14.3616 14.6667"
                  stroke="#200E32"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <input type="text" placeholder="Search" />
          </div>
        </h6>
      </li>
    </ul>
    <ul class="list-box">
      <li class="content-center">
        <img src="/img/secret-box-big.png" alt="Secret Box" />
        <div class="title">
          <h2>Secret Apps</h2>
          <div class="dropdown-btn">
            <div class="dropdown-icon" @click="dropDownChat = !dropDownChat">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0067 2C13.6245 2 15.2361 2.39907 16.668 3.15403C21.5432 5.72638 23.4181 11.7855 20.8475 16.6624C19.0942 19.9879 15.642 22 11.9953 22C11.2829 22 10.5634 21.9234 9.84741 21.7648C9.44408 21.6749 9.18957 21.275 9.27851 20.8715C9.36746 20.468 9.76639 20.2152 10.1724 20.3024C13.8966 21.1305 17.7415 19.3431 19.523 15.9638C21.7088 11.8181 20.1148 6.66546 15.9696 4.47897C14.7526 3.83676 13.3823 3.4976 12.0059 3.4976H11.9962C7.31028 3.4976 3.4971 7.31119 3.4971 11.9987C3.49534 13.3641 3.82822 14.7234 4.45964 15.9312L4.65162 16.3065C4.88675 16.747 4.93871 17.294 4.78636 17.7891C4.57588 18.3441 4.40064 18.8841 4.25621 19.4215C4.81806 19.2523 5.50408 19.003 5.99988 18.8224L6.20331 18.7493C6.58815 18.6057 7.02055 18.8092 7.16145 19.1986C7.30235 19.5871 7.10069 20.017 6.71232 20.1571L6.51154 20.2302L6.47736 20.2426L6.47733 20.2426C5.73908 20.5101 4.74506 20.8703 4.0704 21.0213C4.01227 21.0336 3.94975 21.0415 3.89251 21.0398C3.43281 21.0398 3.15277 20.8539 2.99865 20.6971C2.76176 20.4566 2.64904 20.1192 2.66225 19.6946C2.66401 19.6461 2.67017 19.5959 2.68162 19.5475C2.85951 18.7899 3.09112 18.034 3.37117 17.3019C3.39142 17.2306 3.37909 17.1011 3.32185 16.9927L3.12899 16.6183C2.39013 15.2035 1.99824 13.6029 2.00001 11.9978C2.00001 6.48487 6.48424 2 11.9953 2H12.0067ZM6.40348 11.9991C6.40348 11.3428 6.93627 10.8098 7.59235 10.8098C8.24843 10.8098 8.78122 11.3428 8.78122 11.9991C8.78122 12.6545 8.24843 13.1875 7.59235 13.1875C6.93627 13.1875 6.40348 12.6545 6.40348 11.9991ZM13.1845 11.9988C13.1845 11.3433 12.6517 10.8095 11.9956 10.8095C11.3396 10.8095 10.8068 11.3433 10.8068 11.9988C10.8068 12.6542 11.3396 13.188 11.9956 13.188C12.6517 13.188 13.1845 12.6542 13.1845 11.9988ZM16.3989 10.8095C17.0549 10.8095 17.5877 11.3433 17.5877 11.9988C17.5877 12.6542 17.0549 13.188 16.3989 13.188C15.7428 13.188 15.21 12.6542 15.21 11.9988C15.21 11.3433 15.7428 10.8095 16.3989 10.8095Z"
                  fill="#200E32"
                />
              </svg>
            </div>
            <ul class="dropdown-list">
              <li>
                <h6>Join Chat</h6>
              </li>
              <li>Discord</li>
              <li>Secret Forum</li>
            </ul>
          </div>
        </div>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer urna,
          tristique ligula morbi at. Dolor, sit sed aliquet fringilla
          suspendisse
        </p>
        <br />
        <code> npm install - feugiat in </code>
      </li>
      <li>
        <div class="text">
          <h6 class="title">Lorem ipsum dolor</h6>
          <br />
          <p class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            urna, tristique ligula morbi at. Dolor, sit sed aliquet fringilla
            suspendisse consequat nunc. Dis quis a vulputate purus duis a
            adipiscing tempus amet. Aliquet habitasse lectus condimentum ornare
            eget viverra dolor turpis. Vitae auctor tempor turpis amet aliquam
            consequat neque, id. Enim, nec pellentesque sit est quisque neque.
            Augue ipsum, turpis non dolor. Molestie risus sit viverra nunc
            tellus. Vel dui integer morbi rhoncus non in. Eu blandit molestie
            lorem aenean nibh.
          </p>
          <br />
        </div>
        <div class="image">
          <img src="/img/ufo-5.png" alt="Lorem" />
        </div>
      </li>
      <li>
        <div class="text">
          <h6 class="title">Lorem ipsum dolor</h6>
          <br />
          <p class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            urna, tristique ligula morbi at. Dolor, sit sed aliquet fringilla
            suspendisse consequat nunc. Dis quis a vulputate purus duis a
            adipiscing tempus amet. Aliquet habitasse lectus condimentum ornare
            eget viverra dolor turpis. Vitae auctor tempor turpis amet aliquam
            consequat neque, id. Enim, nec pellentesque sit est quisque neque.
            Augue ipsum, turpis non dolor. Molestie risus sit viverra nunc
            tellus. Vel dui integer morbi rhoncus non in. Eu blandit molestie
            lorem aenean nibh.
          </p>
          <br />
        </div>
        <div class="image">
          <img src="/img/ufo-5.png" alt="Lorem" />
        </div>
      </li>
      <li>
        <div class="text">
          <h6 class="title">Lorem ipsum dolor</h6>
          <br />
          <p class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            urna, tristique ligula morbi at. Dolor, sit sed aliquet fringilla
            suspendisse consequat nunc. Dis quis a vulputate purus duis a
            adipiscing tempus amet. Aliquet habitasse lectus condimentum ornare
            eget viverra dolor turpis. Vitae auctor tempor turpis amet aliquam
            consequat neque, id. Enim, nec pellentesque sit est quisque neque.
            Augue ipsum, turpis non dolor. Molestie risus sit viverra nunc
            tellus. Vel dui integer morbi rhoncus non in. Eu blandit molestie
            lorem aenean nibh.
          </p>
          <br />
        </div>

        <div class="github-star">
          <div class="star">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M8 0.150024C3.58267 0.150024 0 3.73202 0 8.15002C0 11.6847 2.292 14.6834 5.47133 15.7414C5.87067 15.8154 6 15.5674 6 15.3567V13.8674C3.77467 14.3514 3.31133 12.9234 3.31133 12.9234C2.94733 11.9987 2.42267 11.7527 2.42267 11.7527C1.69667 11.256 2.478 11.2667 2.478 11.2667C3.28133 11.3227 3.704 12.0914 3.704 12.0914C4.41733 13.314 5.57533 12.9607 6.032 12.756C6.10333 12.2394 6.31067 11.886 6.54 11.6867C4.76333 11.4834 2.89533 10.7974 2.89533 7.73269C2.89533 6.85869 3.208 6.14536 3.71933 5.58536C3.63667 5.38336 3.36267 4.56936 3.79733 3.46802C3.79733 3.46802 4.46933 3.25336 5.998 4.28802C6.636 4.11069 7.32 4.02202 8 4.01869C8.68 4.02202 9.36467 4.11069 10.004 4.28802C11.5313 3.25336 12.202 3.46802 12.202 3.46802C12.6373 4.57002 12.3633 5.38402 12.2807 5.58536C12.794 6.14536 13.104 6.85936 13.104 7.73269C13.104 10.8054 11.2327 11.482 9.45133 11.68C9.738 11.928 10 12.4147 10 13.1614V15.3567C10 15.5694 10.128 15.8194 10.534 15.7407C13.7107 14.6814 16 11.6834 16 8.15002C16 3.73202 12.418 0.150024 8 0.150024Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.150024)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>Star</span>
          </div>
          <div class="total">4,000</div>
        </div>
      </li>
      <li class="right-to-left">
        <div class="image">
          <img src="/img/alien-2.png" alt="Alien" />
        </div>
        <div class="box-item">
          <div class="text">
            <h6 class="title">Lorem ipsum dolor</h6>
            <br />
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              urna, tristique ligula morbi at. Dolor, sit sed aliquet fringilla
              suspendisse consequat nunc. Dis quis a vulputate purus duis a
              adipiscing tempus amet. Aliquet habitasse lectus condimentum
              ornare eget viverra dolor turpis. Vitae auctor tempor turpis amet
              aliquam consequat neque, id. Enim, nec pellentesque sit est
              quisque neque. Augue ipsum, turpis non dolor. Molestie risus sit
              viverra nunc tellus. Vel dui integer morbi rhoncus non in. Eu
              blandit molestie lorem aenean nibh.
            </p>
            <br />
          </div>
        </div>
      </li>
      <li class="left-to-right">
        <div class="image">
          <img src="/img/alien-2.png" alt="Alien" />
        </div>
        <div class="box-item">
          <div class="text">
            <h6 class="title">Lorem ipsum dolor</h6>
            <br />
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              urna, tristique ligula morbi at. Dolor, sit sed aliquet fringilla
              suspendisse consequat nunc. Dis quis a vulputate purus duis a
              adipiscing tempus amet. Aliquet habitasse lectus condimentum
              ornare eget viverra dolor turpis. Vitae auctor tempor turpis amet
              aliquam consequat neque, id. Enim, nec pellentesque sit est
              quisque neque. Augue ipsum, turpis non dolor. Molestie risus sit
              viverra nunc tellus. Vel dui integer morbi rhoncus non in. Eu
              blandit molestie lorem aenean nibh.
            </p>
            <br />
          </div>
        </div>

        <div class="github-star">
          <div class="star">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  d="M8 0.150024C3.58267 0.150024 0 3.73202 0 8.15002C0 11.6847 2.292 14.6834 5.47133 15.7414C5.87067 15.8154 6 15.5674 6 15.3567V13.8674C3.77467 14.3514 3.31133 12.9234 3.31133 12.9234C2.94733 11.9987 2.42267 11.7527 2.42267 11.7527C1.69667 11.256 2.478 11.2667 2.478 11.2667C3.28133 11.3227 3.704 12.0914 3.704 12.0914C4.41733 13.314 5.57533 12.9607 6.032 12.756C6.10333 12.2394 6.31067 11.886 6.54 11.6867C4.76333 11.4834 2.89533 10.7974 2.89533 7.73269C2.89533 6.85869 3.208 6.14536 3.71933 5.58536C3.63667 5.38336 3.36267 4.56936 3.79733 3.46802C3.79733 3.46802 4.46933 3.25336 5.998 4.28802C6.636 4.11069 7.32 4.02202 8 4.01869C8.68 4.02202 9.36467 4.11069 10.004 4.28802C11.5313 3.25336 12.202 3.46802 12.202 3.46802C12.6373 4.57002 12.3633 5.38402 12.2807 5.58536C12.794 6.14536 13.104 6.85936 13.104 7.73269C13.104 10.8054 11.2327 11.482 9.45133 11.68C9.738 11.928 10 12.4147 10 13.1614V15.3567C10 15.5694 10.128 15.8194 10.534 15.7407C13.7107 14.6814 16 11.6834 16 8.15002C16 3.73202 12.418 0.150024 8 0.150024Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0 0.150024)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>Star</span>
          </div>
          <div class="total">4,000</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuActive: [],
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
  },
};
</script>
<style lang="scss" scoped>
.box {
  padding: 50px 10%;
  width: 100%;
  background: var(--grayscale);
  display: flex;
  flex-wrap: wrap;
  & .list-menu {
    list-style: none;
    width: 30%;
    @media (max-width: 1024px) {
      width: 100%;
    }
    margin: 0;

    & li {
      cursor: pointer;
      background: white;
      & h6 {
        margin: 0 10%;
        padding: 16px;
        width: 80%;
        border-bottom: 1px solid #c2c2e3;
        &:hover {
          border-radius: 2px;
          background: var(--primary);
        }
      }
      & ul {
        margin-left: 20px;
        list-style: none;
        & li {
          display: flex;
          & svg {
            margin-right: 10px;
          }
        }
      }
      & .form-group {
        border: 1px solid #4e4b66;
        padding: 8px;
        border-radius: 10px;
        width: 100%;
        display: flex;
        & span {
          width: 24px;
        }
        &:hover input {
          background: var(--primary);
        }
        & input {
          border: 0;
          width: 100%;
          border-radius: 10px;
          padding: 2px 4px;
        }
      }

      & .sub-list-menu {
        display: none;
      }
      & .active {
        display: block;
      }
    }
  }
  & .list-box {
    width: 70%;
    @media (max-width: 1024px) {
      width: 100%;
    }
    list-style: none;
    margin: 0;
    padding: 0 5%;
    & .content-center {
      text-align: center;
      width: 100%;
      & .title {
        position: relative;
        & .dropdown-btn {
          position: absolute;
          top: 40%;
          right: 20%;
          @media (max-width: 600px) {
            right: 2%;
          }
        }
      }
      & .dropdown-btn {
        cursor: pointer;
        position: relative;
        width: 50px;
        margin-left: 30px;
        &:hover .dropdown-list {
          display: inline-block;
        }
        & .dropdown-list {
          &:after {
            content: "";
            position: absolute;
            left: 30px;
            margin-left: -5px;
            top: -20px;
            transform: rotate(90deg);
            border: 10px solid #eff0f7;
            border-color: transparent #eff0f7 transparent transparent;
          }
          width: 180px;
          display: none;
          list-style: none;
          position: absolute;
          background: #eff0f7;
          border-radius: 2px;
          top: 35px;
          left: -10px;
          & li {
            padding: 8px 16px;
            &:hover {
              font-weight: bold;
              background: var(--primary);
              color: var(--background);
            }
          }
        }
      }
      & code {
        text-align: left;
        background: #4e4b66;
        color: white;
        padding: 8px 16px;
        width: 100%;
        display: block;
      }
    }
    & li {
      padding: 50px 0;
      width: 100%;
      margin-bottom: 10px;
      @media (max-width: 1024px) {
        display: block;
      }
      & .image {
        width: 50%;
        text-align: center;
        margin: 30px 0;
        @media (max-width: 1024px) {
          width: 100%;
          margin-bottom: 30px;
        }
        & img {
          height: 100%;
          @media (max-width: 1024px) {
            width: 80%;
            height: auto;
            margin: 0;
          }
        }
      }
      & .box-item {
        width: 50%;
        @media (max-width: 1024px) {
          width: 100%;
        }
        & .text {
          width: 100%;
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
        }
      }
    }
  }
  & .right-to-left {
    display: block;
    & .image {
      float: right;
    }
  }
  & .left-to-right {
    display: flex;
    flex-wrap: wrap;
  }
  & .github-star {
    cursor: pointer;
    display: flex;
    & .star,
    .total {
      padding: 8px 16px;
      border: 1px solid #ccc;
    }
    & .star {
      display: flex;
      & span {
        margin-left: 10px;
        margin-top: -2px;
      }
    }
  }
}
</style>
