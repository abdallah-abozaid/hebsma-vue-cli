<template>
  <div class="works">
    <wcontent-1/>
    <wcontent-2/>
    <myfooter/>
  </div>
</template>

<script>
import Myfooter from '../components/home/myfooter.vue';
import wcontent1 from '../components/works/wcontent1.vue';
import Wcontent2 from '../components/works/wcontent2.vue';

export default {
  name: "works",
  components: { wcontent1, Wcontent2, Myfooter },
  
};
</script>