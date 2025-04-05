import CalendarView from '@/views/CalendarView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import TasksView from '@/views/TasksView.vue'
import TeamsView from '@/views/TeamsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: DashboardView },
  { path: '/projects', component: ProjectsView },
  { path: '/tasks', component: TasksView },
  { path: '/teams', component: TeamsView },
  { path: '/calendar', component: CalendarView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
