<template>
  <v-app>
    <Navbar v-if="$route.name == 'Index' && !$route.meta.hideNavbars" />
    <NavGeneric v-if="$route.name !== 'Index' && !$route.meta.hideNavbars"  />
    <v-main>
      <router-view />
    </v-main>
    <Footer v-if="!$route.meta.hideFooter" />
  </v-app>
</template>

<script>
import Navbar from "./components/layouts/Navbar.vue";
import Footer from "./components/layouts/Footer.vue";
import NavGeneric from "./components/layouts/NavGeneric.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    NavGeneric,
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
