<template>
    <div class="content6">
      <div class="content6-header"> 
        <p class="header wow animate__animated animate animate__zoomInDown">جديد دوراتنا </p>
      </div>
      <div class="content6-corse container">
        <div class="corse"> 
          <div class="corse-img"> <img src="@/assets/content6/1.png" alt=""></div>
          <div class="corse-text"> 
            <p>دوره تعلم تطوير مواقع الويب </p><a href="#">اشترك الان   <fa-icon :icon="['fas','arrow-circle-left']"/>   </a>
          </div>
        </div>
        <div class="corse"> 
          <div class="corse-img"> <img src="@/assets/content6/2.png" alt=""></div>
          <div class="corse-text"> 
            <p>دوره برمجه تطبيقات الهواتف الذكيه </p><a href="#">اشترك الان   <fa-icon :icon="['fas','arrow-circle-left']"/>  </a>
          </div>
        </div>
        <div class="corse"> 
          <div class="corse-img"> <img src="@/assets/content6/3.png" alt=""></div>
          <div class="corse-text"> 
            <p>دوره صناعه العاب الويب المتطوره </p><a href="#"> اشترك الان  <fa-icon :icon="['fas','arrow-circle-left']"/> </a>
          </div>
        </div>
      </div>

    </div>
</template>
<script>
export default {
    name:"content6",
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

@keyframes rotating{
  0%{
    transform: rotate(3deg) scale(1.06);
    
  }
  100%{
    transform: rotate(-3deg) scale(1.06);
  }
}

//- ------------------------------------------------- end media query ----------------------------------




.content6 {
  padding: 50px 0px;
  perspective: 1000px;
  @include maxmediam {
    padding: 10px 0px;
  }
  .content6-header {
    margin-bottom: 30px;
    @include maxsmall {
      margin-top: 30px;
      margin-bottom: 0px;
    }
    .header {
       color: #413e66;
    text-align: center;
    font-size: 35px;
    font-weight: 700;
    width: 160px;
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
  }
  .content6-corse {
    padding: 0;
    transition: all .5s linear;
    .corse {
      display: inline-block;
      vertical-align: top;
      width: 31.5%;
      margin-right: 2%;
      height: 350px;
      border-radius: 23px;
      box-shadow: 3px 3px 27px gray;
      transition: all 1s ease-in-out;
      &:hover{
        animation: rotating 1s linear infinite alternate;
        
      }
      &:hover .corse-img img {
            transition: all .5s linear;
          transform: scale(1.1);
          border-radius: 23px;
          
        }
      &:nth-of-type(1) {
        margin-right: 0;
      }
      @include maxmediam {
        height: 250px;
      }
      @include maxsmall {
        height: 200px;
        display: block;
        width: 70%;
        margin: 30px auto !important;
      }
      .corse-img {
        width: 100%;
        border-top-right-radius: 23px;
        border-top-left-radius: 23px;
        height: 65%;
        overflow: hidden;
        
        img {
          width: 100%;
          height: 100%;
        }
      }
      .corse-text {
        height: 35%;
        text-align: right;
        padding: 17px 25px;
        @include maxsmall {
          padding: 5px 10px;
        }
        p {
          font-size: 18px;
          font-weight: 700;
          margin: 0;
          color: #413e66;
          @include maxmediam {
            font-size: 13px;
          }
          @include maxsmall {
            font-size: 11px;
          }
        }
        a {
          color: #cb1a75;
          font-weight: 700;
          @include maxmediam {
            font-size: 13px;
          }
          @include maxsmall {
            font-size: 10px;
          }
        }
        path{
            fill: #cb1a75;
            border-radius: 20px;
        }
      }
    }
  }
}







</style>