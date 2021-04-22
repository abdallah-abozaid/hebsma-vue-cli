<template>
    <div class="content2">
      <div class="container">
          <div class="img-content">
               <img src="@/assets/content2.png" alt="">
               </div>
               <div class="text-content"> 
          <p class="header wow animate__animated animate animate__lightSpeedInLeft" >تعرّف على <span>هبسما</span></p>
          <p class="wow animate__animated animate animate__rotateInUpRight">هذا النص يمكن استبداله باي عنصر اخر تريدههذا النص يمكن استبداله باي عنصر اخر تريدههذا النص يمكن استبداله باي عنصر اخر تريدههذا النص يمكن استبداله باي عنصر اخر تريده</p>
          <input type="submit" value="اقرا المزيد &gt;" class="wow animate__animated animate animate__jackInTheBox">
          </div></div>

    </div>
</template>
<script>

export default {
    name:"content2",
    
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

@keyframes translating{
  0%{
    transform: translate(0px ,-10px);
  }
  100%{
    transform: translate(0px ,20px);
  }
}
//- ------------------------------------------------- end media query ----------------------------------



.content2 {
  background-image: url(~@/assets/back2.png);
  background-size: cover;
  height: 500px;
  overflow: hidden;
  padding-top: 20px;
  @include maxmediam {
    height: 330px;
  }
  @include maxsmall {
    height: 250px;
  }
  @include maxmobile {
    height: 570px;
  }
  .container .img-content {
    display: inline-block;
    vertical-align: top;
    width: 50%;
    @include maxmobile {
      width: 60%;
      height: 300px;
      margin: 1px auto;
      display: block;
    }
    img {
      width: 100%;
      height: 100%;
      animation: translating 2s linear infinite alternate;
    }
  }
  .container .text-content {
    display: inline-block;
    vertical-align: top;
    width: 49%;
    text-align: right;
    
    padding: 140px 5% 0px;
    @include maxmediam {
      padding: 50px 3% 0px;
    }
    @include maxmobile {
      width: 90%;
      margin: auto;
      display: block;
      padding: 0px 0px 0px;
      text-align: center;
    }
    p.header {
        color: #413e66;
    font-size: 35px;
    font-weight: 900;
      @include maxmediam {
        font-size: 25px;
      }
      @include maxsmall {
        font-size: 21px;
      }
      @include maxmobile {
      text-align: center;
    }
      span {
        color: #cb1a75;
        z-index: 4;
      }
    }
    p {
        color: #9394ab;
      @include maxmediam {
        font-size: 14px;
      }
      @include maxsmall {
        font-size: 11px;
      }
      @include maxmobile {
      text-align: center;
    }
    }
    input {
        padding: 10px 30px;
    border-radius: 30px;
    border: none;
    background-color: #cb1a75;
      &:hover {
        background-color: white;
        color: #cb1a75;
        font-weight: 800;
        transition: all .6s linear;
        border: 3px solid #cb1a75;
      }
      @include maxmediam {
        padding: 10px 20px;
        margin-top: 2px;
      }
      @include maxsmall {
        padding: 7px 17px;
        margin-top: 1px;
      }
      @include maxmobile {
      padding: 5px 14px;
      font-size:14px; 
      
    }
    }
  }
}
</style>