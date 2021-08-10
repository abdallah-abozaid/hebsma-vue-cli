<template>
    <div class="header ">
<nav class="navbar navbar-expand-lg navbar-light " :style="{'background':back}">
  <div class="extra" :style="{'display':this.abd}">
    طلب تسعير
  </div>
  <div class="container">
  <a class="navbar-brand" href="#"><img src="@/assets/logo.png" alt=""></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active" @click="none()">
          <router-link to="/" class="nav-link" exact><fa-icon :icon="['fas','home']"/> الرئيسيه </router-link>
          
      </li>
      <li class="nav-item" @click="color()">
          <router-link to="/about" class="nav-link"><fa-icon :icon="['fas','user']" /> من نحن </router-link>
      </li>
      <li class="nav-item" @click="color()">
        <router-link to="/notes" class="nav-link"><fa-icon :icon="['fas','clipboard']"/> المدونه</router-link>
      </li>
      <li class="nav-item" @click="color()">
       <router-link to="/services" class="nav-link"><fa-icon :icon="['fas','laptop']"/> الخدمات</router-link>
      </li>
      <li class="nav-item" @click="color()">
       <router-link to="/works" class="nav-link"><fa-icon :icon="['fas','images']"/> اعمالنا</router-link>
      </li>
      <li class="nav-item" @click="color()">
       <router-link to="/call" class="nav-link"><fa-icon :icon="['fas','envelope']"/> اتصل بنا</router-link>
      </li>
    </ul>
  </div>
  </div>
</nav>

  <router-view />
    </div>
</template>
<script>
export default {
    name:"myheader",
    data(){
      return{
        back:"",
        abd:'none'
      }
    },
    methods:{
      color:function(){
        this.back=" linear-gradient(45deg, #be1b71, #7b1e5e)";
        this.abd="block"
      },
      none:function(){
        this.back="transparent";
        this.abd="none"
      }
    }
}
</script>
<style lang="scss">
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

.navbar{
  position: relative;
  .extra{
   position: absolute;
    top:28px;
    left: 100px;
    background-color: white;
    color: #be1b71;
    font-weight:900;
    text-align: center;
    border-radius: 51px;
    padding: 8px 31px;
    animation: scaling 1s linear infinite alternate;
        @keyframes scaling{
          0%{
            transform: scale(1) ;
          }
          100%{
            transform: scale(1.1) ;
          }
        }
        @include maxlarge{
          padding: 3px 20px;
          top:38px;
        }
        @include maxmediam{
         top:38px;
         left: 45%;
        }
        @include maxsmall{
         top:38px;
         left: 40%;
        }
        @include maxmobile{
         top:38px;
         left: 30%;
        }
  }
  .navbar-toggler {
    background: linear-gradient(45deg, #be1b71, #7b1e5e);
    @include maxmobile{
          margin-left: 2%;
          padding: 0px 5px;
        }
}
   .navbar-nav {
    @include maxlarge{
          padding-right: 35px;
        }
  }
  .navbar-brand{
  margin: 0px;
   img{
    padding: 10px 0px;
       @include maxlarge{
          margin-left: 1px;
        }
        @include maxmobile{
          margin-right: 50%;
        }
  }
  }
  
    .nav-link{
        color: white!important;
        margin-left: 15px;
        font-size: 18px;
        border-bottom: 2px solid white;
        border-width: 0px;
        &:hover{
            border-bottom: 3px solid #f0e6ed!important;
  background-color: rgba(255, 255, 255, 0.178);
        }
        @include maxlarge{
          margin-left: 8px;
        }
        @include maxmediam{
          margin-bottom: 5px;
    border: 2px solid white;
    border-radius: 10px;
    padding: 2px;
    padding-right: 10px!important;
    box-shadow: 1px 1px 2px white;
    margin-left: 12px;
        }
        @include maxmobile{
          margin-left: 10px;
        font-size: 15px;
        }
        
        svg{
            margin-left: 3px;
            @include maxlarge{
          margin-left: 1px;
        }
        }
    }
}
.router-link-exact-active{
  border-bottom: 3px solid #f0e6ed!important;
  background-color: rgba(255, 255, 255, 0.178);
}
</style>