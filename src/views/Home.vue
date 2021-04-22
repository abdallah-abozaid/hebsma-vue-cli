<template>
  <div class="home">
  <content-1/>
  <content-2/>
  <content-3/>
  <content-4/>
  <content-5/>
  <content-6/>
  <content-7/>
  <myfooter/>

  </div>
</template>

<script>
import content1 from '../components/home/content1.vue';
import Content2 from '../components/home/content2.vue';
import Content3 from '../components/home/content3.vue';
import Content4 from '../components/home/content4.vue';
import Content5 from '../components/home/content5.vue';
import Content6 from '../components/home/content6.vue';
import Content7 from '../components/home/content7.vue';
import Myfooter from '../components/home/myfooter.vue';

import WOW from "wowjs";

export default {
  components: { content1, Content2, Content3, Content4, Content5, Content6, Content7, Myfooter },
    mounted(){
      let wow =new WOW.WOW({
        boxClass:"wow",
        animateClass:"animated",
         live: true  ,
         mobile: true,
         offset: 0, 
      });
      wow.init();
    }
};
</script>
<style lang="scss">


</style>