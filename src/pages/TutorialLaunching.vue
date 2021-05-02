<template>
  <section class="main">
    <img class="bg-launching" src="/img/bg-launching.png" alt="launcing" />
    <div class="container_tutorial_launch">
      <h2 class="title">
        Launching Your Developer
        <br />
        Secret Network
      </h2>
      <div class="content">
        <p>
          This tutorial is for developers to get started with development on the
          Secret Network. The local blockchain runs in a docker
          container_tutorial_launch and simulates the Intel SGX (TEE) that is a
          requirement for the Holodeck testnet and mainnet.
        </p>
        <br />
        <p>
          It's super easy and quick, once you have
          <strong>docker</strong> installed. Just a few commands!
        </p>
        <br />
        <h4>Setup Your Environment</h4>
        <br />
        <ul>
          <li>Install Docker for your environment (Mac, Windows, Linux).</li>
        </ul>
        <br />
        <h4>
          Launch the Developer Secret Network
          <button
            class="btn btn-primary dropdown-btn"
            @click="dropdownMenuOs = !dropdownMenuOs"
          >
            Linux
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.746 11.0873C7.70733 11.0496 7.542 10.9074 7.406 10.7749C6.55067 9.99813 5.15067 7.97183 4.72333 6.91127C4.65467 6.7502 4.50933 6.34299 4.5 6.12543C4.5 5.91695 4.548 5.71822 4.64533 5.52858C4.78133 5.29217 4.99533 5.10253 5.248 4.99862C5.42333 4.93173 5.948 4.82781 5.95733 4.82781C6.53133 4.7239 7.464 4.66675 8.49467 4.66675C9.47667 4.66675 10.3713 4.7239 10.954 4.80898C10.9633 4.81872 11.6153 4.92263 11.8387 5.03629C12.2467 5.24476 12.5 5.65197 12.5 6.08776V6.12543C12.49 6.40924 12.2367 7.00609 12.2273 7.00609C11.7993 8.0095 10.468 9.98904 9.58333 10.7846C9.58333 10.7846 9.356 11.0087 9.214 11.1061C9.01 11.2581 8.75733 11.3334 8.50467 11.3334C8.22267 11.3334 7.96 11.2483 7.746 11.0873"
                fill="#FCFCFC"
              />
            </svg>

            <ul
              :class="dropdownMenuOs ? 'dropdown-list active' : 'dropdown-list'"
            >
              <li>Windows</li>
              <li>Mac Os</li>
            </ul>
          </button>
        </h4>
        <br />
        <p>
          In a terminal window start the Secret Network by running the docker
          container_tutorial_launch named secretdev:
        </p>
        <br />
        <div class="editor-layout">
          <prism-editor
            class="light-editor height-100"
            v-model="code"
            :highlight="highlighter"
            :line-numbers="lineNumbers"
            :readonly="true"
          >
          </prism-editor>
          <button class="btn-copy btn btn-secondary" @click="copyCode(code)">
            Copy
          </button>
        </div>
        <br />
        <button class="btn btn-primary-yellow btn-lg">
          <strong>Note:</strong> To stop the secretdev blockchain enter
          <span class="btn-sm btn-primary text-primary">ctrl + c</span>
        </button>
        <br />
        <br />
        <p>
          Your local blockchain starts with a set of keys or accounts, named
        </p>
        <br />
        <div class="editor-layout"
        @click="modalCode = !modalCode; showDataCode = code2"
        >
          <prism-editor
            class="dark-editor height-300"
            v-model="code2"
            :highlight="highlighter"
            :line-numbers="lineNumbers"
            :readonly="true"
          >
          </prism-editor>
          <button class="btn-copy btn btn-secondary" @click="copyCode(code2)">
            Copy
          </button>
          <button class="btn-hover-editor">
           <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5538 16.4821L9.36343 21.6724V18.8192H8V24H13.1808V22.6366H10.3275L15.5179 17.4461L14.5538 16.4821Z" fill="#FCFCFC"/>
