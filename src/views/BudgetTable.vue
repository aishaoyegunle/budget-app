<template>
<div class="budget-table" id="main">
    <div class="header">
        <button id="openNav" class="toggle" @click="open()">&#9776;</button>
      <span class="heading">
          {{formatedDate}}
      </span>

      <span class="heading cost">
      <span>Remaining Budget</span><br> {{amountRemaining | currency}}
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
    
            <tr v-for="(item, index) in currentMonth.items" :key="index">
                <td ><input type="text" name="category" v-model="item.category" class="input1" placeholder="Create a category"></td>
                <td ><input type="number" name="budgeted" v-model="item.budgeted" class="input1" placeholder="add budget to category"></td>
                <td ><input type="number" name="activity" v-model="item.activity" class="input1" placeholder="Enter amount spent" ></td>
                <td class="available">{{(item.budgeted - item.activity) | currency}}</td>
            </tr>
        </table>
        <button  class="btn-save" @click="saveItems">Save</button>
    </div>
</div>
</template>

<script>
import * as moment from 'moment'
// require('../custom.css')


export default {
    name:'BudgetTable',
    components:{
    },
    data (){
        return{
            category: '',
            budgeted: '',
            activity: '',
            available: '',
            months: [],
            currentMonth: '',
            id: '',
            formatedDate: '',
            budget: '',
        }
    },

    filters: {
        currency(value) {
            return "$ " + parseFloat(value).toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
        }
    },

    created() {
        if (localStorage.getItem('budget')) {
        const storage = JSON.parse(localStorage.getItem('budget'))
        this.months = storage.months;
        if (this.months.length < 1) {
            this.$router.push('/');
        } else  {
            this.id = this.$route.params.id;
            this.currentMonth = this.months[this.id];
            this.initializeItems();
            this.formatDate();
        }
        } else {
        this.$router.push('/');
        }
    },

    computed: {
        totalCost() {
            var total = this.currentMonth.items.reduce( (acc, item) => acc + (item.budgeted - item.activity), 0)
            return total
        },

        amountRemaining(){
            return this.currentMonth.budget - this.totalCost
        }

    },

    methods: {
        open() {
      document.getElementById("mySidebar").style.display = "block";
      document.getElementById("openNav").style.display = 'none';
      },
        addCategory(){
            this.currentMonth.items.push({
                category: '',
                budgeted: '',
                activity: '',
                available: '',
            });
        },

        initializeItems() {
            if (!this.currentMonth.items) {
                this.currentMonth.items = [];
                this.synchronizeStorage();
            }
        },

        formatDate() {
            this.formatedDate = moment(this.currentMonth.month).format("MMMM, YYYY");
        },

        saveItems() {
            this.synchronizeStorage();
        },

        synchronizeStorage(){
            const data = {
                months: this.months
            }
            localStorage.setItem('budget', JSON.stringify(data));
        }
  },
}
</script>

<style src="../custom.css"></style>

<style scoped>


.budget-table{
    margin-left: 25rem;
}
.butable{
    margin: 5rem;
}
.header{
    padding: 2rem;
}

.toggle{
  display: none;
}

.heading{
  font-size: 5rem;
  font-weight: bold;
  color: #130d25;
}

.heading.cost{
    font-size: 3rem;
    float: right;
}

.add {
    cursor: pointer;
}

.table-add {
  color: #070;
  cursor: pointer;
  position: absolute;
  top: 8.4rem;
  right: 10rem;
  font-size: 4rem;
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

th {
    font-size: 1.6rem;
    font-weight: bold;
    background-color: #130d25;
    color: #fff;
}

td {
    font-size: 1.3rem;
    font-weight: 400;
}

tr:nth-child(even) {
    background-color: #dddddd;
}

tr:hover {
    background-color: #f5f5f5;
    }

.btn-save{
    margin-top: 5rem;
    margin-bottom: 2rem;    
    background-color: #008CBA;
    color: white;
    border: none;
    padding: 1rem 2rem;
    text-decoration: none;
    display: inline-block;
    font-size: 1.3rem;
    -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: .5rem;
}

.input1{
  font-size: 1.5rem;
  width: 80%;
  padding: .5rem .4rem;
  border-radius: .3rem;
}

@media only screen and (max-width: 600px) {
    .budget-table {
        margin-left: 0rem;
    }

    .toggle{
        display: inline-block;
        font-size: 2.2rem;
        cursor: pointer;
        border-radius: 1rem;
        padding: .2rem 1.5rem;
        background-color: #130d25;
        border: none;
        color: #fff;
        float: left;
        margin: 1rem 4rem 1rem -2rem;
        }

    .heading{
        font-size: 4rem;
    }
    .heading.cost{
        padding: 1.5rem 0rem;
        font-size: 2rem;
        padding-left: 8rem;
        float: left;
    }
    .table-add {
        color: #070;
        cursor: pointer;
        padding-top: 2rem;
        float: left;
        font-size: 3rem;
    }

}

</style>