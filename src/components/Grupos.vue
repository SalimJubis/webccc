<!-- Subpágina de los Grupos-->
<template>
    <div>
        <Portada />

        <Kids/>

        <Jovenes />

        <Varones />

        <Mujeres/>
        <br><br><br><br>
    </div>
</template>

<script>
    import Portada from './grupos/Portada.vue';
    import Kids from './grupos/Kids.vue';
    import Jovenes from './grupos/Jovenes.vue';
    import Mujeres from './grupos/Mujeres.vue';
    import Varones from './grupos/Varones.vue';

export default {
    name: "App",
    components: {
        Portada,
        Kids,
        Jovenes,
        Mujeres,
        Varones
    }
}
</script>