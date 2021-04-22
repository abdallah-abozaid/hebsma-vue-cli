<template>
  <div class="notes">
   <ncontent-1/>
   <ncontent-2/>
   <myfooter/>
  </div>
</template>

<script>
import Myfooter from '../components/home/myfooter.vue';
import ncontent1 from '../components/notes/ncontent1.vue';
import Ncontent2 from '../components/notes/ncontent2.vue';

export default {
  name:"notes",
  components: { ncontent1, Ncontent2, Myfooter },
};
</script>