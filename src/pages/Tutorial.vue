<template>
    <section class="container">
        <div class="tutorial">
            <div class="tutorial__hero">
                <h2>
                    “Hello World”
                </h2>
                <h1>
                    Secret Contract
                </h1>
                <p>
                    Use this tutorial to learn about launching a local Secret Network where you’ll develop create the familiar “Hello World” secret contract,  run unit tests, and view debugmessages in the node logs.
                </p>
            </div>


            <div class="tutorial__step ">
                <div class="text">
                    <h6>Launch Developer Blockchain</h6>
                    <p>The first thing you’ll need to do to start developing secret contracts in your local environment is install and launch a Secret Network blockchain. </p>
                    <a href="#">Let’s Go</a>
                </div>
                <div class="image">
                    <img src="/img/ufo.png" alt="Step 1">
                </div>
            </div>

            <div class="tutorial__step">
                <div class="image">
                    <img src="/img/ufo.png" alt="Step 1">
                </div>
                <div class="text">
                    <h6>Create “Hello World” Contract</h6>
                    <p>Tutorial description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Auctor neque interdum cursus natoque. Libero, viverra egestas faucibus sollicitudin non adipiscing morbi. </p>
                    <a href="#">Use Docker To Launch Your Secret Node</a>
                </div>
            </div>

            <div class="tutorial__step">
                <div class="text">
                    <h6>Add Debug Messages</h6>
                    <p>Tutorial description Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Auctor neque interdum cursus natoque. Libero, viverra egestas faucibus sollicitudin non adipiscing morbi.
                    </p>
                    <a href="#">Find out what your Secret Contract is doing</a>
                </div>
                <div class="image">
                    <img src="/img/ufo.png" alt="Step 1">
                </div>
            </div>

            <div class="step-end">
                <div class="text">
                    <h6>
                        Now You’re Ready to Try It!
                    </h6>
                    <p>Tutorial description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque interdum cursus natoque. Libero, viverra egestas faucibus sollicitudin non adipiscing morbi.</p>
                    <a href="#">See It In Action </a>
                </div>
                    <img class="il-1" src="/img/ufo-2.png" alt="">
                    <img class="bg-1" src="/img/bg1.png" alt="">
            </div>
        </div>
    </section>
</template>


<style lang="scss" scope>
.container{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items:center;
    align-content: center
}
.tutorial{
    padding: 50px 0;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin:auto;
    margin-bottom: 150px;
    &__hero{
        padding:0 25%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        justify-items: center;
        align-items: flex-start;
        align-content: flex-start;
        text-align: center;
        & h1,h2{
            width:100%;
            font-weight: normal;
        }
        @media (max-width:1024px){
            padding:0 20%;
        }
        @media (max-width:404px){
            padding:0 5%;
        }
    }
    &__step{
        border-bottom: 2px solid var(--dark-1);
        border-right: 2px solid var(--dark-1);
        border-radius: 30px;
        margin:120px 25%;
        height:250px;
        display: flex;
          @media (max-width:1024px){
            margin:30px 0;
            flex-wrap: wrap;
            justify-items: center;
            justify-content: center;
            height:auto;
            text-align: center;
        }
        & .text{
            padding:24px
        }
        & .image{
            & img{
                width:100%
            }
        }
    }
    & .step-end{
        padding:0 5%;
        flex-wrap: wrap;
        @media (max-width:1024px){
            width:auto;
            padding:0;

        }
        display: flex;
        .text{
            padding: 0 25%;
            text-align: center;
            margin: auto;
            margin-top: 150px;
            padding-bottom: 50px;
             @media (max-width:404px){
                padding: 0 10px;
            }
        }
        & .il-1{
            width: 40%;
             @media (max-width:404px){
                width: 60%;
            }
            margin: auto;
        }
        & .bg-1{
            width: 100%;
            position: absolute;
            bottom: 70px;
            left: 0;
        }
    }
}

</style>