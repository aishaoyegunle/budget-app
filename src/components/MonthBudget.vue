<template>
    <div class="card">
      <router-link :to="{name: 'BudgetTable', params: {id: index}}"  class="content" >
        <!-- "'/BudgetTable/' + index" -->
        <h2>{{formatedDate}}</h2> 
        <h4>Remaining Budget</h4>
        <p>{{month.budgeted | currency}}</p> 
      </router-link>
    </div>
 
</template>


<script>
import * as moment from 'moment'

 export default{
  name:'MonthBudget',
  props: ['month', 'index'],
  components: {
    
  },
  data (){
   return{
     formatedDate: '',
     currentMonth: '',
     id:'',
   }
  },

  filters: {
      currency(value) {
          return "$ " + parseFloat(value).toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
      }
  },

  created(){
    this.formatDate();
  },

  methods: {
    formatDate() {
      this.currentMonth = this.month;
      this.formatedDate = moment(this.currentMonth.month).format("MMMM, YYYY");
    },
  }

 }
</script>

<style scoped>

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
    margin: 1.3rem;
    cursor: pointer;

}
.btn:hover {
    box-shadow: 0 1.2rem 1.6rem 0 rgba(0,0,0,0.24), 0 1.7rem 5rem 0 rgba(0,0,0,0.19);
}

.card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 30rem;
    border-radius: .5rem;
    margin:2rem 5rem;
    display: inline-block;
    font-size: 1.5rem;
    padding: 2rem;
    /* background-color: #fff; */
    background-color: rgba(220, 220, 220, 0.26);
    line-height: 3rem
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    cursor: pointer;
}

.card p{
  color: red;
}
/* .container {
    padding: 2px 16px;
} */

.content {
  text-decoration: none;
  color: #130d25;
}

.content h2,h4{
  float: left;
  
}

.content p{
  float: right;
  margin-top: 2rem;
}
</style>

