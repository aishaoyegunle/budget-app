<template>
<div>
    <div class="header">
      <span class="heading">
       <!-- {{}} -->
       October, 2018
      </span>
    </div>

    <div class="butable" id="cont">
        <span class="table-add" @click="addCategory"><i class="fas fa-plus-circle"></i></span>
        <table id="empTable">
    <tr>
        <th>Category</th>
        <th>Budgeted</th>
        <th>Actitvty</th>
        <th>Available</th>
        <th></th>
    </tr>
    
    <tr v-for="(item, index) in items" :key="index">
        <td ><input type="text" name="category" v-model="item.category" class="input1" placeholder="Create a category"></td>
        <td ><input type="text" name="budgeted" v-model="item.budgeted" class="input1" placeholder="add budget to category"></td>
        <td ><input type="text" name="activity" v-model="item.activity" class="input1" placeholder="Enter amount spent"></td>
        <td ><input type="text" name="available" v-model="item.available" class="input1" placeholder="Available balance"></td>
        <td>
            <span class="add" @click="addRow(index)"><i class="fas fa-check-circle"></i></span>
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
        // month:'',
        category: '',
        budgeted: '',
        activity: '',
        available: '',
        items: [],
    }
    },

    created() {
    if (localStorage.getItem('categories')) {
      const storage = JSON.parse(localStorage.getItem('categories'))
      this.items = storage.items;
    } else {
      const data = {
          items: []
      };
     localStorage.setItem('categories', JSON.stringify(data))
    }
  },

    methods: {
        addCategory(){
            this.items.push({
                category: '',
                budgeted: '',
                activity: '',
                available: ''
            });
        },
        addRow() {
            // const data = {
            //     category: this.category,
            //     budgeted: this.budgeted,
            //     activity: this.activity,
            //     available: this.available
            // };
            // console.log(data)
            // this.items.push(data);
            this.synchronizeStorage();
        },
        synchronizeStorage() {
            const data = {
                items: this.items
            };
            localStorage.setItem('categories', JSON.stringify(data))
        },
    // selectMonth(){
    //   this.title= this.month
    // }
  },
}
</script>

<style scoped>
.butable{
    margin-left: 25rem;
    /* margin: 5rem; */
    padding: 0rem 10rem;
    position: relative;

    
}

.header{
    margin-left: 25rem;
    padding: 2rem;
    margin-bottom: 5rem;
}

.heading{
  font-size: 5rem;
  font-weight: bold;
  color: #130d25;
}

.add {
    cursor: pointer;
}

.table-add {
  color: #070;
  cursor: pointer;
  position: absolute;
  top: .1rem;
  right: 6rem;
  font-size: 2.4rem;
}

.table-add:hover {
    color: #0b0;
  }

table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

td, th {
    text-align: left;
    padding: .8rem;
}

th{
    font-size: 1.6rem;
    font-weight: bold;
    background-color: #130d25;
    color: #fff;
}

td{
    font-size: 1.3rem;
    font-weight: 400;
}

tr:nth-child(even) {
    background-color: #dddddd;
}

tr:hover {
    background-color: #f5f5f5;
    }

</style>
