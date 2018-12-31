<template>
<div class="budget-table" id="main">
    <div class="header">
        <span class="toggle" @click="open()"><i class="fa fa-bars"></i></span>
      <span class="heading">
          {{formatedDate}}
      </span>

      <span class="heading cost">
      <span>Remaining Budget</span><br> {{amountRemaining | currency}}
      </span>

    </div>
    <div class="overlay" @click="close()"  id="myOverlay" style="display:none;"></div>

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
                <td>
                    <span class="remove-item" @click="remove(index)"><i class="fas fa-trash-alt"></i></span>
                </td>
            </tr>
        </table>
        <button  class="btn-save" @click="saveItems">Save</button>
    </div>
</div>
</template>

<script>
import * as moment from 'moment'

export default {
    name:'BudgetTable',
    components:{
    },
    data (){
        return{
            category: '',
            budgeted: '',
            activity: '',
            // available: '',
            months: [],
            currentMonth: '',
            id: '',
            formatedDate: '',
            budget: '',
            blockRemoval: true,

        }
    },

    watch: {
        months () {
            this.blockRemoval = this.currentMonth.items.length <= 1
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
            document.getElementById("myOverlay").style.display = "block";
            },
        close() {
            document.getElementById("mySidebar").style.display = "none";
            document.getElementById("myOverlay").style.display = "none";
            },
      
      addCategory(){
            var checkEmptyLines = this.currentMonth.items.filter(item => item.number === null)
            if (checkEmptyLines.length >= 1 && this.currentMonth.items.length > 0) return
                this.currentMonth.items.push({
                    category: '',
                    budgeted: '',
                    activity: '',
                    // available: null,
                })
        },

        initializeItems() {
            if (!this.currentMonth.items) {
                this.currentMonth.items = [];
                this.synchronizeStorage();
            }
        },
        saveItems() {
            this.synchronizeStorage();
        },

        formatDate() {
            this.formatedDate = moment(this.currentMonth.month).format("MMMM, YYYY");
        },

        synchronizeStorage(){
            const data = {
                months: this.months
            }
            localStorage.setItem('budget', JSON.stringify(data));
        },
        remove (index) {
            if (!this.blockRemoval) {this.currentMonth.items.splice(index, 1)}
            this.synchronizeStorage();
        }
  },

  mounted () {
    this.addCategory()
  },

}

</script>


<style src="../custom.css"></style>

<style scoped>


.budget-table{
    margin-left: 25rem;
    position: relative;

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
  top: 9rem;
  left: 5rem;
  font-size: 4rem;
}
.table-add:hover {
    color: #0b0;
  }

table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    /* margin-left: 2rem; */
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
    margin-bottom: 5rem;    
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
    float: right;
}

.input1{
  font-size: 1.5rem;
  width: 80%;
  padding: .5rem .4rem;
  border-radius: .3rem;
}

.remove-item{
    cursor: pointer;
    padding: 1.5rem;
    color: red;
}
.remove-item:hover{
    background-color: rgba(146, 158, 173, 0.575);
    border-radius: 5rem;
    
}

@media (min-width: 600px) and (max-width: 690px) {
     .heading{
        font-size: 2.8rem;
        margin-left: -2rem;
    }
    .heading.cost{
        padding: 1.5rem 0rem;
        font-size: 1.9rem;
        padding-left: 8rem;
        float: right;
    }
    .table-add {
        color: #070;
        cursor: pointer;
        padding-top: 2rem;
        font-size: 3rem;
        position: absolute;
        top: 6rem;
        left: 5rem;
    }

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
        font-size: 3rem;
        margin-left: -2rem;
    }
    .heading.cost{
        padding: 1.5rem 0rem;
        font-size: 2rem;
        padding-left: 8rem;
        float: right;
    }
    .overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        transition: opacity 500ms;
        opacity: 1;
        cursor: pointer;
    }

    .table-add {
        color: #070;
        cursor: pointer;
        padding-top: 2rem;
        /* float: left; */
        font-size: 3rem;
        position: absolute;
        top: 6rem;
        left: 5rem;
    }

}

</style>