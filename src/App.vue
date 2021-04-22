<template>
  <div class="app">
  <myheader />  
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Almarai&display=swap');
*{
  direction: rtl;
  text-align: right;
  font-family: 'Almarai', sans-serif;
}
</style>

<script>
import myheader from './components/myheader/myheader.vue'
export default {
  components: { myheader },
  
}
</script>