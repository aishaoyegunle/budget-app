<template>
  <div class="budget">
    <div class="header">
      <span class="heading">
        {{title}}
      </span>
      <button @click="createBudget" class="btn">Add Budget +</button>
    </div>
    <budget-table :budgets="budgets"></budget-table>
  </div>
</template>


<script>

import BudgetTable from '@/components/BudgetTable.vue'


 export default{
  name:'Budget',
  components: {
    BudgetTable
  },
  data (){
   return{
    title:'Budget'
   }
  }
 }
</script>

<style scoped>
.budget{
  margin-left: 25rem;

}

.header{
  padding: 2rem;
  /* display: inline-block; */
}

.heading{
  font-size: 5rem;
  font-weight: bold;
  color: #130d25;
}

.btn{
    text-decoration: none;
    padding: 1rem 2rem;
    display: inline-block;
    border-radius: 10rem;
    font-size: 1.6rem;
    float: right;
    background-color: #130d25;
    color: #fff;
    font-weight: bold;
    margin: 1.3rem 
}
.btn:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
.btn-submit{
  background-color: #008CBA;
  color: white;
  border: none;
  padding: 1rem 3rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: .8rem;
  -webkit-transition-duration: 0.4s; 
  transition-duration: 0.4s;
  cursor: pointer;
}
</style>

