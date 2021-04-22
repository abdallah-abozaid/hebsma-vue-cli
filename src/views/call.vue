<template>
  <div class="call">
    <callcontent-1/>
    <callcontent-2/>
    <callcontent-3/>
    <myfooter/>
  </div>
</template>

<script>
import callcontent1 from '../components/call/callcontent1.vue';
import Callcontent2 from '../components/call/callcontent2.vue';
import Callcontent3 from '../components/call/callcontent3.vue';
import Myfooter from '../components/home/myfooter.vue';

export default {
  name: "call",
  components: { callcontent1, Callcontent2, Callcontent3 ,Myfooter},
  
};
</script>