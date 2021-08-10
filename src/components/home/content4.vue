<template>
    <div class="content4">



<div class="content4-header"> 
        <p class="header wow animate__animated animate animate__zoomInDown">معرض <span>اعمالنا</span></p>
        <p class="tittle wow animate__animated animate animate__zoomInDown" data-wow-delay=".5s">هذا النص يمكن استبداله باي عنصر اخر تريدههذا النص يمكن استبداله باي عنصر اخر تريدههذا النص يمكن استبداله باي عنصر اخر تريدههذاد</p>
      </div>
 <ul class="filter-list wow animate__animated animate animate__slideInDown" data-wow-delay=".9s"> 
              <li class="" data-filter="all">الكل </li>
              <li data-filter=".one">مواقع الانترنت </li>
              <li data-filter=".two">تطبيقات الموبايل </li>
              <li data-filter=".three">فيديو موشن </li>
              <li data-filter=".four">هوية بصرية </li>
            </ul>

<div class="row filter row-cols-1 row-cols-sm-2 row-cols-md-3">

  <div class="col  sm-6 mix one ">
    <div class="card">
      <img src="@/assets/content4/1.png" class="card-img-top" alt="...">
      <div class="outer">
        <span> مواقع الانترنت</span><br/>
        <a href="#">اقرا المزيد</a>
      </div>
    </div>
  </div>
  <div class="col mix one ">
    <div class="card">
      <img src="@/assets/content4/2.png" class="card-img-top" alt="...">
      <div class="outer">
        <span> مواقع الانترنت</span><br/>
        <a href="#">اقرا المزيد</a>
      </div>
    </div>
  </div>
  <div class="col  mix two ">
    <div class="card">
      <img src="@/assets/content4/3.png" class="card-img-top" alt="...">
       <div class="outer">
        <span>تطبيقات الموبايل</span><br/>
        <a href="#">اقرا المزيد</a>
      </div>
    </div>
  </div>
  <div class="col mb-4 mix three">
    <div class="card">
      <img src="@/assets/content4/4.png" class="card-img-top" alt="...">
       <div class="outer">
        <span> فيديو موشن</span><br/>
        <a href="#">اقرا المزيد</a>
      </div>
    </div>
  </div>
  <div class="col mb-4 mix two ">
    <div class="card">
      <img src="@/assets/content4/5.png" class="card-img-top" alt="...">
       <div class="outer">
        <span> تطبيقات الموبايل</span><br/>
        <a href="#">اقرا المزيد</a>
      </div>
    </div>
  </div>
  <div class="col mb-4 mix four">
    <div class="card">
      <img src="@/assets/content4/6.png" class="card-img-top" alt="...">
       <div class="outer">
        <span> هوية بصرية</span><br/>
        <a href="#">اقرا المزيد</a>
      </div>
    </div>
  </div>
</div>

</div>
</template>
<script>
import mixitup from "mixitup";
export default {
    name:"content3",
  mounted(){
    mixitup(".filter",{
      animation:{
        duration:2000
      }
    })
  }
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



.content4 {
    margin-top: 130px;
    overflow: hidden;
    .row {
     margin-right: 0px; 
     margin-left: 0px;
}
  .content4-header {
    
    .header {
      color: #413e66;
    text-align: center;
    font-size: 35px;
    font-weight: 700;
    width: 200px;
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
      span {
        color:#cb1a75;
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
  }
  .filter-list {
        list-style: none;
        text-align: center;
        margin-bottom: 10px;
        padding: 0;
        .mixitup-control-active {
          background-color: #cb1a75;
          color: white;
          border: 2px solid rgb(238, 238, 238);
        }
        li {
          display: inline-block;
          vertical-align: top;
          margin: 5px 0px;
          font-weight: 600;
          padding: 3px 15px;
          border-radius: 32px;
          color:#413e66 ;
          cursor: pointer;
          border: 2px solid transparent;
          @include maxsmall {
            font-size: 14px;
          }
          @include maxmobile {
            font-size: 11px;
          }
          
          &:hover {
            background-color:#cb1a75;
            color: white;
            border: 2px solid rgb(238, 238, 238);
          }
        }
      }
    }
    .filter-img {
      overflow: hidden;
      text-align: right;
      
    }
    .mix{
      margin-bottom:20px!important;
      @include maxsmall{
      padding: 4px!important;
      margin-bottom:0px!important;
    }
    }
    .card{
      position: relative;
      overflow: hidden;
    }
    .card .outer{
      position: absolute;
      top: -100%;
      right: 0;
      width: 70%;
      height: 70%;
      background-color: #cb1a75;
      border-bottom-left-radius:100%;
      transition: all .3s linear;
      text-align: center;
      padding-top: 20%;
    }
    .card .outer span{
      font-size: 26px;
      @include maxmediam(){
        font-size: 20px;
      }
    }
    .card:hover .outer{
      top: 0%;
    }
    .col:nth-of-type(1) .outer{
      top: 0;
    }
    
</style>