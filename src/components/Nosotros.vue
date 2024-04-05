<!--Subpágina de Nosotros-->
<template>
  <div>
    <br><br>
    <MisionVision />
    <Vision />
    <br><br>
    <Historia />
    <br><br><br>
    <Pilares />
    <br><br><br>
    <br><br><br>
  </div>
</template>

<script>
import MisionVision from './sobre-nosotros/MisionVision.vue';
import Historia from './sobre-nosotros/Historia.vue';
import Pilares from './sobre-nosotros/Pilares.vue';
import Vision from './sobre-nosotros/Vision.vue';

export default {
  name: "App",
  components: {
    MisionVision,
    Vision,
    Historia,
    Pilares,
  }
}
</script>