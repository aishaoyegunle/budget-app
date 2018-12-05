import Vue from 'vue'
import Router from 'vue-router'
import Account from './views/Account.vue'
import Budget from './views/Budget.vue'
import BudgetTable from './views/BudgetTable.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'account',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Account
    },
    {
      path: '/budget',
      name: 'budget',
      component: Budget,
      // children: [
      //   { path: 'BudgetTable', component: BudgetTable },
      // ]
    },
    {
      path: '/BudgetTable',
      name: 'BudgetTable',
      component: BudgetTable
    },
  ]
})
