<template>
    <div class="callcontent2">
      <div class="container"> 
        <div class="row"> 
        
          <div class="callcontent2-text col-sm-5"> 
            <p class="tittle">كن على تواصل معنا </p>
            <p>هذا النص يمكنك استبداله باي نص اخر تريده هذا النص يمكنك استبداله باي نص اخر تريده هذا النص يمكنك استبداله باي نص اخر تريده </p>
            <div class="inner-text"> 
              <div class="list row"> 
               
                <div class="imgs col-3"> <img src="@/assets/call/1.png" alt=""><img src="@/assets/call/11.png" alt=""><img src="@/assets/call/111.png" alt=""><img src="@/assets/call/1111.png" alt=""></div>
               <div class="text col-9"> 
                  <p class="head">عنواننا </p>
                  <p>برج الجلاء - غزة - فلسطين</p>
                </div>
              </div>
              <div class="list row"> 
               
                <div class="imgs col-3"> <img src="@/assets/call/2.png" alt=""><img src="@/assets/call/22.png" alt=""><img src="@/assets/call/222.png" alt=""><img src="@/assets/call/2222.png" alt=""></div>
               <div class="text col-9"> 
                  <p class="head">البريد الاكتروني </p>
                  <p>abdallah@gmail.com</p>
                </div>
              </div>
              <div class="list row"> 
                
                <div class="imgs col-3"> <img src="@/assets/call/3.png" alt=""><img src="@/assets/call/33.png" alt=""><img src="@/assets/call/333.png" alt=""><img src="@/assets/call/3333.png" alt=""></div>
             <div class="text col-9"> 
                  <p class="head">الهاتف </p>
                  <p>0599197739</p>
                </div>
              </div>
            </div>
          </div>
            <div class="callcontent2-img col-sm-7"> <img src="@/assets/call/one.png" alt=""></div>
      </div>
    </div>
            
    </div>
</template>
<script>
export default {
    name:"callcontent2",
}
</script>
<style lang="scss"  >
//- ------------------------------------------------- start media query ----------------------------------
@mixin maxmobile {
  @media (max-width: 576px) {
    @content;
  }
}

@mixin maxsmall {
  @media (max-width: 768px) {
    @content;
  }
}

@mixin maxmediam {
  @media (max-width: 992px) {
    @content;
  }
}

@mixin maxlarge {
  @media (max-width: 1200px) {
    @content;
  }
}
@keyframes translating{
  0%{
    transform: translate(0px ,-10px);
  }
  100%{
    transform: translate(0px ,20px);
  }
}
//- ------------------------------------------------- end media query ----------------------------------


.callcontent2 {
  margin: 50px 0px 100px;
  .container .row .callcontent2-img {
    animation: translating 2s linear infinite alternate;
    img {
      width: 100%;
      transform: scale(1.1) translate(0px, 50px);
      height: 100%;
       
      @include maxmobile {
        width: 80%;
        margin: auto;
        display: block;
      }
    }
  }
  .container .row .callcontent2-text {
    text-align: right;
    padding: 0px;
    padding-top: 100px;
     p{
            color: #9c99be;
        }
    @include maxmobile {
      width: 80%;
      display: block;
      margin: auto;
    }
    @include maxmediam {
      font-size: 14px;
    }
    @include maxsmall {
      font-size: 11px;
      padding-top: 50px;
    }
    p.tittle {
      font-size: 35px;
      font-weight: 900;
      color: #413e66;
      margin-bottom: 1px;
      @include maxmediam {
        font-size: 30px;
      }
      @include maxsmall {
        font-size: 25px;
      }
    }
    .inner-text .list {
      margin-top: 35px;
      @include maxmediam {
        margin-top: 20px;
      }
      .imgs {
        position: relative;

        img {
          position: absolute;
          top: 50%;
          left: 50%;
          padding: 0;
          transform: translate(-50%, -50%);
          @include maxmediam {
            transform: scale(0.8) translate(-75%, -50%);
          }
          @include maxsmall {
            transform: scale(0.7) translate(-80%, -80%);
          }
          @include maxmobile {
            transform: scale(0.9) translate(-50%, -50%);
          }
          &:nth-of-type(1) {
            z-index: 4;
          }
          &:nth-of-type(2) {
            z-index: 3;
          }
          &:nth-of-type(3) {
            z-index: 2;
          }
          &:nth-of-type(4) {
            z-index: 1;
          }
        }
      }
      .text {
        p{
            color: #9c99be;
        }
        @include maxmobile {
          text-align: right;
        }
        p.head {
          margin: 3px;
          font-weight: 600;
          font-size: 20px;
          color: #585579;
          @include maxmediam {
            font-size: 17px;
            margin: 4px 0px 0px;
            padding-top: 10px;
          }
        }
      }
    }
  }
}
</style>