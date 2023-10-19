<template>
  <div>
    <Nosotros />
    <div class="container">
      <hr class="separador" />
    </div>
    <Servir />
    <br /><br /><br /><br />
    <Comparte />
    <Testimonios />
    
    <br /><br /><br /><br />
    <Encuentranos />
    
    <Whatsapp />
  </div>
</template>

<script>
import Nosotros from "./index/Nosotros.vue";
import Servir from "./index/Servir.vue";
import Comparte from "./index/Comparte.vue";
import Encuentranos from "./index/Encuentranos.vue";
import Testimonios from "./index/Testimonios.vue";
import Whatsapp from "./layouts/Whatsapp.vue";

export default {
  name: "App",
  components: {
    Nosotros,
    Servir,
    Comparte,
    Encuentranos,
    Testimonios,
    Whatsapp,
  },

  Servirdata: () => ({
    //
  }),
};
</script>
<style scoped>
.separador {
  margin-top: 50px !important;
  margin-bottom: 50px !important;
}
</style>