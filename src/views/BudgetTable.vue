<template>
<div class="budget-table" id="main">
    <div class="header">
      <span class="heading">
          {{formatedDate}}
      </span>

      <span class="heading cost">
       {{totalCost}}
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
                <td ><currency-input type="text" name="budgeted" v-model="item.budgeted" class="input1" placeholder="add budget to category"></currency-input></td>
                <td ><currency-input type="text" name="activity" v-model="item.activity" class="input1" placeholder="Enter amount spent"></currency-input></td>
                <td ><currency-input type="text" name="available" v-model="item.available" class="input1" placeholder="Available balance"></currency-input></td>
            </tr>
        </table>
        <button  class="btn-save" @click="saveItems">Save</button>
    </div>
</div>
</template>

<script>
import * as moment from 'moment'
import CurrencyInput from './BudgetTable.vue'

export default {
    name:'BudgetTable',
    components:{
        CurrencyInput
    },
    props: ['budgets','value'],
    template: `
        <div>
            <input 
            type="text" 
            :value="format(value)"
            v-model="displayValue" 
            @blur="isInputActive = false"
            @focus="isInputActive = true"
            ref="input"/>
        </div>`,

    data (){
        return{
            category: '',
            budgeted: '',
            activity: '',
            available: '',
            months: [],
            currentMonth: '',
            id: '',
            amountRemaining: 0,
            formatedDate: '',
            isInputActive: false

        }
    },

    filters: {
        currency(value) {
            return "$ " + parseFloat(value).toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
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
        // amountRemaining() {
        //     const cost = 
        // },

        totalCost() {
            // let cost =0
            // if (this.currentMonth.items.length < 1) {
            //     return cost;
            // } else {
            //     cost = this.currentMonth.items.reduce((a, b) => a.budgeted + b.budgeted);
            //     return cost;
            // }
            return 0;
        },

        displayValue: {
            get: function() {
                if (this.isInputActive) {
                    // Cursor is inside the input field. unformat display value for user
                    return this.value.toString()
                } else {
                    // User is not modifying now. Format display value for user interface
                    return "$ " + this.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
                }
            },
            // set: function(modifiedValue) {
            //     // Recalculate value after ignoring "$" and "," in user input
            //     let newValue = parseFloat(modifiedValue.replace(/[^\d\.]/g, ""))
            //     // Ensure that it is not NaN
            //     if (isNaN(newValue)) {
            //         newValue = 0
            //     }
            //     // Note: we cannot set this.value as it is a "prop". It needs to be passed to parent component
            //     // $emit the event so that parent component gets it
            //     this.$emit('input', newValue)
            // }
        }
    },

    methods: {
        addCategory(){
            this.currentMonth.items.push({
                category: '',
                budgeted: '',
                activity: '',
                available: ''
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

<style scoped>


.budget-table{
    margin-left: 25rem;
    /* padding: 0rem 10rem;
    position: relative; */  
}
.butable{
    margin: 5rem;
}
.header{
    padding: 2rem;
    /* margin-bottom: 5rem; */
}

.heading{
  font-size: 5rem;
  font-weight: bold;
  color: #130d25;
}

.cost{
    float: right;
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
    cursor: pointer;
}

@media screen and (max-width: 500px) {
  .budget-table {
    margin-left: 0rem;
  }

  .header{
    text-align: center;
  }

}

</style>
