import { createRouter, createWebHashHistory } from 'vue-router'
import LayoutAdmin from '@/layout/admin/index.vue'
const routes = [
    {
        path: '/',
        name: 'index', 
        component: () => import('../views/static/index.vue'),  
    },
    {
        path: '/login',
        name: 'login', 
        component: () => import('../views/static/login.vue'),  
    },
    {
        path: '/president',
        name: 'president', 
        component: () => import('../views/static/president.vue'),  
    },
    {
        path: '/presidentLogin',
        name: 'presidentLogin', 
        component: () => import('../views/static/presidentLogin.vue'),  
    },
    {
        path: '/admin',
        name: 'admin',
        component: LayoutAdmin,
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/views/admin/index.vue')
            },
            {
                path: 'registerforclubs',
                name: 'admin-registerforclubs',
                component: () => import('@/views/admin/registerforclubs.vue')
            },
            {
                path: 'school',
                name: 'admin-school',
                component: () => import('@/views/admin/school.vue')
            },
            {
                path: 'department',
                name: 'admin-department',
                component: () => import('@/views/admin/department.vue')
            },
            {
                path: 'community',
                name: 'admin-community',
                component: () => import('@/views/admin/community.vue')
            },
            {
                path: '/:pathMatch(.*)*',
                name: '404',
                component: () => import('@/views/admin/404.vue')// 懒加载  
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('../views/404.vue')// 懒加载  
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;