<template>
    <div class="footer">

      <div class="container "> 
        <div class="card"> <img src="@/assets/footer.png" alt="">
          <p> اخر تريدههذا النص تستطيع استبداله باي نص اخر تريدهذا النص تستطيع استبداله باي نص اخر تريدههذا النص تستطيعنص اخر تريدههذا النص تستطيع استبد </p>
        </div>
        <div class="card"> 
          <p class="list-tittle">روابط الموقع</p>
          <ul> 
            <li>الرئيسيه</li>
            <li>من نحن</li>
            <li>المدونه</li>
            <li>الخدمات</li>
            <li>معرض اعمالنا</li>
            <li>تواصل معنا</li>
          </ul>
        </div>
        <div class="card"> 
          <p class="list-tittle">معلومات التواصل</p>
          <p class="p-footer"><fa-icon :icon="['fas','map-marker-alt']"/> غزة-فلسطين</p>
          <p class="p-footer"><fa-icon :icon="['fas','phone']"/> 0599197739</p>
          <p class="p-footer"><fa-icon :icon="['fas','envelope']"/>  abdallah@gmail.com</p>
          <p class="p-footer"><fa-icon :icon="['fab','facebook']"/> <fa-icon :icon="['fab','twitter']"/><fa-icon :icon="['fab','whatsapp']"/> <fa-icon :icon="['fab','instagram']"/></p>
        </div>
    </div>
    <div class="last">جميع الحقوق محوظه لدى مبسما 2020 </div>


    </div>
</template>
<script>
export default {
    name:"myfooter",
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




.footer {
  width: 100%;
  padding-top: 90px;
  text-align: right;
  color: white;
  background: linear-gradient(45deg, #c81a74, #7b1e5e);
  .container{
padding-bottom: 50px;
   .card {
    display: inline-block;
    vertical-align: top;
    background-color: transparent;
    border: none;
    &:first-of-type {
      width: 45%;
      @include maxmediam {
        width: 43%;
      }
      img {
        margin-bottom: 20px;
      }
      p {
        width: 90%;
        line-height: 1.9;
        
        @include maxmediam {
          font-size: 14px;
        }
        @include maxsmall {
          font-size: 11px;
        }
        @include maxmobile {
          font-size: 10px;
        }
      }
    }
    &:nth-of-type(2),
    &:nth-of-type(3) {
      width: 27%;
      .list-tittle {
        margin-bottom: 30px;
        font-size: 20px !important;
        font-weight: 700;
        @include maxmediam {
          font-size: 17px !important;
        }
        @include maxsmall {
          font-size: 13px !important;
        }
      }
      ul {
        padding-right: 0px;
        list-style: none;
        li {
          margin: 8px 0px;
          cursor: pointer;
          @include maxmediam {
            font-size: 14px !important;
          }
          @include maxsmall {
            font-size: 11px !important;
          }
          &:hover {
            font-size: 20.4px;
            transition: all 1s ease-in-out;
          }
        }
      }
      .p-footer {
        @include maxsmall {
          font-size: 11px !important;
        }
        svg{
            margin-left: 5px;
        }
        &:last-of-type {
          svg {
            margin-left: 12px;
            font-size: 25px;
            @include maxsmall {
              font-size: 16px !important;
              margin-left: 2px;
            }
          }
        }
      }
    }
  }
}}
.last {
  width: 100%;
  background-color: white;
  text-align: center;
  padding: 12px;
  font-weight: 700;
  color: #413e66;
  @include maxsmall {
    font-size: 12px !important;
    padding: 8px;
  }
}

</style>