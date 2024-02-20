import {createRouter, createWebHistory} from 'vue-router'
import MainView from './views/MainView.vue'
import InfoView from './views/InfoView.vue'
import PosterView from './views/PosterView.vue'
import PriceView from './views/PriceView.vue'

export default createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', component: MainView},
        {path: '/Info', component: InfoView},
        {path: '/Poster', component: PosterView},
        {path: '/Price', component: PriceView},

    ]
})