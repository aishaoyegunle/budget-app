<template>
<div>
    <div class="header">
      <span class="heading">
       <!-- {{}} -->
       October, 2018
      </span>
    </div>

    <div class="butable">
        <table>
    <tr>
        <th>Category</th>
        <th>Budgeted</th>
        <th>Actitvty</th>
        <th>Available</th>
        <th></th>
    </tr>

    <tr v-for="(budget, i) in budgets" :key="i">
        <td>{{budget.category}} </td>
        <td> {{budget.budgeted}} </td>
        <td> {{budget.activity}} </td>
        <td> {{budget.available}} </td>
        <td>
            <button @click="Edit" class="btn-edit" >Edit</button> 
        </td>
    </tr>
    
    
    </table>
    </div>
</div>
</template>

<script>

// import MonthBudget from '@/components/MonthBudget.vue'

export default {
    name:'BudgetTable',
    components:{
        // MonthBudget,
    },
    props: ['budgets'],
    data (){
    return{
        // title:'',
        // months:[],
        // month:''
    }
    },

    // methods: {
    // selectMonth(){
    //   this.title= this.month
    // }
//   },
}
</script>

<style scoped>
.butable{
    margin-left: 25rem;
    /* margin: 5rem; */
    padding: 0rem 10rem;
    
}

.header{
    margin-left: 25rem;
    padding: 2rem;
    margin-bottom: 9rem;
}

.heading{
  font-size: 5rem;
  font-weight: bold;
  color: #130d25;
  float: left;
}

table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: .1rem solid #dddddd;
    text-align: left;
    padding: .8rem;
}

th{
    font-size: 1.4rem;
    font-weight: bold;
}

td{
    font-size: 1.3rem;
    font-weight: 400;
}

tr:nth-child(even) {
    background-color: #dddddd;
}

.btn-edit{
    background-color: #008CBA;
    color: white;
    border: none;
    padding: .5rem .5rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.2rem;
    -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: .5rem;
    margin: 0rem 1rem;
}


</style>
