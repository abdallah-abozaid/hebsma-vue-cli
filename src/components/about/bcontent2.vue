<template>
    <div class="bcontent2 container">
      <div class="row">
        <div class="bcontent2-img col-sm-6"> <img src="@/assets/about/1.png" alt=""></div>
        <div class="bcontent2-text col-sm-6">
          <p>تعرّف علينا</p>
          <p>هذا النص يمكن استبداله باي نص اخر تريدههذا النص يمكن استبداله باي نص اخر تريدههذا النص يمكن استبداله باي نص اخر تريدههذا النص يمكن استبداله باي نص اخر تريده </p>
          <input type="submit" value="اقرا المزيد >">
      </div>
    </div>
    </div>
</template>
<script>
export default {
    name:"bcontent2",
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



.bcontent2 {
  margin-bottom: 40px;
  margin-top: 40px;

  .bcontent2-img {
    padding: 50px 50px;
    @include maxmediam {
      padding: 20px 20px 10px;
    }
    @include maxsmall {
      padding: 30px 0px 0px 40px;
    }
    @include maxmobile {
      padding: 30px 30px 20px;
    }
    img {
      width: 100%;
      animation: translating 2s linear infinite alternate;
      @include maxmobile {
        width: 50%;
        margin: auto;
        display: block;
      }
    }
  }
  .bcontent2-text {
    text-align: right;
    padding: 11% 8% 0px 10%;
    @include maxlarge {
      padding: 13% 2% 0px 5%;
    }
    @include maxmediam {
      padding: 13% 5% 0px 5%;
    }
    @include maxsmall {
      padding: 13% 0% 0px 2%;
    }
    @include maxmobile {
      padding: 0% 7% 0px 5%;
    }
    p {
      color:#a3a3b7 ;
      @include maxlarge {
        font-size: 14px;
      }
      @include maxmediam {
        font-size: 12px;
      }
      @include maxmobile {
        text-align: center;
        font-size: 10px;
        margin-bottom: 6px;
      }
      &:first-of-type {
        font-size: 34px;
        font-weight: 900;
        color: #413e66;
        @include maxmediam {
          font-size: 28px;
        }
        @include maxmobile {
          font-size: 20px;
        }
      }
    }
    input {
      padding: 16px 40px;
      background-color:#cb1a75;
      color: white;
      border: none;
      border-radius: 40px;
      font-weight: 500;
       &:hover {
        background-color: white;
        color: #cb1a75;
        font-weight: 800;
        transition: all .6s linear;
        border: 3px solid #cb1a75;
      }
      @include maxlarge {
        padding:9px 19px;
        border-radius: 50px;
        font-size: 12px;
      }
      @include maxmediam {
        padding:6px 14px;
        border-radius: 50px;
        font-size: 12px;
      }
      @include maxmobile {
        padding: 6px 14px;
        border-radius: 50px;
        font-size: 11px;
        margin: auto;
        display: block;
      }
    }
  }
}
</style>