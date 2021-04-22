<template>
    <div class="content3">


      <div class="content3-header"> 
        <p class="header wow animate__animated animate animate__zoomInDown">المميزات</p>
        <p class="tittle wow animate__animated animate animate__zoomInDown" data-wow-delay=".5s">هذا النص يمكن استبداله باي عنصر اخر تريدههذا النص يمكن استبداله باي عنصر اخر تريدههذا النص يمكن استبداله باي عنصر اخر تريدههذاد</p>
      </div>
      <div class="content3-card"> 
        <div class="container "> 

<div class="card-deck">
  <div class="card wow animate__animated animate animate__jackInTheBox" data-wow-delay=".3s">
   <div class="imgs"> 
                <img src="@/assets/content3/1.png" alt="">
                <img src="@/assets/content3/2.png" alt="">
                <img src="@/assets/content3/3.png" alt="">
                <img src="@/assets/content3/4.png" alt="">
                </div>
            <div class="tittle-imgs"> 
              <p>التسويق الالكتروني</p>
            </div>
  </div>
  <div class="card wow animate__animated animate animate__jackInTheBox" data-wow-delay=".6s">
    <div class="imgs"> 
                <img src="@/assets/content3/1.png" alt="">
                <img src="@/assets/content3/2.png" alt="">
                <img src="@/assets/content3/3.png" alt="">
                <img src="@/assets/content3/5.png" alt="">
                </div>            <div class="tittle-imgs"> 
              <p>تصميم هويه بصريه</p>
            </div>
  </div>
  <div class="card wow animate__animated animate animate__jackInTheBox" data-wow-delay=".9s">
    <div class="imgs"> 
                <img src="@/assets/content3/1.png" alt="">
                <img src="@/assets/content3/2.png" alt="">
                <img src="@/assets/content3/3.png" alt="">
                <img src="@/assets/content3/6.png" alt="">
                </div>            <div class="tittle-imgs"> 
              <p>تصميم جرافيك</p>
            </div>
  </div>
</div>

<div class="card-deck">
  <div class="card wow animate__animated animate animate__jackInTheBox" data-wow-delay="1.2s">
   <div class="imgs"> 
                <img src="@/assets/content3/1.png" alt="">
                <img src="@/assets/content3/2.png" alt="">
                <img src="@/assets/content3/3.png" alt="">
                <img src="@/assets/content3/7.png" alt="">
                </div>
            <div class="tittle-imgs"> 
              <p>التسويق الالكتروني</p>
            </div>
  </div>
  <div class="card wow animate__animated animate animate__jackInTheBox" data-wow-delay="1.5s">
    <div class="imgs"> 
                <img src="@/assets/content3/1.png" alt="">
                <img src="@/assets/content3/2.png" alt="">
                <img src="@/assets/content3/3.png" alt="">
                <img src="@/assets/content3/8.png" alt="">
                </div>            <div class="tittle-imgs"> 
              <p>تصميم هويه بصريه</p>
            </div>
  </div>
  <div class="card wow animate__animated animate animate__jackInTheBox" data-wow-delay="1.8s">
    <div class="imgs"> 
                <img src="@/assets/content3/1.png" alt="">
                <img src="@/assets/content3/2.png" alt="">
                <img src="@/assets/content3/3.png" alt="">
                <img src="@/assets/content3/9.png" alt="">
                </div>            <div class="tittle-imgs"> 
              <p>تصميم جرافيك</p>
            </div>
            </div>
        </div>



        </div>
      </div>
    </div>
</template>
<script>
export default {
    name:"content3",
}
</script>
<style lang="scss" scoped>

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

//- ------------------------------------------------- end media query ----------------------------------




.content3 {
  overflow: hidden;
  .content3-header {
    p.header {
    color: #413e66;
    text-align: center;
    font-size: 35px;
    font-weight: 700;
    width: 122px;
    padding-bottom: 3px;
    border-bottom: 3px solid #e6739f;
    display: block;
    margin: auto;
     @include maxmobile {
            margin-bottom:10px;
            font-size: 25px;
            width: 90px;
        }
}
    p.tittle {
    color: #b2b2c3;
    width: 45%;
    font-size: 15px;
    text-align: center;
    display: block;
    margin: auto;
    margin-top: 11px;
    @include maxmobile {
          width:90%;
            margin-bottom:40px;
            font-size: 13px;
        }
}
  }
  .content3-card {
    .container {
      padding: 0 !important;
      .card {
          margin-top:20px;
          height: 350px;
         border:0px;
         padding-top: 25px;
         background-color:#fff6fb;
         border-radius: 23px;

         &:nth-of-type(2){
             opacity:.7;
         }
         &:nth-of-type(3){
             opacity:.5;
         }
        @include maxmobile {
          width:70%;
          display:block;
          margin:auto;
            margin-bottom:20px;
        }
        
        .imgs {
          position: relative;
          height: 60%;
          @include maxsmall {
            transform: scale(0.77);
          }
          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -40%);
            
          }
        }
        .tittle-imgs {
          text-align: center;
          font-size: 22px;
          p{
              color:#706b8b;
                text-align: center;
                margin-top:10px;
                @include maxsmall {
            font-size: 17px;
                margin: 0px;
          }
          }
          
        }
        &:hover {
          background-color: #fce5f1;
          opacity: 1;
        }
      }
    }
  }
}
</style>