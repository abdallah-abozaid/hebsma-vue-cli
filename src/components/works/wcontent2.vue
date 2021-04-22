<template>
    <div class="wcontent2 container">

      <ul class="filter-list"> 
              <li class="" data-filter="all">الكل </li>
              <li data-filter=".one">مواقع الانترنت </li>
              <li data-filter=".two">تطبيقات الموبايل </li>
              <li data-filter=".three">فيديو موشن </li>
              <li data-filter=".four">هوية بصرية </li>
            </ul>

<div class="filter">
       <div class="card mix two">
        <img src="@/assets/works/1.png"  alt="..."/>
        <div class="card-body onee">
            <p class="tittle">مشروع تصميم موقع الكتروني</p>
            <a class="submit">مواقع انترنت</a>
        </div>
        </div>
       <div class="card mix four">
        <img src="@/assets/works/2.png"  alt="..."/>
        <div class="card-body">
            <p class="tittle">مشروع تصميم موقع الكتروني</p>
            <a class="submit">مواقع انترنت</a>
        </div>
        </div>
       <div class="card mix two">
        <img src="@/assets/works/3.png"  alt="..."/>
        <div class="card-body">
            <p class="tittle">aمشروع تصميم موقع الكتروني</p>
            <a class="submit">مواقع انترنت</a>
        </div>
        </div>
       <div class="card mix three">
        <img src="@/assets/works/4.png"  alt="..."/>
        <div class="card-body">
            <p class="tittle">مشروع تصميم موقع الكتروني</p>
            <a class="submit">مواقع انترنت</a>
        </div>
        </div>
       <div class="card mix one">
        <img src="@/assets/works/5.png"  alt="..."/>
        <div class="card-body">
            <p class="tittle">مشروع تصميم موقع الكتروني</p>
            <a class="submit">مواقع انترنت</a>
        </div>
        </div>
       <div class="card mix four">
        <img src="@/assets/works/6.png"  alt="..."/>
        <div class="card-body">
            <p class="tittle">مشروع تصميم موقع الكتروني</p>
            <a class="submit">مواقع انترنت</a>
        </div>
        </div>
       <div class="card mix one">
        <img src="@/assets/works/7.png"  alt="..."/>
        <div class="card-body">
            <p class="tittle">مشروع تصميم موقع الكتروني</p>
            <a class="submit">مواقع انترنت</a>
        </div>
        </div>
       <div class="card mix two">
        <img src="@/assets/works/8.png"  alt="..."/>
        <div class="card-body">
            <p class="tittle">مشروع تصميم موقع الكتروني</p>
            <a class="submit">مواقع انترنت</a>
        </div>
        </div>
       <div class="card mix three">
        <img src="@/assets/works/9.png"  alt="..."/>
        <div class="card-body">
            <p class="tittle">مشروع تصميم موقع الكتروني</p>
            <a class="submit">مواقع انترنت</a>
        </div>
        </div>
        </div>
        
       <nav aria-label="Page navigation example" class="mynav">
  <ul class="pagination">
    <li class="page-item"><a class="page-link active" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item "><a class="page-link last" href="#">المزيد ></a></li>
  </ul>
</nav>
    </div>
</template>
<script>
import mixitup from "mixitup";
export default {
    name:"wcontent2",
    mounted(){
    mixitup(".filter",{
      animation:{
        duration:2000
      }
    })
  }
}
</script>
<style lang="scss" scoped>
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


.wcontent2{

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


.card {
    display: inline-block;
    vertical-align: top;
    width: 32%!important;
    margin-left: 2%;
    margin-bottom: 30px!important;
    overflow: hidden;
    border: none!important;
    box-shadow: 2px 2px 15px rgb(214, 214, 214),-2px -2px 15px rgb(214, 214, 214);
    position: relative;
    &:nth-of-type(3),&:nth-of-type(6),&:nth-of-type(9){
        margin-left:0%;
    }
    img{
      width: 100%;
      height: 100%;
      &:first-of-type{
        transform: scale(1.22);
      }
    }
    &:hover .card-body{
      bottom: 0!important;
      transition: all .6s linear;
    }

    .card-body{
    position: absolute;
    width: 100%;
    height: 30%;
    left: 0;
    bottom: -200px!important;
    background-color: white;
    
     @include maxmobile{
        padding: 13px;
    }
    .submit {
    color: #cb1a75;
    font-weight: 500;
    font-size: 17px;
    margin-bottom: 0px;
    text-align: center;
    width: 100%;
    display: block;
    @include maxlarge{
       font-size: 13px; 
    }
    
    @include maxsmall{
         font-size: 11px;
    }
    @include maxmobile{
        font-size: 13px;
    }
    &:hover {
        color: #cb1a75;
        cursor: pointer;
    }
    }

p.tittle {
    color: #445261;
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 3px;
    text-align: center;
    @include maxlarge{
       font-size: 17px; 
    }
    @include maxmediam{
       font-size: 14px; 
    }
    @include maxsmall{
         font-size: 13px;
    }
    @include maxmobile{
        font-size: 15px;
    }
}
}
    .onee{
  bottom: 0px!important;
}
    @include maxsmall{
        width: 48%!important;
    border-radius: 10px!important;
    margin: 2% 1%;
    margin-bottom: 10px!important;
    }
    @include maxmobile{
        width: 80%!important;
        margin: 10px auto 20px !important;
        display: block!important;
    }
}
}



.mynav{
    
 margin: 40px auto 60px;
}
.pagination{
    padding: 0px;
    justify-content: center!important;
}
.page-link {
    margin: 5px!important;
    
}
.page-link {
border-radius: 50%!important;
padding: 10px 15px!important;
margin: 0px;
color: #445261!important;
background-color: white;
border: 0!important;
box-shadow: 1px 1px 7px rgb(230, 230, 230),-1px -1px 7px rgb(230, 230, 230);
 @include maxmobile{
       padding: 7px 12px!important;
    }
}
.page-link:hover,.active {
background-color: #c31a73!important;
border-color: #c31a73;
color: white!important;
transition: all .5s linear;
}
.last{
   border-radius: 30px!important; 
}
</style>