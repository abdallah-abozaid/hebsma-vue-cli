<template>
    <div class="ncontent2 container">
        <div class="card new" v-for="data in thedata" v-bind:key="data.id"  >
        <img :src='data.img' class="card-img-top" alt="..."/>
        <div class="card-body">
            <span class="tittle">{{data.tittle}}</span>
            <a class="submit">{{data.submit}}</a>
            <p class="card-text">{{data.text}}</p>
        </div>
        </div>
       <nav aria-label="Page navigation example" class="mynav">
  <ul class="pagination">
    <li class="page-item"><a class="page-link active" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item "><a class="page-link last" href="#">الجديد</a></li>
  </ul>
</nav>

    </div>
</template>
<script>
import mydata from "@/jason/data.json";
export default {
    name:"ncontent2",
    data:function(){
        return{
            thedata:mydata,
        }
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


.ncontent2{
    padding: 50px 0px;
}
.submit {
    color: #cb1a75;
    font-weight: 600;
    @include maxlarge{
       font-size: 13px; 
    }
    
    @include maxsmall{
         font-size: 11px;
    }
    @include maxmobile{
        font-size: 13px;
    }
}
.submit:hover {
    color: #cb1a75;
    cursor: pointer;

    
}
.card-body{
    padding: 30px;
     @include maxmediam{
        padding-top: 13px;
    }
     @include maxsmall{
        padding: 13px;
    }
    
}
span.tittle {
    color: #445261;
    font-size: 20px;
    width: 75%!important;
    font-weight: 700;
    display: inline-block;
    @include maxlarge{
       font-size: 19px; 
    }
    @include maxmediam{
       font-size: 15px; 
       width: 100%!important;
    }
    @include maxsmall{
         font-size: 14px;
    }
    @include maxmobile{
        font-size: 16px;
    }
}
.card-text{
    color: #adadb6;
    margin: 10px 0px;
    font-size: 14px;
    @include maxlarge{
       font-size: 12px; 
    }
    @include maxmediam{
     font-size: 11px; 
    }
    @include maxsmall{
         font-size: 10px;
    }
     @include maxmobile{
        font-size: 12px;
    }
}

.card {
    display: inline-block!important;
    vertical-align: top;
    width: 46%!important;
    border-radius: 10px!important;
    margin: 2%;
    height: 400px;
    border: none!important;
    box-shadow: 2px 2px 15px rgb(214, 214, 214),-2px -2px 15px rgb(214, 214, 214);
    
    img{
        height: 250px;
    }
    @include maxsmall{
        width: 48%!important;
    border-radius: 10px!important;
    margin: 2% 1%;
    }
    @include maxmobile{
        width: 80%!important;
        margin: 10px auto 40px;
        display: block!important;
    }
}
.mynav{
    
 margin: 20px auto 0px;
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