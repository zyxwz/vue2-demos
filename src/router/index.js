import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Update from '../components/update'
import Notice from '../components/notice'
import UpdateModal from '../components/updateModal.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      path: '/update',
      name: 'Update',
      component: Update,
      children:[
        {
          path: 'updateModal',
          name: 'updateModal',
          component: UpdateModal
        }
      ]
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    },
  ]
})
