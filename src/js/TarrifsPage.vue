<template>
    <div class="container">
        <Nav></Nav>
        <HeadTarrifs></HeadTarrifs>
        <HowTo></HowTo>
        <Info></Info>
        <Tarrifs></Tarrifs>
        <Footer></Footer>
    </div>
</template>

<script>
    import Nav from '../components/Nav.vue';
    import HeadTarrifs from '../components/HeadTarrifs.vue';
    import Footer from '../components/Footer.vue';
    import HowTo from '../components/HowTo.vue';
    import Info from '../components/Info.vue';
    import Tarrifs from '../components/Tarrifs.vue';

    export default {
       components: {
        Nav, HeadTarrifs, Footer, HowTo, Info, Tarrifs
       },
    }
</script>

<style lang="scss">

</style>