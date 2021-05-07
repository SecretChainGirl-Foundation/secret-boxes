<template>
  <section class="main">
    <img class="bg-news" src="/img/bg-news.png" alt="launcing" />
    <div class="container_news">
      <h1 class="title">News & Updates</h1>
      <div class="search-menu">
        <div class="form-control">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="7.84394"
              cy="7.84442"
              r="5.99237"
              stroke="#200E32"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.0117 12.3235L14.3611 14.6667"
              stroke="#200E32"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <input
            v-model="searchDataValue"
            type="text"
            placeholder="Search .."
            @keyup="searchDataFilter()"
          />
        </div>
        <ul v-if="searchDataActive">
          <li v-for="s in searchDataView" :key="s.id">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="7.84394"
                cy="7.84442"
                r="5.99237"
                stroke="#200E32"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0117 12.3235L14.3611 14.6667"
                stroke="#200E32"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ s.name }}
          </li>
        </ul>
      </div>
      <div class="highlights-list">
        <div class="list-card">
          <h6 class="sub-title">
            <svg
              width="24"
              height="33"
              viewBox="0 0 24 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.3652 13.51C19.2118 13.2687 18.9485 13.1252 18.6668 13.1252H12.8334V3.84411C12.8334 3.44586 12.5584 3.10162 12.1734 3.01893C11.7818 2.93456 11.3984 3.13874 11.2384 3.50155L4.57168 18.6888C4.45668 18.9487 4.48168 19.2525 4.63501 19.4904C4.78835 19.73 5.05168 19.8751 5.33335 19.8751H11.1668V29.1563C11.1668 29.5545 11.4418 29.8988 11.8268 29.9814C11.8851 29.9933 11.9434 30 12.0001 30C12.3234 30 12.6251 29.8093 12.7618 29.4988L19.4285 14.3115C19.5419 14.05 19.5202 13.7496 19.3652 13.51Z"
                stroke="black"
                stroke-width="2"
              />
            </svg>
            Highlights
          </h6>
          <div class="card" v-for="i in 3" :key="i">
            <div class="card-body">
              <div>
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8.5" r="7.5" stroke="#4E4B66" />
                  <path
                    d="M9.85334 5.67667C9.85334 6.70002 9.02375 7.52961 8.0004 7.52961C6.97705 7.52961 6.14746 6.70002 6.14746 5.67667C6.14746 4.65332 6.97705 3.82373 8.0004 3.82373C9.02375 3.82373 9.85334 4.65332 9.85334 5.67667Z"
                    stroke="#4E4B66"
                  />
                  <path
                    d="M12.2352 13.6768C12.2352 12.4288 11.789 11.2318 10.9947 10.3493C10.2005 9.46674 9.12321 8.97095 7.99994 8.97095C6.87667 8.97095 5.79941 9.46674 5.00514 10.3493C4.21087 11.2318 3.76465 12.4288 3.76465 13.6768"
                    stroke="#4E4B66"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                Secret Agent
              </div>
              <br />
              <h6>Richie Rich Secret Box</h6>
              <p>Mar 3 . 8 min read</p>
            </div>
            <div class="card-image">
              <img src="/img/news-4.png" alt="News" />
            </div>
          </div>
        </div>
      </div>
      <div class="highlights-square">
        <div class="card">
          <div class="card-square">
            <img src="/img/news-2.png" alt="News" />

            <br />
            <br />
            <h5>Richie Rich Secret Box</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur ut diam lorem id. Vel nisl, placerat lorem ac et a
              libero iaculis pellentesque...
            </p>
            <p>Mar 3 . 8 min read</p>
            <div>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8.5" r="7.5" stroke="#4E4B66" />
                <path
                  d="M9.85334 5.67667C9.85334 6.70002 9.02375 7.52961 8.0004 7.52961C6.97705 7.52961 6.14746 6.70002 6.14746 5.67667C6.14746 4.65332 6.97705 3.82373 8.0004 3.82373C9.02375 3.82373 9.85334 4.65332 9.85334 5.67667Z"
                  stroke="#4E4B66"
                />
                <path
                  d="M12.2352 13.6768C12.2352 12.4288 11.789 11.2318 10.9947 10.3493C10.2005 9.46674 9.12321 8.97095 7.99994 8.97095C6.87667 8.97095 5.79941 9.46674 5.00514 10.3493C4.21087 11.2318 3.76465 12.4288 3.76465 13.6768"
                  stroke="#4E4B66"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Secret Agent
            </div>
          </div>
        </div>
      </div>
      <div class="list-card">
        <h6 class="sub-title">
          <svg
            width="24"
            height="33"
            viewBox="0 0 24 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.3652 13.51C19.2118 13.2687 18.9485 13.1252 18.6668 13.1252H12.8334V3.84411C12.8334 3.44586 12.5584 3.10162 12.1734 3.01893C11.7818 2.93456 11.3984 3.13874 11.2384 3.50155L4.57168 18.6888C4.45668 18.9487 4.48168 19.2525 4.63501 19.4904C4.78835 19.73 5.05168 19.8751 5.33335 19.8751H11.1668V29.1563C11.1668 29.5545 11.4418 29.8988 11.8268 29.9814C11.8851 29.9933 11.9434 30 12.0001 30C12.3234 30 12.6251 29.8093 12.7618 29.4988L19.4285 14.3115C19.5419 14.05 19.5202 13.7496 19.3652 13.51Z"
              stroke="black"
              stroke-width="2"
            />
          </svg>
          Highlights
        </h6>
        <div class="card" v-for="n in newsFeed" :key="n.id">
          <div class="card-body">
            <div>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8.5" r="7.5" stroke="#4E4B66" />
                <path
                  d="M9.85334 5.67667C9.85334 6.70002 9.02375 7.52961 8.0004 7.52961C6.97705 7.52961 6.14746 6.70002 6.14746 5.67667C6.14746 4.65332 6.97705 3.82373 8.0004 3.82373C9.02375 3.82373 9.85334 4.65332 9.85334 5.67667Z"
                  stroke="#4E4B66"
                />
                <path
                  d="M12.2352 13.6768C12.2352 12.4288 11.789 11.2318 10.9947 10.3493C10.2005 9.46674 9.12321 8.97095 7.99994 8.97095C6.87667 8.97095 5.79941 9.46674 5.00514 10.3493C4.21087 11.2318 3.76465 12.4288 3.76465 13.6768"
                  stroke="#4E4B66"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              {{ n.anchor }}
            </div>

            <br />
            <h5>{{ n.title }}</h5>
            <p>
              {{ n.desc }}
            </p>
            <div class="action">
              {{ n.date }} . {{ n.read_time }}
              <div class="dropdown-btn">
                <div class="dropdown-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1" fill="white">
                      <path
                        d="M1.00034 13.9998C0.984813 14.0011 0.969203 14.0011 0.953675 13.9998C0.873583 13.9885 0.80034 13.9485 0.747597 13.8871C0.694855 13.8258 0.666212 13.7474 0.667008 13.6665C0.667008 13.5725 0.765008 4.39985 9.13367 4.16118V1.66651C9.13369 1.60064 9.15322 1.53624 9.18981 1.48146C9.22639 1.42668 9.27839 1.38396 9.33924 1.35871C9.40008 1.33346 9.46705 1.3268 9.53167 1.33958C9.5963 1.35236 9.65569 1.38401 9.70234 1.43051L14.6443 6.37185C14.7068 6.43436 14.7419 6.51913 14.7419 6.60752C14.7419 6.6959 14.7068 6.78067 14.6443 6.84318L9.70234 11.7845C9.65573 11.831 9.5964 11.8626 9.53183 11.8754C9.46727 11.8882 9.40036 11.8816 9.33955 11.8564C9.27873 11.8313 9.22672 11.7887 9.19009 11.734C9.15345 11.6793 9.13382 11.615 9.13367 11.5492V9.06251C2.69101 9.21318 1.33368 13.7118 1.31701 13.7578C1.29734 13.8269 1.25589 13.8878 1.19883 13.9314C1.14177 13.975 1.07215 13.999 1.00034 13.9998ZM9.80034 2.47118V4.48985C9.80034 4.57825 9.76522 4.66304 9.70271 4.72555C9.6402 4.78806 9.55541 4.82318 9.46701 4.82318C3.53368 4.82318 1.92434 9.44252 1.49101 12.0085C2.55767 10.4825 4.85434 8.39185 9.46701 8.39185C9.55541 8.39185 9.6402 8.42697 9.70271 8.48948C9.76522 8.55199 9.80034 8.63678 9.80034 8.72518V10.7445L13.937 6.61118L9.80034 2.47118Z"
                      />
                    </mask>
                    <path
                      d="M1.00034 13.9998L0.982718 12.5L0.928938 12.5006L0.875342 12.5051L1.00034 13.9998ZM0.953675 13.9998L0.743748 15.4851L0.786075 15.4911L0.828675 15.4946L0.953675 13.9998ZM0.667008 13.6665L2.16694 13.6813L2.16701 13.6739V13.6665H0.667008ZM9.13367 4.16118L9.17644 5.66057L10.6337 5.61901V4.16118H9.13367ZM9.13367 1.66651L7.63367 1.6662V1.66651H9.13367ZM9.70234 1.43051L10.7629 0.369782L10.7613 0.368197L9.70234 1.43051ZM14.6443 6.37185L15.7052 5.31135L15.7049 5.31112L14.6443 6.37185ZM14.6443 6.84318L15.7049 7.90391L15.7052 7.90368L14.6443 6.84318ZM9.70234 11.7845L10.7613 12.8468L10.7629 12.8452L9.70234 11.7845ZM9.13367 11.5492H7.63367L7.63368 11.5525L9.13367 11.5492ZM9.13367 9.06251H10.6337V7.52703L9.09861 7.56292L9.13367 9.06251ZM1.31701 13.7578L-0.0932776 13.2469L-0.111202 13.2963L-0.125616 13.347L1.31701 13.7578ZM9.80034 2.47118L10.8614 1.41095L8.30034 -1.1522V2.47118H9.80034ZM1.49101 12.0085L0.0119504 11.7587L2.72044 12.8679L1.49101 12.0085ZM9.80034 10.7445H8.30034V14.3638L10.8606 11.8056L9.80034 10.7445ZM13.937 6.61118L14.9972 7.67227L16.0583 6.61204L14.9981 5.55095L13.937 6.61118ZM0.875342 12.5051C0.943001 12.4994 1.01102 12.4994 1.07867 12.5051L0.828675 15.4946C0.927392 15.5029 1.02663 15.5029 1.12534 15.4946L0.875342 12.5051ZM1.1636 12.5146C1.44393 12.5542 1.70028 12.6944 1.88487 12.9091L-0.389681 14.8652C-0.0995992 15.2025 0.303238 15.4228 0.743748 15.4851L1.1636 12.5146ZM1.88487 12.9091C2.06947 13.1237 2.16972 13.3982 2.16694 13.6813L-0.832919 13.6518C-0.837297 14.0966 -0.679763 14.5279 -0.389681 14.8652L1.88487 12.9091ZM2.16701 13.6665C2.16701 13.7042 2.18702 11.6401 3.12558 9.59332C3.5867 8.58771 4.24561 7.63912 5.18374 6.93122C6.10623 6.23511 7.37634 5.71191 9.17644 5.66057L9.09091 2.66179C6.70668 2.72979 4.82629 3.44267 3.37671 4.5365C1.94278 5.61853 1.00807 7.01374 0.398603 8.34288C-0.804006 10.9656 -0.832992 13.5348 -0.832992 13.6665H2.16701ZM10.6337 4.16118V1.66651H7.63367V4.16118H10.6337ZM10.6337 1.66683C10.6336 1.8974 10.5653 2.12279 10.4372 2.31453L7.94241 0.648394C7.74119 0.949699 7.63375 1.30387 7.63367 1.6662L10.6337 1.66683ZM10.4372 2.31453C10.3092 2.50626 10.1272 2.65576 9.9142 2.74414L8.76428 -0.026719C8.42963 0.112163 8.14363 0.347091 7.94241 0.648394L10.4372 2.31453ZM9.9142 2.74414C9.70124 2.83252 9.46687 2.85582 9.24068 2.81109L9.82266 -0.13192C9.46722 -0.202208 9.09892 -0.1656 8.76428 -0.026719L9.9142 2.74414ZM9.24068 2.81109C9.0145 2.76636 8.80663 2.65561 8.64334 2.49283L10.7613 0.368197C10.5047 0.112397 10.1781 -0.0616331 9.82266 -0.13192L9.24068 2.81109ZM8.64175 2.49125L13.5838 7.43258L15.7049 5.31112L10.7629 0.369783L8.64175 2.49125ZM13.5835 7.43235C13.3648 7.21356 13.2419 6.91687 13.2419 6.60752H16.2419C16.2419 6.12139 16.0489 5.65515 15.7052 5.31135L13.5835 7.43235ZM13.2419 6.60752C13.2419 6.29816 13.3648 6.00147 13.5835 5.78268L15.7052 7.90368C16.0489 7.55988 16.2419 7.09365 16.2419 6.60752H13.2419ZM13.5838 5.78245L8.64175 10.7238L10.7629 12.8452L15.7049 7.90391L13.5838 5.78245ZM8.64334 10.7222C8.80648 10.5596 9.01413 10.4489 9.24011 10.4041L9.82356 13.3468C10.1787 13.2764 10.505 13.1024 10.7613 12.8468L8.64334 10.7222ZM9.24011 10.4041C9.46609 10.3593 9.70027 10.3824 9.91312 10.4704L8.76597 13.2425C9.10046 13.3809 9.46845 13.4172 9.82356 13.3468L9.24011 10.4041ZM9.91312 10.4704C10.126 10.5585 10.308 10.7077 10.4362 10.8991L7.94394 12.5689C8.14545 12.8697 8.43148 13.104 8.76597 13.2425L9.91312 10.4704ZM10.4362 10.8991C10.5645 11.0904 10.6332 11.3155 10.6337 11.5459L7.63368 11.5525C7.63448 11.9145 7.74243 12.2682 7.94394 12.5689L10.4362 10.8991ZM10.6337 11.5492V9.06251H7.63367V11.5492H10.6337ZM9.09861 7.56292C5.48995 7.64732 3.17251 8.9681 1.75378 10.3899C1.05894 11.0863 0.603268 11.7827 0.316658 12.3186C0.0263898 12.8614 -0.0968709 13.2568 -0.0932776 13.2469L2.72729 14.2688C2.73922 14.2359 2.79188 14.0517 2.96213 13.7334C3.13604 13.4081 3.42549 12.9618 3.87741 12.5089C4.75217 11.6323 6.33474 10.6284 9.16874 10.5621L9.09861 7.56292ZM-0.125616 13.347C-0.0567653 13.1052 0.0883113 12.8922 0.288023 12.7396L2.10963 15.1232C2.42346 14.8834 2.65144 14.5486 2.75963 14.1687L-0.125616 13.347ZM0.288023 12.7396C0.487731 12.5869 0.731387 12.5029 0.982718 12.5L1.01797 15.4997C1.41291 15.4951 1.7958 15.363 2.10963 15.1232L0.288023 12.7396ZM8.30034 2.47118V4.48985H11.3003V2.47118H8.30034ZM8.30034 4.48985C8.30034 4.18042 8.42326 3.88368 8.64205 3.66489L10.7634 5.78621C11.1072 5.4424 11.3003 4.97608 11.3003 4.48985H8.30034ZM8.64205 3.66489C8.86084 3.4461 9.15759 3.32318 9.46701 3.32318V6.32318C9.95324 6.32318 10.4196 6.13003 10.7634 5.78621L8.64205 3.66489ZM9.46701 3.32318C6.04704 3.32318 3.73413 4.68283 2.25205 6.50806C0.82312 8.26784 0.249383 10.3528 0.0119504 11.7587L2.97007 12.2583C3.16597 11.0983 3.61356 9.59052 4.58097 8.39913C5.49522 7.2732 6.95365 6.32318 9.46701 6.32318V3.32318ZM2.72044 12.8679C3.54192 11.6926 5.40294 9.89185 9.46701 9.89185V6.89185C4.30575 6.89185 1.57343 9.27238 0.26158 11.1492L2.72044 12.8679ZM9.46701 9.89185C9.15759 9.89185 8.86084 9.76893 8.64205 9.55014L10.7634 7.42882C10.4196 7.085 9.95324 6.89185 9.46701 6.89185V9.89185ZM8.64205 9.55014C8.42326 9.33135 8.30034 9.0346 8.30034 8.72518H11.3003C11.3003 8.23895 11.1072 7.77263 10.7634 7.42882L8.64205 9.55014ZM8.30034 8.72518V10.7445H11.3003V8.72518H8.30034ZM10.8606 11.8056L14.9972 7.67227L12.8768 5.55009L8.74011 9.68343L10.8606 11.8056ZM14.9981 5.55095L10.8614 1.41095L8.73925 3.53141L12.8759 7.67141L14.9981 5.55095Z"
                      fill="#6E7191"
                      mask="url(#path-1-inside-1)"
                    />
                  </svg>
                </div>
                <ul class="dropdown-list">
                  <li>
                    <a :href="n.link" target="_BLANK" class="dropdown-link">{{
                      n.link
                    }}</a>
                    <a class="dropdown-copy" @click="copyLink(n.link)"
                      >copy link</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="card-image">
            <img src="/img/news-1.png" alt="News" />
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="load_anchor">
              <div class="load_icon"></div>
              <div class="load_name"></div>
            </div>
            <div class="load_title"></div>
            <div class="load_desc"></div>
            <div class="load_action"></div>
          </div>
          <div class="card-image">
            <div class="load_image"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <input type="hidden" ref="copydata" value="" />
