<template>
    <div>
        <Nav></Nav>
        <Head></Head>
        <Courses :data="courses"></Courses>
        <Features></Features>
        <Videos></Videos>
        <Footer></Footer>
    </div>
</template>

<script>
    import Nav from '../components/Nav.vue';
    import Head from '../components/Head.vue';
    import Courses from '../components/Courses.vue';
    import Features from '../components/Features.vue';
    import Videos from '../components/Videos.vue';
    import Footer from '../components/Footer.vue';

    export default {
       components: {
        Nav, Head, Courses, Features, Videos, Footer
       },
       data() {
        return {
            courses: [
                {'title': 'Кардио', 'cl': '250 калорий', 'time': '58:24', 'img': 'img/courses/cardio.png'},
                {'title': 'Растяжка', 'cl': '250 калорий', 'time': '58:24', 'img': 'img/courses/stretch.png'},
                {'title': 'Йога', 'cl': '250 калорий', 'time': '58:24', 'img': 'img/courses/joga.png'},
                {'title': 'Бег', 'cl': '250 калорий', 'time': '58:24', 'img': 'img/courses/run.png'},
                {'title': 'Гантели', 'cl': '250 калорий', 'time': '58:24', 'img': 'img/courses/metal.png'},
                {'title': 'На улице', 'cl': '250 калорий', 'time': '58:24', 'img': 'img/courses/street.png'}
            ]
        }
       }
    }
</script>

<style lang="scss">

</style>