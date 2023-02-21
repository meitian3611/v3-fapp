import { createRouter, RouteRecordRaw, createWebHistory, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/managerForm',
        alias: "/",
        name: 'managerForm',
        component: () => import('@/pages/manageForm/index.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(), // 是否Hash路由
    routes,
})

export default router
