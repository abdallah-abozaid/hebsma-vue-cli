<template>
  <div class="services">
    <scontent-1/>
    <scontent-2/>
    <myfooter/>
  </div>
</template>

<script>
import Myfooter from '../components/home/myfooter.vue';
import scontent1 from '../components/services/scontent1.vue';
import Scontent2 from '../components/services/scontent2.vue';

export default {
  name: "services",
  components: { scontent1, Scontent2, Myfooter},
  
};
</script>