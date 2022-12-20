import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // ? webpackPrefetch:true
    // ? webpackPrefetch 당장은 안 써도 캐시에 저장함. 사용할 때 속도가 더 빨라짐
    // ? 유저가 해당 탭을 안누르면 쓸모가 없음. (설계시 중요하게 판단해야함)
    // ? 용량이 너무 커서 미리 불러와야 하는 경우 씀
    // ? webpackChunkName은 중복으로 사용할 수 있다. 이 경우 같은 범위로 묶어서 볼 수 있음
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView', // file name과 맞춤
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingStringView.vue')
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView', // 유일한 값이어야함
    component: () => import(/* webpackChunkName: "databinding", webpackPrefetch:true */ '../views/1_databinding/DataBindingHtmlView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
