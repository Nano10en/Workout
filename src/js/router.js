import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "./MainPage.vue";
import TarrifsPage from './TarrifsPage.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/home', component: MainPage, alias: '/' },
        { path: '/tarrifs', component: TarrifsPage },
    ]
});