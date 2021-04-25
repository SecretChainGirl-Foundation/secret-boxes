<template>
    <section class="container">
        <div class="secret__hero">
            <div class="left">
                <img src="/img/secret-box-big.png" alt="Secret Counter" />
                <div class="content">
                    <h2>Hello World</h2>
                    <p>Long enough description just 1 sentence dolor sit amet, consectetur adipiscing elit. Neque, diam, </p>
                    <br>
                    <div>
                        <a href="#" class="btn btn-primary btn-lg btn-icon-hover">
                            Edit CodeSandbox
                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.1665 4.81706L1.1665 4.81706" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.1333 0.80083L11.1666 4.81683L7.1333 8.8335" stroke="#FCFCFC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                        <a href="#" class="btn btn-secondary btn-lg">
                            Docs
                        </a>
                   </div>
                </div>
            </div>
            <div class="right">
                <img src="/img/secret-box-hero.png" alt="Secret Box Hero">
            </div>
        </div>
        <div class="secret__content">
            <div class="left">
                <img src="/img/ufo-3.png" alt="Secret Ufo">
            </div>
            <div class="right">
                <h2>Feature 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ac sed nisi augue nulla pulvinar sit diam.</p>
                <a href="#">Learn More</a>
                <br>
                <br>
                <h2>Feature 2</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ac sed nisi augue nulla pulvinar sit diam.</p>
                <a href="#">Learn More</a>
            </div>
        </div>
         <div class="secret__content">
            <div class="left">
                <h2>Feature 3</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pellentesque risus pretium ac ac molestie lacus pharetra. Tellus eget amet duis nisi, ipsum nunc, ac lorem sit. Feugiat nec ornare egestas nisl lectus tristique malesuada morbi ornare. Ultricies morbi sit nunc, arcu.
                </p>
                <a href="#">Learn More</a>
            </div>
            <div class="right">
                <img src="/img/ufo-3.png" alt="Secret Ufo">
            </div>
        </div>
        <div class="secret__content text-center">
            <div class="left">
                <img src="/img/ufo-3.png" alt="Secret Ufo">
                <h2>Feature 4</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pellentesque risus pretium ac ac molestie lacus pharetra. Tellus eget amet duis nisi, ipsum nunc, ac lorem sit. Feugiat nec ornare egestas nisl lectus tristique malesuada morbi ornare. Ultricies morbi sit nunc, arcu.
                </p>
                <a href="#">Learn More</a>
            </div>
            <div class="right">
                <img src="/img/ufo-3.png" alt="Secret Ufo">
                <h2>Feature 4</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At pellentesque risus pretium ac ac molestie lacus pharetra. Tellus eget amet duis nisi, ipsum nunc, ac lorem sit. Feugiat nec ornare egestas nisl lectus tristique malesuada morbi ornare. Ultricies morbi sit nunc, arcu.
                </p>
                <a href="#">Learn More</a>
            </div>
        </div>
        <div class="secret__hero2">
            <img class="bg-big" src="/img/secret-counter-hero-2.png" alt="Secret Counter Hero 2">
            <div class="content">
                <h2>short awesome title</h2>
                <h4>The code is open source</h4>
                <p>The full source code of Secret Box is on Github! Ultrices morbi morbi rhoncus purus sit. </p>
                <a href="#">Proceed to github</a>
            </div>
            <img class="bg-small" src="/img/ufo-4.png" alt="Ufo">
        </div>
          <div class="secret__hero3">
            <img class="bg-big" src="/img/secret-counter-hero-3.png" alt="Secret Counter Hero 2">
            <h2>Explore More</h2>
            <div class="list-menu-3">
                <div class="list-menu-3-item">
                    <img src="/img/secret-box-big.png" alt="Secret Box">
                    <h2>Figment Learn</h2>
                </div>
                <div class="list-menu-3-item">
                    <img src="/img/secret-box-big.png" alt="Secret Box">
                    <h2>Ritchie Rich</h2>
                </div>
                <div class="list-menu-3-item">
                    <img src="/img/secret-box-big.png" alt="Secret Box">
                    <h2>Voting Box</h2>
                </div>
            </div>
         </div>
    </section>
</template>


<style lang="scss" scope>
.container{
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    background: var(--bg-gray);
    position: relative;
    width: 100%;
}
.secret__hero{
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    & .left{
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        justify-items: flex-start;
        padding:5% 10%;
        padding-bottom: 15%;
        @media (max-width:1024px){
            width:100%;
        }
        & img{
            width:40%;
            @media (max-width:404px){
                width:50%;
            }
        }
        & .content{
            text-align: center;
            margin:auto;
            margin-top: 30px;
            & .btn{
                margin-right: 10px;
            }
        }
    }
    & .right{

        width: 50%;
        @media (max-width:404px){
          width: 100%;
        }
        & img{
            position: absolute;
            right: 0;
            top:-150px;
            @media (max-width:1024px){
                display: none;
            }
        }
    }
}

 .secret__content{
        margin-bottom: 100px;
        width:100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        z-index: 2;
        @media (max-width:1024px){
             text-align: center;
        }
         @media (max-width:1024px){
            margin-bottom: 30px;
        }
        & .left{
            padding: 0 10%;
            width: 50%;
            @media (max-width:1024px){
                width:100%
            }
            & img{
               width: 100%;
            }
        }
         & .right{
            padding: 0 10%;
            width: 50%;
            @media (max-width:1024px){
                width:100%
            }
             & img{
               width: 100%;
            }
        }
        &.text-center{
            text-align: center;
        }
    }
.secret__hero2{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-items: center;
    align-content:center;
    align-items: center;
    position: relative;
    padding: 30% 0;
    @media (max-width:1024px){
    min-height: 700px;
    }
     @media (max-width:404px){
            min-height: 350px;
    }
    & .bg-big{
        position: absolute;
        left: 0;
        top:0;
        width: 50%;
        z-index: 1;
         @media (max-width:404px){
            display: none;
        }
    }
    & .bg-small{
        position: absolute;
        right: 0;
        @media (max-width:404px){
            display: none;
        }
    }
    & .content{
        text-align: center;
        z-index: 2;
        padding: 30px;
    }
}

.secret__hero3{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
     & .bg-big{
        position: absolute;
        left: 0;
        width: 100%;
        z-index: 0;
        @media (max-width:404px){
            display: none;
        }
    }
    &  h2{
        width: 100%;
        text-align: center;
        padding:50px;
        z-index: 2;
    }

    & .list-menu-3{
        width: 100%;
        padding: 0 10%;
        margin-bottom: 100px;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        justify-items: space-between;
        z-index: 2;
         @media (max-width:404px){
            display: block;
        }
         @media (max-width:1024px){
             justify-content: center;
             justify-items: center;
        }
    }
}
</style>