import Vue from 'vue'
import Router from 'vue-router'
/*
import HelloWorld from '@/components/HelloWorld'
*/
import HelloVue from '@/pages/HelloWorld'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloVue',
      component: HelloVue
    }
  ]
})
