import * as VueRouter from 'vue-router'

//pages

import Home from '../pages/Home.vue';
import NotFound from '../pages/NotFound.vue';
import TodoListPage from '../pages/Todos/TodoListPage';

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes:[
        {
            path:"/",
            component: Home,
        },
        {
            name: 'TodoListPage',
            path: '/todos',
            component: TodoListPage
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFound,
        },
    ]
})

export default router