<template>
  <div class="about">
    <bcontent-1/>
    <bcontent-2/>
    <bcontent-3/>
    <bcontent-4/>
    <myfooter/>

  </div>
</template>
<script>
import Bcontent1 from '../components/about/bcontent1.vue'
import Bcontent2 from '../components/about/bcontent2.vue'
import Bcontent3 from '../components/about/bcontent3.vue'
import Bcontent4 from '../components/about/bcontent4.vue'
import Myfooter from '../components/home/myfooter.vue'
export default {
  components: {Bcontent1, Bcontent2, Bcontent3, Myfooter, Bcontent4 },
  name:"about",
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




</style>