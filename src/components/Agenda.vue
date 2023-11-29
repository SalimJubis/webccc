<!-- Subpágina de los Grupos-->
<template>
    <div>
        <Portada />
        <br><br><br><br>
        <Agenda />
    </div>
  </template>
  
  <script>
    import Portada from './agenda/portada.vue';
    import Agenda from './agenda/agenda.vue';
  
  export default {
    name: "App",
    components: {
    Agenda,
    Portada
}
  }
  </script>