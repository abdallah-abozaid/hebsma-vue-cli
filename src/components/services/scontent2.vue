<template>
    <div class="scontent2">
      <div class="scontent2-card"> 
        <div class="container"> 
          <div class="card"> 
            <div class="imgs"> <img src="@/assets/service/1.png" alt=""><img src="@/assets/service/2.png" alt=""><img src="@/assets/service/3.png" alt=""><img src="@/assets/service/4.png" alt=""></div>
            <div class="tittle-imgs"> 
              <p>التسويق الالكتروني</p>
            </div>
          </div>
          <div class="card"> 
            <div class="imgs"> <img src="@/assets/service/1.png" alt=""><img src="@/assets/service/2.png" alt=""><img src="@/assets/service/3.png" alt=""><img src="@/assets/service/5.png" alt=""></div>
            <div class="tittle-imgs"> 
              <p>تصميم هويه بصريه</p>
            </div>
          </div>
          <div class="card"> 
            <div class="imgs"> <img src="@/assets/service/1.png" alt=""><img src="@/assets/service/2.png" alt=""><img src="@/assets/service/3.png" alt=""><img src="@/assets/service/6.png" alt=""></div>
            <div class="tittle-imgs"> 
              <p>تصميم جرافيك</p>
            </div>
          </div>
          <div class="card"> 
            <div class="imgs"> <img src="@/assets/service/1.png" alt=""><img src="@/assets/service/2.png" alt=""><img src="@/assets/service/3.png" alt=""><img src="@/assets/service/7.png" alt=""></div>
            <div class="tittle-imgs"> 
              <p>خدمات الكتابه الابداعيه</p>
            </div>
          </div>
          <div class="card"> 
            <div class="imgs"> <img src="@/assets/service/1.png" alt=""><img src="@/assets/service/2.png" alt=""><img src="@/assets/service/3.png" alt=""><img src="@/assets/service/8.png" alt=""></div>
            <div class="tittle-imgs"> 
              <p>التصوير والمنتاج</p>
            </div>
          </div>
          <div class="card"> 
            <div class="imgs"> <img src="@/assets/service/1.png" alt=""><img src="@/assets/service/2.png" alt=""><img src="@/assets/service/3.png" alt=""><img src="@/assets/service/9.png" alt=""></div>
            <div class="tittle-imgs"> 
              <p>تحسين محركات البحث</p>
            </div>
          </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:"scontent2",
}
</script>
<style lang="scss">

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



.scontent2 {
  margin: 70px 0px;
  .scontent2-card {
    .container {
      padding: 0 !important;
      .card {
        width: 32%!important;
        display: inline-block!important;
        vertical-align: top;
        margin-left: 1.5%;
        margin-bottom: 2%;
        height: 350px;
        border-radius: 10px;
        border: none;
        background-color: #fff6fb;
  .tittle-imgs {
        p{
             font-size: 20px;
             color: #413e66;
             text-align: center;
             font-weight: 600;
             margin: 20px 0px;
             @include maxsmall {
          margin: 0px 0px;
        }
        }
     
    }
  @include maxmobile {
    height: 300px;
    width: 47.5%;
    margin-left: 4%!important;
      &:nth-of-type(2),
  &:nth-of-type(4),&:nth-of-type(6)  {
    margin-left: 0!important;
  }
  &:nth-of-type(3)  {
    margin-left: 4%!important;
  }
  }
  &:nth-of-type(3),
  &:nth-of-type(6) {
    margin-left: 0;
  }
  &:nth-of-type(2),
  &:nth-of-type(5) {
    opacity: 0.7;
  }
  @include maxmediam {
    width: 47.5%;
    margin-left: 2%;
    height: 300px;
    &:nth-of-type(2),
    &:nth-of-type(4),
    &:nth-of-type(6) {
      opacity: 0.6;
    }
    &:nth-of-type(1),
    &:nth-of-type(3),
    &:nth-of-type(5) {
      opacity: 1;
    }
    
  }
        @include maxsmall {
          width: 47% !important;
        }
        width: 32% !important;
        .imgs {
          position: relative;
          height: 60%;
          @include maxsmall {
            transform: scale(0.67);
          }
          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -40%);
            &:nth-of-type(2) {
              top: 52%;
              left: 48%;
            }
          }
        }
        .tittle-imgs {
          text-align: center;
          font-size: 22px;
          @include maxsmall {
            font-size: 17px;
          }
        }
        &:hover {
          background-color: #fce5f1;
          opacity: 1;
          box-shadow: 2px 2px 10px  #f8dae9;
        }
      }
    }
  }
}
</style>