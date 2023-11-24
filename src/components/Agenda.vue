<!-- Subpágina de los Grupos-->
<template>
    <div>
        <Agenda />
    </div>
  </template>
  
  <script>
    import Agenda from './agenda/agenda.vue';
  
  export default {
    name: "App",
    components: {
        Agenda
    }
  }
  </script>