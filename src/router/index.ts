import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Main from '@/views/layouts/Main.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: Main,
		children: [
			{
				path: '',
				component: () => import('@/views/pages/Home.vue')
			}
		]
	}, 
];

export default createRouter({
	history: createWebHistory(),
	routes
});