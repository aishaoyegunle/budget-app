<template>
    <div class="actable">
        <table>
    <tr>
        <th>Account</th>
        <th>Balance</th>
        <th></th>
    </tr>

    <tr v-for="(account, i) in accounts" :key="i">
        <td>{{account.name}} </td>
        <td> {{account.balance}} </td>
        <td>
            <button @click="Edit" class="btn-edit" >Edit</button> 
            <button @click="Delete" class="btn-delete" >Delete</button>
        </td>
    </tr>
    
    
    </table>
</div>
</template>

<script>
export default {
    name:'AccountTable',
    props: ['accounts'],
    data (){
    return{
        title:'AccountTable'
    }
    }
}
</script>

<style scoped>
.actable{
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

.btn-delete{
  background-color: rgb(233, 22, 22);
  color: white;
  border: none;
  padding: .5rem .5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.3rem;
  -webkit-transition-duration: 0.4s; 
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: .5rem;
  margin: 0rem 1rem;
}

</style>
