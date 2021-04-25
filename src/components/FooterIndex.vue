<template>
    <section class="footer">
        <div class="footer__form">
            <h5 class="title">Sign up for the Mailing List</h5>
            <p class="description">
                We don’t send these very often so you know if you get an email from us, it’s gonna be good and it’s gonna be worth reading!
            </p>
            <form action="#">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input class="input-text" type="text" placeholder="name">
                </div>
                 <div class="form-group">
                    <label for="email">Email</label>
                    <input class="input-text" type="text" placeholder="email">
                </div>
                <div class="form-group">
                    <input class="input-checkbox" type="checkbox" value="1">
                    <span>I agree to receive cool stuff from the Secret Boxes Team!</span>
                </div>
                <div>
                     <button type="submit" class="btn btn-primary">Subscribe</button>
                </div>
            </form>
        </div>
        <div class="footer__contact">

            <a href="#" class="title"> <h3> CONTACT US</h3></a>
            <br>
            <a href="#" class="title"> <h3> TEAM</h3></a>
            <br>
            <a href="#" class="title"> <h3>GITHUB </h3> </a>
          
            <p>
                We’d love to hear from you! Feel free to contact us with your ideas or feedback.
                And check out our GitHub to see how you can contribute.
            </p>

            <a href="#">support@secretboxes.io</a>
        </div>


         <img src="/img/footer-il1.png" class="footer__il1" alt="Il1">
         <img src="/img/footer-il2.png" class="footer__il2" alt="Il2">
         <img src="/img/footer-il3.png" class="footer__il3" alt="Il3">

         
    </section>
</template>



<style lang="scss" scope>
.footer{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    min-height: 800px;
    @media (max-width:1024px){
        min-height: 180px;

    }
    &__form{
       width: 60%;
       height: auto;
       padding: 50px 20% 50px 10%;
       display: flex;
       flex-wrap: wrap;
       align-items: center;
       align-content: center;
       background: var(--primary);
       & .title{
           margin-bottom: 20px;
       }
       & .description{
           margin-bottom: 20px;
       }
       & .btn-default{
           margin-top: 10px;
           margin-right: 10px;
       }
       & .form-group{
           display: flex;
           flex-wrap: wrap;
           width: 100%;
           margin-bottom: 20px;
           & label{
               margin-bottom: 10px;
               width:100%
           }
           & .input-text{
               width: 100%;
               background: white;
               padding:14px;
               border-radius: 10px;
               border:1px solid var(--default)
           }
           & .input-checkbox{
               width:20px;
               height:20px;
               margin-right: 10px;
           }
       }
        @media (max-width:1024px){
            display: none;
        }
    }
     &__contact{
       background: var(--primary-gray);
       width: 40%;
       height: auto;
       padding:50px 10%;
       color: white;
       display: flex;
       flex-wrap: wrap;
       align-items: center;
       align-content: center;
       & a{
           color: white;
       }
       & p{
           padding: 50px 0;
       }
       & .title{
           width:100%;
           line-height: 50px;
       }
         @media (max-width:1024px){
            display: none;
        }
    }
    &__il1{
        position: absolute;
        left: 45%;
        height: 90%;
    }
     &__il2{
        position: absolute;
        left: 30%;
        top: 70%;
    }
     &__il3{
        position: absolute;
        left: 80%;
        top: 80%
    }

    @media (max-width:1024px){
         &__il1{
           display: none;
        }
        &__il2{
            display: none;

        }
        &__il3{
            display: none;

        }
    }
}
</style>