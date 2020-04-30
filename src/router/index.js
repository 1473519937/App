import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Course from '../components/course/Course.vue'
// import Assign from '../components/assign/Assign.vue'
// import User from '../components/user/User.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {path: "/home", //首页
    component: resolve => require(["../views/Home.vue"], resolve),
    meta: {requiresAuth: false},
  }
  ,
  {path: "/course", //课程中心
    component: resolve => require(["../components/course/Course.vue"], resolve),
    meta: {requiresAuth: false},
  }
  ,
  {path: "/assign", //学习任务
    component: resolve => require(["../components/assign/Assign.vue"], resolve),
    meta: {requiresAuth: false},
  }
  ,
  {path: "/user", //个人
    component: resolve => require(["../components/user/User.vue"], resolve),
    meta: {requiresAuth: false},
  }
]

const router = new VueRouter({
  routes
})

export default router
