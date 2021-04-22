<template>
    <div class="content5">



      <div class="content5-header"> 
        <p class="header wow animate__animated animate animate__zoomInDown">كيف نعمل؟</p>
        <p class="tittle wow animate__animated animate animate__zoomInDown" data-wow-delay=".5s">هذا النص يمكن استبداله باي عنصر اخر تريدههذا النص يمكن استبداله باي عنصر اخر تريدههذا النص يمكن استبداله باي عنصر اخر تريدههذاد</p>
      </div>
      <div class="main4-work">
        <div class="works"><img class="back" src="@/assets/content5/back-arrow.png" alt="">
          <div class="container">
            <div class="card">
              <div class="card-work"> <img src="@/assets/content5/1.png" alt=""><img src="@/assets/content5/11.png" alt=""></div>
              <p>جمع الافكار</p>
            </div>
            <div class="card">
              <p>التخطيط والابتكار</p>
              <div class="card-work"> <img class="odd" src="@/assets/content5/2.png" alt=""><img src="@/assets/content5/22.png" alt=""></div>
            </div>
            <div class="card">
              <div class="card-work"> <img class="odd2" src="@/assets/content5/3.png" alt=""><img src="@/assets/content5/33.png" alt=""></div>
              <p>التنفيذ الابداعي</p>
            </div>
            <div class="card">
              <p>الاختيار والتقييم</p>
              <div class="card-work"> <img class="odd2" src="@/assets/content5/4.png" alt=""><img src="@/assets/content5/44.png" alt=""></div>
            </div>
          </div>
        </div>
    </div>




    </div>
</template>
<script>
export default {
    name:"content5"
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
@keyframes scaling1{
  0%{
    transform: scale(.9);
  }
  100%{
    transform: scale(1);
  }
}
@keyframes scaling2{
  0%{
    transform: scale(1);
  }
  100%{
    transform: scale(1.1);
  }
}
//- ------------------------------------------------- end media query ----------------------------------




.content5 {
  background-color: #f7f9ff;
  padding: 50px 0px;
  position: relative;
  margin-top: 50px;
  @include maxmediam {
    padding: 10px 0px;
  }
  .content5-header {
    margin-bottom: 20px;
    .header {
        color: #413e66;
    text-align: center;
    font-size: 35px;
    font-weight: 700;
    width: 170px;
    padding-bottom: 3px;
    border-bottom: 3px solid #cb1a75;
    display: block;
    margin: auto;
    @include maxsmall {
            font-size: 26px;
            width: 150px;
        }
     @include maxmobile {
            margin-bottom:10px;
            font-size: 21px;
            width: 120px;
        }
    }
    .tittle {
           color: #b2b2c3;
    width: 45%;
    font-size: 15px;
    text-align: center;
    display: block;
    margin: auto;
    margin-top: 11px;
    @include maxmediam {
          width:70%;
            margin-bottom:30px;
            font-size: 14px;
        }
    @include maxmobile {
          width:90%;
            margin-bottom:40px;
            font-size: 13px;
        }
    }
    @include maxmediam {
      margin: 25px auto;
    }
  }
  .works {
    position: relative;
    width: 100%;
    margin-bottom: 10px;
    padding: 20px 20px 0px;
    @include maxmediam {
      margin: 0px;
    }
    img.back {
      position: absolute;
      top: 19%;
      left: 0;
      width: 100%;
          z-index: 0;
          @include maxmediam{
              height: 25%;
          }
    }
    .container {
      padding: 0;
      .card {
        width: 24.7%;
        display: inline-block;
        vertical-align: top;
        height: 350px;
        background: none;
        border: none;
        &:nth-of-type(1),&:nth-of-type(3){
         animation: scaling1 2s linear infinite alternate; 
        }
        animation: scaling2 2s linear infinite alternate;
        
        @include maxmediam {
          width: 23.5%;
        }
        @include maxsmall {
          height: 260px;
        }
        .card-work {
          position: relative;
          height: 60%;
          img{
              position:absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%,-50%);
          }

          @include maxmediam {
            height: 45%;
          }
          @include maxmobile {
            height: 40%;
          }

          img {
            @include maxmediam {
              &:first-of-type {
                width: 80%;
              }
              &:last-of-type {
                width: 30%;
              }
            }
          }
          .odd {
            width: 113% !important;
            
            @include maxlarge {
              width: 133% !important;
            }
          }
          .odd2 {
            width: 125% !important;
          }
        }
        p {
          text-align: center;
          margin: 10px 0px;
          font-weight: 600;
          color: #413e66;
          @include maxmediam {
            font-size: 14px;
          }
          @include maxsmall {
            font-size: 11px;
          }
          @include maxmobile {
            font-size: 9px;
            margin: 0px 0px;
          }
        }
      }
    }
  }
}



</style>