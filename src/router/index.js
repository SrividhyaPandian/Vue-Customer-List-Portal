import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/auth/Login'
import SignUp from '@/components/auth/SignUp'
import ManageCustomer from '@/components/customer/ManageCustomer'
import LogOut from '@/components/auth/LogOut'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/manageCustomer',
      name: 'manageCustomer',
      component: ManageCustomer
    }
    ,
    {
      path: '/logOut',
      name: 'logOut',
      component: LogOut
    }
  ]
})
