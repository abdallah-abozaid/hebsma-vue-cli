<template>
    <div class="wcontent1">
        <a href="#">
            <fa-icon :icon="['fas','home']"/>  
            الرئيسيه \ <span>معرض اعمالنا</span> 
            </a>
            <a href="#">معرض اعمالنا </a>
    </div>
</template>
<script>
export default {
    name:"wcontent1",
}
</script>
<style lang="scss">

.wcontent1 {
  background-color: #f8f7ff;
  padding: 26px 0px;
  a {
    text-align: center;
    display: block;
    color: #88889a;
    font-weight: 500;
    path{
  fill: #88889a;
    }
    span{
  color: #88889a;
    }
    &:last-of-type {
      font-size: 30px;
      font-weight: 900;
      color: #413e66;
    }
    &:hover {
      text-decoration: none;
    }
  }
}
</style>