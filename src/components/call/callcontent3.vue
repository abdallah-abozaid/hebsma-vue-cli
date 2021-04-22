<template>
    <div class="callcontent3">
        <img src="@/assets/call/map.png" class="backcall">
      <img src="@/assets/call/position.png" alt="">
      <div class="form"> 
        <p class="tittle">تواصل معنا الآن</p>
        <input class="name" type="text" placeholder="اسمك">
        <input class="name" type="text" placeholder="البريد الالكتروني">
        <input class="position" type="text" placeholder="الموقع">
        <textarea name=""  rows="6" placeholder="الرساله"> </textarea>
        <input type="submit" value="ارسال">
      </div>
            
    </div>
</template>
<script>
export default {
    name:"callcontent3",
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

//- ------------------------------------------------- end media query ----------------------------------


.callcontent3 {
  height: 600px;
  margin-top: 400px;
  position: relative;
.backcall{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
  img {
    position: absolute;
    bottom: 20%;
    left: 50%;
  }
  .form {
    text-align: center;
    padding: 50px;
    padding-bottom: 90px;
    box-shadow: 3px 3px 13px rgb(194, 193, 193);
    width: 80%;
    margin: auto;
    background-color: white;
    z-index: 1;
    transform: translate(0px, -300px);
    border-radius: 10px;
    direction: rtl!important;
    @include maxmobile{
      padding: 10px;
      padding-bottom: 90px;
    }
    p {
      font-size: 30px;
      font-weight: 700;
      color:#413e66;
      text-align: center;
      margin-bottom: 20px;
      @include maxsmall {
        font-size: 24px;
      }
    }
    input,
    textarea {
      display: block;
      width: 100%;
      padding: 13px;
      border: none;
      background-color: #f4f6fa;
      border-radius: 30px;
      margin-bottom: 10px;
      outline: none;
      &:last-child {
        background: linear-gradient(45deg, #cb2b7f, #7b1e5e);
    width: 20%;
    margin-left: 0px!important;
    font-weight: 700;
    color: white;
    text-align: center;
    display: inline-block;
        position: absolute;
        left: 50px;
        bottom: 20px;

        @include maxsmall {
          width: 40%;
        }
        @include maxmobile{
      left: 10px;
    }
      }
    }
    .name {
      display: inline-block;
      vertical-align: top;
      width: 49.2%;
      &:first-of-type{
          margin-left: 1%;
      }
      @include maxsmall {
        width: 100%;
      }
    }
  }
}
</style>