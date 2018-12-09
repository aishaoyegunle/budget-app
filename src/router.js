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
      path: '/budgetTable/:id',
      name: 'BudgetTable',
      component: BudgetTable
    },
  ]
})