</template>

<script>
export default {
  data: () => ({
    searchDataActive: false,
    searchDataValue: "",
    searchDataView: [],
    searchData: [
      {
        id: 1,
        name: "Grey Box",
      },

      {
        id: 2,
        name: "Grey Paper Box",
      },

      {
        id: 3,
        name: "Grey Salsa Sause",
      },
      {
        id: 4,
        name: "Grey Rich",
      },
    ],
    newsFeed: [
      {
        id: 1,
        anchor: "Secret Agent",
        title: "“GripTape” Secret Box Launching",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. placerat lorem ac et a libero iaculis pellentesque...",
        date: "Mar 3",
        read_time: "8 min",
        link: "copythislink.com/share",
      },
      {
        id: 2,
        anchor: "Secret Agent",
        title: "“GripTape” Secret Box Launching",
        desc:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. placerat lorem ac et a libero iaculis pellentesque...",
        date: "Mar 3",
        read_time: "8 min",
        link: "copythislink.com/share",
      },
    ],
  }),
  methods: {
    copyLink(text) {
      this.$refs.copydata.setAttribute("value", text);
      this.$refs.copydata.setAttribute("type", "text");
      this.$refs.copydata.select();
      try {
        var successful = document.execCommand("copy");
        // var msg = successful ? 'successful' : 'unsuccessful';
        // alert('Code was copied ' + msg);
      } catch (err) {
        // alert('Oops, unable to copy');
      }
      /* unselect the range */
      this.$refs.copydata.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    },
    searchDataFilter() {
      this.searchDataActive = true;
      this.searchDataView = this.searchData.filter((s) => {
        let nameUpp = s.name.toUpperCase();
        let searchUpp = this.searchDataValue.toUpperCase();
        return nameUpp.includes(searchUpp);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  overflow: hidden;
  background: var(--grayscale);
  margin-top: 0;
}
.bg-news {
  position: absolute;
  width: 100%;
  left: 0;
  // overflow: hidden;
  @media (max-width: 1024px) {
    width: 250%;
    left: -50%;
  }
  @media (max-width: 600px) {
    width: 550%;
    left: -250%;
  }
}
.container_news {
  width: 100%;
  padding: 0 10%;
  padding-top: 280px;
  @media (max-width: 1024px) {
    padding: 0 5%;
    padding-top: 350px;
  }
  position: relative;
  display: flex;
  flex-wrap: wrap;
  & .search-menu {
    width: 30%;
    right: 20%;
    position: absolute;
    top: 50px;
    color: white;
    @media (max-width: 1024px) {
      text-align: center;
      left: 5%;
      top: 200px;
      width: 90%;
    }
    & .form-control {
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      border-radius: 15px;
      border: 0;
      & input {
        width: 90%;
        padding: 16px;
        border-radius: 15px;
        border: 0;
      }
    }
    & ul {
      border-radius: 15px;
      margin-top: 10px;
      background: white;
      list-style: none;
      & li {
        cursor: pointer;
        border-radius: 15px;
        padding: 8px 16px;
        color: var(--background);
        &:hover {
          background: var(--primary);
        }
      }
    }
  }
  & .title {
    position: absolute;
    top: 30px;
    left: 20%;
    color: white;
    z-index: 10;
    @media (max-width: 1024px) {
      text-align: center;
      left: 0;
      width: 100%;
    }
  }
  & .highlights-list {
    width: 50%;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
  & .highlights-square {
    width: 50%;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
}

.list-card {
  display: block;
  width: 100%;
  padding: 0 10%;
  & .sub-title {
    display: flex;
    padding: 30px;
  }
}
.card {
  padding: 10px;
  display: flex;
  align-items: center;
  width: 100%;
  background: white;
  margin-bottom: 30px;
  @media (max-width: 1024px) {
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }

  & .load_anchor {
    display: flex;
    & .load_icon {
      background: #f7f7fc;
      width: 20px;
      height: 20px;
      border-radius: 10px;
      margin-right: 10px;
    }
    & .load_name {
      background: #f7f7fc;
      width: 150px;
      height: 20px;
      border-radius: 10px;
    }
  }
  & .load_title {
    margin-top: 10px;
    background: #f7f7fc;
    width: 100%;
    height: 20px;
    border-radius: 10px;
    margin-right: 10px;
  }
  & .load_desc {
    margin-top: 10px;
    background: #f7f7fc;
    width: 100%;
    height: 20px;
    border-radius: 10px;
    margin-right: 10px;
  }
  & .load_action {
    margin-top: 30px;
    background: #f7f7fc;
    width: 100px;
    height: 20px;
    border-radius: 10px;
    margin-right: 10px;
  }
  .load_image {
    height: 148px;
    width: 240px;
    background: #f7f7fc;
    border-radius: 10px;
    margin-right: 30px;
    @media (max-width: 1024px) {
      width: 100%;
      margin-top: 10px;
    }
  }
  & .card-body {
    padding: 5%;
    width: 100%;
  }
  & .card-image {
    margin-left: auto;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
  & .card-square {
    width: 100%;
    padding: 32px;
    & img {
      width: 100%;
    }
  }
  & .action {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1024px) {
      justify-items: center;
      justify-content: center;
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
          left: 150px;
          margin-left: -5px;
          top: -20px;
          transform: rotate(90deg);
          border: 10px solid #eff0f7;
          border-color: transparent #eff0f7 transparent transparent;
        }
        min-width: 300px;
        padding: 8px 4px;
        display: none;
        list-style: none;
        position: absolute;
        background: #eff0f7;
        border-radius: 10px;
        top: 20px;
        left: -150px;
        & li {
          padding: 16px;
          & .dropdown-link {
            background: #d9dbe9;
            border-radius: 10px;
            padding: 8px;
            margin-right: 8px;
            cursor: pointer;
          }
          & .dropdown-copy {
            background: white;
            border-radius: 10px;
            padding: 8px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
.card:hover {
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
}
</style>