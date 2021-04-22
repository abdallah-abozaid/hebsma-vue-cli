<template>
    <div class="content7">


      <div class="content7-corse container">
        <div class="corse corse1"> 
          <p class="tittle  wow animate__animated animate animate__rotateInDownRight">ماذا قال عملائنا عنا</p>
          <p class="big  wow animate__animated animate animate__rotateInDownRight">عملائنا تكرمو لنا بعبارات</p>
          <p class="big  wow animate__animated animate animate__rotateInDownRight">بسيطه حول خدمتنا</p>
        </div>
        <div class="corse corse2">
          <p class="text">هذا النص تستطيع استبداله باي نص اخر تريدههذا النص تستطيع استبداله باي نص اخر تريدهذا النص تستطيع استبداله باي نص اخر تريدههذا النص تستطيع استبداه</p>
          <div class="auther"> <img src="@/assets/content7/2.png" alt=""><span class="athure-name"> 
              <p class="name">خالد الرباح </p>
              <p class="lname">المدير التنفيذي لشركه الحياة</p></span></div><img class="quite" src="@/assets/content7/1.png">
        </div>
        <div class="corse corse3"> 
          <p class="text">هذا النص تستطيع استبداله باي نص اخر تريدههذا النص تستطيع استبداله باي نص اخر تريدهذا النص تستطيع استبداله باي نص اخر تريدههذا النص تستطيع استبداه</p>
          <div class="auther"> <img src="@/assets/content7/3.png" alt=""><span class="athure-name"> 
              <p class="name">محمد البنا </p>
              <p class="lname">المدير التنفيذي لشركه الحياة</p></span></div><img class="quite" src="@/assets/content7/1.png">
        </div>
    </div>

    </div>
</template>
<script>
export default {
    name:"content7",
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












.content7 {
  padding: 50px 0px;
  background-color: #f7f9ff;
  text-align: right;
  margin-top: 30px;

  @include maxmediam {
    padding: 40px 0px;
  }
  @include maxsmall {
    padding: 0px 0px 40px;
  }
  .content7-corse .corse2 {
      box-shadow: 1px 1px 10px 1px #cecbcb;
    position: relative;
    img.quite {
      position: absolute;
      left: 15%;
      bottom: 23%;
      z-index: -1;
    }
    @include maxsmall {
      margin-left: 5% !important;
    }
    @include maxmobile {
      margin-left: 5% !important;
      width: 99% !important;
      margin: 10px auto !important;
      display: block;
    }
  }
  .content7-corse .corse3 {
    position: relative;
box-shadow: 1px 1px 10px 1px #cecbcb;
    img.quite {
      position: absolute;
      left: 15%;
      bottom: 23%;
      z-index: -1;
    }
    @include maxmobile {
      margin-left: 5% !important;
      width: 99% !important;
      margin: 10px auto !important;
      display: block;
    }
  }
  .content7-corse .corse {
    display: inline-block;
    vertical-align: top;
    width: 31.5%;
    margin-right: 2%;
    padding: 45px 30px;
    background-color: white;
    z-index: 3;
    &:hover {
      img.quite {
        left: 55%;
        bottom: 56%;
        transform: scale(2);
        transition: all 1s linear;
      }
    }
    @include maxmediam {
      padding: 20px 10px;
    }
    @include maxsmall {
      width: 46%;
      margin-right: 0;
    }

    &:nth-of-type(1) {
      margin-right: 0;
      padding-top: 8%;
      background-color: transparent;
      @include maxsmall {
        width: 80%;
        
        margin: auto;
        display: block;
        p{
            text-align: center;
        }
      }
      .tittle {
        color: #cb1a75;
        font-weight: 800;
        font-size: 20px;
        @include maxlarge {
          font-size: 18px;
        }
        @include maxmediam {
          font-size: 13px;
        }
        @include maxsmall {
          font-size: 18px;
        }
        @include maxmobile {
          font-size: 15px;
        }
      }
      .big {
        color: #413e66;
        font-weight: 700;
        font-size: 27px;
        margin-bottom: 3px;
        @include maxlarge {
          font-size: 23px;
        }
        @include maxmediam {
          font-size: 16px;
        }
        @include maxsmall {
          font-size: 22px;
          margin-bottom: 0px;
        }
        @include maxmobile {
          font-size: 18px;
        }
      }
    }
    .text {
      line-height: 1.8;
      font-size: 14px;
      color: #ababbd;
      margin-bottom: 30px;
      @include maxlarge {
        font-size: 13px;
      }
      @include maxmediam {
        font-size: 12px;
        margin-bottom: 10px;
      }
    }
    .auther {
      img {
        width: 20%;
      }
      span {
        width: 80%;
        display: inline-block;
        vertical-align: top;
        padding-right: 25px;
        p.name {
          margin: 0;
          font-size: 19px;
          font-weight: 600;
          color: #cb1a75;
          @include maxlarge {
            font-size: 15px;
          }
          @include maxmediam {
            font-size: 13px;
          }
        }
        p.lname {
          color: #ababbd;
          @include maxlarge {
            font-size: 14px;
            margin: 0;
          }
          @include maxmediam {
            font-size: 12px;
          }
        }
      }
    }
  }
}





</style>