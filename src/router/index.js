import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'root',
            beforeEnter: () => ({ name: 'Tasks' }),
        },
        {
            path: '/app/tareas',
            component: () => import('../layouts/AppLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'Tasks',
                    component: () => import('../views/app/tasks/TasksView.vue'),
                },
            ],
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/error/Error404View.vue'),
        },
    ],
});

export default router;