<path d="M18.8192 8V9.36343H21.6724L16.482 14.5539L17.4461 15.5179L22.6366 10.3275V13.1808H24V8H18.8192Z" fill="#FCFCFC"/>
<rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#FCFCFC"/>
</svg>

          </button>
        </div>
        <br />
        <p>
          After initializing and validating the genesis file you can see the
          network starting and blocks getting committed. Included in the startup
          is an HTTP REST server (also known as the LCD or Light Client Daemon)
          that can be accessed via
          <span>Local Host on port <i>1337</i></span>
        </p>
        <br />
        <br />
        <h4>Query the Latest Block</h4>
        <br />
        <hr />
        <br />
        <div class="editor-layout">
          <prism-editor
            class="dark-editor height-300"
            v-model="code3"
            :highlight="highlighter"
            :line-numbers="lineNumbers"
            :readonly="true"
          >
          </prism-editor>
          <button class="btn-copy btn btn-secondary" @click="copyCode(code3)">
            Copy
          </button>
        </div>
        <br />
        <p>Use the REST API to view the latest block information.</p>
        <br />
        <div class="editor-layout">
          <prism-editor
            class="light-editor height-100"
            v-model="code4"
            :highlight="highlighter"
            :line-numbers="lineNumbers"
            :readonly="true"
          >
          </prism-editor>
          <button class="btn-copy btn btn-secondary" @click="copyCode(code4)">
            Copy
          </button>
        </div>
        <br />

        <h4>Use the CLI to Interact with the Network</h4>
        <br />
        <hr />
        <br />
        <p>
          In a separate terminal window connect to the container in interactive
          mode, executing the Bash shell.
        </p>
        <br />
        <br />
        <div class="editor-layout"
        @click="modalCode = !modalCode; showDataCode = code5"
        >
          <prism-editor
            class="dark-editor height-300"
            v-model="code5"
            :highlight="highlighter"
            :line-numbers="lineNumbers"
            :readonly="true"
          >
          </prism-editor>
          <button class="btn-copy btn btn-secondary" @click="copyCode(code5)">
            Copy
          </button>
          <button class="btn-hover-editor">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5538 16.4821L9.36343 21.6724V18.8192H8V24H13.1808V22.6366H10.3275L15.5179 17.4461L14.5538 16.4821Z" fill="#FCFCFC"/>
      <path d="M18.8192 8V9.36343H21.6724L16.482 14.5539L17.4461 15.5179L22.6366 10.3275V13.1808H24V8H18.8192Z" fill="#FCFCFC"/>
      <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#FCFCFC"/>
      </svg>

                </button>
        </div>
        <br />
        <br />
        <p>Query the list of keys using secretcli:</p>
        <br />
        <br />
        <div class="editor-layout">
          <prism-editor
            class="light-editor height-100"
            v-model="code6"
            :highlight="highlighter"
            :line-numbers="lineNumbers"
            :readonly="true"
          >
          </prism-editor>
          <button class="btn-copy btn btn-secondary" @click="copyCode(code6)">
            Copy
          </button>
        </div>
        <br />
        <p>Query the list of keys using secretcli:</p>
        <br />
        <div class="editor-layout">
          <prism-editor
            class="light-editor height-100"
            v-model="code7"
            :highlight="highlighter"
            :line-numbers="lineNumbers"
            :readonly="true"
          >
          </prism-editor>
          <button class="btn-copy btn btn-secondary" @click="copyCode(code7)">
            Copy
          </button>
        </div>
        <br />
        <p class="btn btn-primary-yellow">
          <strong>Note:</strong> secretcli is configured to use the test keyring
          backend which makes it easier for development and testing (e.g. no
          password required).
        </p>
        <br />

        <div class="editor-layout"
        @click="modalCode = !modalCode; showDataCode = code8"
        >
          <prism-editor
            class="dark-editor height-300"
            v-model="code8"
            :highlight="highlighter"
            :line-numbers="lineNumbers"
            :readonly="true"
          >
          </prism-editor>
          <button class="btn-copy btn btn-secondary" @click="copyCode(code8)">
            Copy
          </button>
          <button class="btn-hover-editor">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.5538 16.4821L9.36343 21.6724V18.8192H8V24H13.1808V22.6366H10.3275L15.5179 17.4461L14.5538 16.4821Z" fill="#FCFCFC"/>
          <path d="M18.8192 8V9.36343H21.6724L16.482 14.5539L17.4461 15.5179L22.6366 10.3275V13.1808H24V8H18.8192Z" fill="#FCFCFC"/>
          <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#FCFCFC"/>
          </svg>

                    </button>
        </div>

        <br />
        <p>
          Use exit to
          <span>quit</span>
          your interactive Docker session.
        </p>
        <br />
        <br />
        <br />
        <div class="btn-next-tutorial">
          <router-link
            to="/tutorial"
            class="btn btn-secondary btn-lg btn-icon-hover"
          >
            back to tutorial page

            <svg
              style="padding-top: 10px"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1415 6.5899C11.9075 6.71614 11.7616 6.95618 11.7616 7.21726V11.2827H3.73429C3.32896 11.2827 3 11.604 3 12C3 12.3959 3.32896 12.7172 3.73429 12.7172H11.7616V16.7827C11.7616 17.0447 11.9075 17.2848 12.1415 17.4101C12.3755 17.5372 12.6614 17.5286 12.8875 17.39L20.6573 12.6073C20.8708 12.4753 21 12.2467 21 12C21 11.7532 20.8708 11.5247 20.6573 11.3927L12.8875 6.60998C12.7681 6.5373 12.632 6.5 12.4959 6.5C12.3745 6.5 12.2521 6.5306 12.1415 6.5899Z"
                fill="#200E32"
              />
            </svg>
          </router-link>
        </div>

        <br />
        <br />
        <br />
      </div>
    </div>
    <input type="hidden" ref="copydata" value="" />


    <div class="modal" v-if="modalCode">
      <div class="modal-close" @click="modalCode = !modalCode"></div>
      <div class="modal-body">
          <prism-editor
            class="dark-editor modal-editor height-300"
            v-model="code8"
            :highlight="highlighter"
            :line-numbers="lineNumbers"
            :readonly="true"
          >
          </prism-editor>
      </div>
         <button class="btn-download btn btn-secondary" @click="modalCode = !modalCode">
            Download
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.08146 10.2908L8.08146 2.26343" stroke="#4E4B66" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.0255 8.33887L8.08151 10.2909L6.13751 8.33887" stroke="#4E4B66" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.17 5.4187H11.792C13.1487 5.4187 14.248 6.51803 14.248 7.87537L14.248 11.1314C14.248 12.4847 13.1514 13.5814 11.798 13.5814L4.37138 13.5814C3.01471 13.5814 1.91471 12.4814 1.91471 11.1247L1.91471 7.86803C1.91471 6.51537 3.01205 5.4187 4.36471 5.4187H4.99271" stroke="#4E4B66" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </button>
    </div>

  </section>
