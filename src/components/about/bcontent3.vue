<template>
    <div class="bcontent3 ">
      <div class="container"> 
        <div class="row"> 
          <div class="bcontent3-text col-sm-5"> 
            <p class="tittle">رؤيتنا </p>
            <p>هذا النص يمكن استبداله باي نص اخر تريدههذا النص يمكن استبداله باي نص اخر تريدههذا النص يمكن استبداله باي نص اخر تريدههذا النص يمكن استبداله باي نص اخر تريد</p>
            <p class="tittle">أهدافنا</p>
            <p>هذا النص يمكن استبداله باي نص اخر تريدههذا النص يمكن استبداله باي نص اخر تريدههذا النص يمكن استبداله باي نص اخر تريدههذا النص يمكن استبداله باي نص اخر تريد</p>
          </div>
          <div class="bcontent3-img col-sm-7"> <img src="@/assets/about/2.png" alt=""></div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name:"bcontent3",
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

.bcontent3 {
  background-image: url(~@/assets/about/back1.png);
  padding: 98px 0px;
  background-size: cover;
  height: 700px;
  @include maxlarge {
    height: 600px;
  }
  @include maxmediam {
    padding: 90px 0px;
    height: 500px;
  }
  @include maxsmall {
    padding: 60px 0px;
    height: 400px;
  }
  @include maxmobile {
    height: 600px;
  }
  .container .row .bcontent3-text {
    padding: 8% 0px;
    text-align: right;
   
    padding-left: 10px;
    @include maxlarge {
      padding: 5% 0px;
      font-size: 14px;
    }
    @include maxmediam {
      padding: 2% 0px;
      font-size: 12px;
    }
    @include maxsmall {
      font-size: 11px;
    }
    @include maxmobile {
      padding: 10px 20px;
    }
    p{
         color: #a3a3b7 ;
      @include maxmobile {
      text-align: center;
    }
    }
    p.tittle {
      font-size: 30px;
      font-weight: 900;
      margin-bottom: 1px;
       color: #413e66;
      @include maxsmall {
        font-size: 23px;
      }
    }
    
  }
  .container .row .bcontent3-img {
    img {
      width: 100%;
      height: 90%;
      animation: translating 2s linear infinite alternate;
      @include maxmobile {
        width: 90%;
        display: block;
        margin: 0px auto 30px;
        padding-bottom: 60px;
      }
    }
  }
}

</style>