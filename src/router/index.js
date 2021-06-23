import * as VueRouter from 'vue-router'

//pages

import Home from '../pages/Home.vue'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes:[
        {
            path:"/",
            component: Home,
        }
    ]
})

export default router