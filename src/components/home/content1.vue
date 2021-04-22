<template>
    <div class="content1">
          

<img src="@/assets/back.png" class="back">
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner container">
    <div class="carousel-item active">
      <div class="inner row">
<div class="innertext col-sm-6">
 <p class="one wow animate__animated animate__backInRight">نصل بك الى</p>
  <p class="two wow animate__animated animate__backInRight" data-wow-delay="0.5s">التقنية من اوسع ابوابها</p>
  <p class="three wow animate__animated animate__backInRight" data-wow-delay="1s">من خلال خدماتنا الاحترافية</p>
  <input type="submit" value="تعرف علينا" class=" wow animate__animated animate__flipInX" data-wow-delay="1.5s">
</div>
<div class="innerimg col-sm-6">
<img src="@/assets/home1.png" class="d-block w-100" >
</div>
      </div>
      
    </div>
    <div class="carousel-item">
      <div class="inner row">
<div class="innertext col-sm-6">
  <p class="one  wow animate__animated animate__backInRight">نصل بك الى</p>
  <p class="two  wow animate__animated animate__backInRight" data-wow-delay="0.5s">التقنية من اوسع ابوابها</p>
  <p class="three  wow animate__animated animate__backInRight" data-wow-delay="1s">من خلال خدماتنا الاحترافية</p>
  <input type="submit" value="تعرف علينا" class=" wow animate__animated animate__flipInX" data-wow-delay="1.5s">
</div>
<div class="innerimg col-sm-6">
<img src="@/assets/home1.png" class="d-block w-100" >
</div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="inner row">
<div class="innertext col-sm-6">
  <p class="one wow animate__animated animate__backInRight">نصل بك الى</p>
  <p class="two wow animate__animated animate__backInRight" data-wow-delay="0.5s">التقنية من اوسع ابوابها</p>
  <p class="three wow animate__animated animate__backInRight" data-wow-delay="1s">من خلال خدماتنا الاحترافية</p>
  <input type="submit" value="تعرف علينا" class=" wow animate__animated animate__flipInX" >
</div>
<div class="innerimg col-sm-6">
<img src="@/assets/home1.png" class="d-block w-100" >
</div>
      </div>
    </div>
  </div>

</div>



    </div>
</template>
<script>
export default {
    name:"content1"
}
</script>
<style lang="scss" >




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

.content1{
  height: 500px;
   overflow: hidden;
  @include maxmediam{
    height:450px;
  }
  .carousel-inner {
    overflow: visible;
}
}

*{
  color: white;
}
.inner{
}
nav{
  padding: 0px!important;
}
.home .back{
  position: absolute;
  top: 0;
  right: 0;
  z-index:-1;
  width: 74%;
  @include maxmediam{
    height: 450px;
  }
  @include maxmobile{
    width: 80%;
    height: 500px;
  }
}
.innertext{
  padding-top:5%;
  
  @include maxlarge{
       padding-top:3%;
  }
  @include maxmobile{
padding-top:0px;
margin-bottom: 10px;
  }
  @include maxmediam{
    padding-right: 0px!important;
  }
  p{
    margin-bottom:0px;
    @include maxmobile{
    padding-right: 10%;
  }
  }
    p.one {
    font-size: 22px;
    @include maxlarge{
      font-size: 20px;
    }
     @include maxmediam{
     font-size: 18px;
  }
     @include maxsmall{
     font-size: 14px;
  }
     

  }
    p.two {
    font-size: 50px;
    font-weight: 900;
    @include maxlarge{
      font-size: 40px;
    }
    @include maxmediam{
     font-size: 35px;
  }
   @include maxsmall{
     font-size: 25px;
  }
  @include maxmobile{
     font-size: 20px;
  }
}
    p.three {
    font-size: 45px;
    font-weight: 700;
    @include maxlarge{
      font-size: 35px;
    }
    @include maxmediam{
     font-size: 30px;
  }
  @include maxsmall{
     font-size: 19px;
  }
}
input{
  padding: 13px 40px;
    cursor: pointer;
    font-size: 14px;
    border-radius: 28px;
    border: none;
    background-color: #e6739f;
    margin-top: 20px;
     border: 3px solid transparent;
    &:hover {
        background-color: white;
        color: #cb1a75;
        font-weight: 800;
        transition: all .6s linear;
        border: 3px solid #cb1a75;
      }
    @include maxlarge{
      padding: 10px 30px;
      margin-top: 10px;
    }
    @include maxmediam{
    padding: 7px 25px;
  }
  @include maxsmall{
     padding: 4px 20px;
     font-size: 11px;
  }
 @include maxmobile{
    margin-right: 10%;
  }
}
}
.innerimg{
  padding: 0!important;
   
  img{
    animation: translating 2s linear infinite alternate;
    z-index: 42;
    @include maxmobile{
    width: 70%!important;
    display: block;
    margin: auto;
  }
  }
}
.carousel-indicators {
bottom: 40%!important;
display: block!important;
margin: 0!important;
@include maxlarge{
      bottom: 35%!important;
      right: -1%!important;
    }
     @include maxmediam{
    bottom: 30%!important;
  }
  @include maxsmall{
     bottom: -30%!important;
display: flex!important;
  }
li{
  width: 7px!important;
  height: 30px!important;
  @include maxmediam{
    width: 4px!important;
  height: 20px!important;
  }
  @include maxsmall{
     width: 10px!important;
  height: 4px!important;
  }
}
}
</style>