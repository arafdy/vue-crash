import * as VueRouter from 'vue-router';

// Pages
import HomePage from '../pages/HomePage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue';
import TodoListPage from '../pages/todos/TodoListPage.vue';
import TodoDetailsPage from '../pages/todos/TodoDetailsPage.vue';

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    {
      name: 'HomePage',
      path: '/',
      component: HomePage,
    },
    {
      name: 'TodoListPage',
      path: '/todos',
      component: TodoListPage,
      children: [
        {
          name: 'TodoDetailsPage',
          path: ':todoId',
          component: TodoDetailsPage,
        },
      ],
    },
    {
      name: 'NotFoundPage',
      path: '/:pathMatch(.*)*',
      component: NotFoundPage,
    },
  ],
});

export default router;
