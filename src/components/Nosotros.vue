<!--Subpágina de Nosotros-->
<template>
  <div>
    <br><br>
    <MisionVision />
    <br><br>
    <Historia />
    <br><br><br>
    <Pilares />
    <br><br><br>
    <Fundamentales />
    <br><br><br>
  </div>
</template>

<script>
import MisionVision from './sobre-nosotros/MisionVision.vue';
import Historia from './sobre-nosotros/Historia.vue';
import Pilares from './sobre-nosotros/Pilares.vue';
import Fundamentales from './sobre-nosotros/Fundamentales.vue';

export default {
  name: "App",
  components: {
    MisionVision,
    Historia,
    Pilares,
    Fundamentales
  }
}
</script>