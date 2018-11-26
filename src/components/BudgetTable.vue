<template>
    <div class="butable">
        <table>
    <tr>
        <th>Budget month</th>
        <th>Budgeted</th>
        <th>Spent</th>
        <th>Income</th>
        <th>Balance</th>
        <th></th>
    </tr>

    <tr v-for="(budget, i) in budgets" :key="i">
        <td>{{budget.month}} </td>
        <td> {{budget.budgeted}} </td>
        <td> {{budget.spent}} </td>
        <td> {{budget.income}} </td>
        <td> {{budget.balance}} </td>
        <td>
            <button @click="Edit" class="btn-edit" >Edit</button> 
        </td>
    </tr>
    
    
    </table>
</div>
</template>

<script>
export default {
    name:'BudgetTable',
    props: ['budgets'],
    data (){
    return{
        title:'BudgetTable'
    }
    }
}
</script>

<style scoped>
.butable{
    /* margin-left: 25rem; */
    margin: 5rem;
    
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