</template>

<script>
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles

export default {
  components: {
    PrismEditor,
  },
  data: () => ({
    dropdownMenuOs: false,
    modalCode: false,
    showDataCode: ``,
    code: `
docker run -it --rm \

  -p 26657:26657 -p 26656:26656 -p 1337:1337 \

  --name secretdev enigmampc/secret-network-sw-dev
`,
    code2: `
[
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
]`,
    code3: `{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}`,
    code4: `
  curl http://localhost:1337/blocks/latest
  `,
    code5: `{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}`,
    code6: `
  docker exec -it secretdev /bin/bash
  `,
    code7: `
secretcli keys list
  `,
    code8: `{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}`,
    lineNumbers: true,
  }),
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
    copyCode(text) {
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
  },
};
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
  background: var(--grayscale);
  margin-top: 0;
}
.bg-launching {
  position: absolute;
  width: 100%;
  left: 0;
  overflow: hidden;
  @media (max-width: 1024px) {
    width: 200%;
    left: -50%;
  }
  @media (max-width: 600px) {
    width: 500%;
    left: -250%;
  }
}
.container_tutorial_launch {
  width: 100%;
  padding: 0 25%;
  @media (max-width: 1024px) {
    padding: 0 5%;
  }
  position: relative;
  & .title {
    position: absolute;
    left: 20%;
    top: 50px;
    color: white;
    z-index: 10;
  }
  & .content {
    margin-top: 40%;
    @media (max-width:1024px){
      margin-top:45%
    }
     @media (max-width:600px){
      margin-top:110%
    }
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.5px;
  }
}
// required class
.light-editor {
  background: white;
  border-radius: 5px;
}
// required class
.dark-editor {
  background: var(--grayscale-title-active);
  color: #ccc;
}

// optional
.prism-editor__textarea:focus {
  outline: none;
}

// not required:
.height-300 {
  height: 300px;
}
.height-100 {
  height: 100px;
}

.dropdown-btn {
  position: relative;
  & .dropdown-list {
    display: none;
    list-style: none;
    position: absolute;
    border: 1px solid var(--background);
    color: var(--background);
    background: white;
    border-radius: 5px;
    left: 0;
    top: 40px;
    & li {
      padding: 8px 16px;
      &:hover {
        background: var(--primary);
        color: var(--background);
      }
    }
  }
  & .active {
    display: inline-block;
  }
}

.editor-layout {
  position: relative;
  & .btn-copy {
    margin-top: 10px;
    @media (min-width:1024px){
      position: absolute;
      right: 10px;
      top: 10px;
    }
    border-radius: 30px;
  }
}

.btn-next-tutorial {
  width: 100%;
  text-align: center;
}

.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1300;
}


.modal-close {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: rgba(100, 100, 100, 0.75);
  backdrop-filter: blur(11px);
  z-index: 1301;
}
.modal-body {
  position: relative;
  margin: auto;
  width: 70%;
  height: 60%;
  background: var(--grayscale-title-active);
  z-index: 1302;
  overflow:scroll;
  border-radius: 15px;
  & p {
    padding: 30px 0;
  }
  & a {
    margin-right: 10px;
    margin-bottom: 10px;
  }
  @media (max-width: 1024px) {
    padding: 10px;
    width: 90%;
  }
}

.modal-editor{
  border-radius: 15px;
  width: 100%;
  height: 100%;

}
.btn-download{
    position: absolute;
    left: 15%;
    bottom:14%;
    z-index: 1304;
     @media (max-width: 1024px) {
          left: 5%;
    }
}
.btn-hover-editor{
  display: none;
}
.editor-layout:hover{
   background: rgba(100, 100, 100, 0.75);
   backdrop-filter: blur(11px);
}
.editor-layout:hover .btn-hover-editor{
  display: block;
  position: absolute;
  top:45%;
  left:45%;
  background: var(--background);
  cursor: pointer;
}
</style>