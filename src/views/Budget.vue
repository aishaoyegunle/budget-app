<template>
  <div class="budget" id="main">
    <div class="header">
      <span class="heading">
        {{title}}
      </span>
      <button @click.prevent="showModalAdd = !showModalAdd" class="btn">Add Budget +</button>
    </div>

    <div class="customModal" v-if="showModalAdd">
      <div class="customModalTitle">
        <a href="#" title="Close" class="modal-close" @click.prevent="showModalAdd = !showModalAdd">&times;</a>
        <h1 class="heading2">Month</h1>
      </div>
      <div class="customModalBody">
        <input type="month" name="month" v-model="month" class="input1" data-placeholder="" required aria-required="true" ><i class="fas fa-calendar-alt"></i><br>
        <input type="number" v-model="budgeted" name="budgeted" class="input1" placeholder="Enter budget for the month"><i class="fas fa-dollar-sign"></i>
        <br><br>
        <button class="btn-submit" @click="addMonth">Submit</button>
        
      </div>
    </div>


    <month-budget v-for ="(month, i) in months" :key="i" :month="month" :index=i></month-budget>
  </div>
</template>


<script>

import MonthBudget from '@/components/MonthBudget.vue'

 export default{
  name:'Budget',
  components: {
    MonthBudget
  },
  data (){
   return{
    title:'Budget',
    month: '',
    budgeted: '',
    months: [],
    showModalAdd: false,

   }
  },

   created() {
    if (localStorage.getItem('budget')) {
      const storage = JSON.parse(localStorage.getItem('budget'))
      this.months = storage.months;
    } else {
      const data = {
          months: []
      };
     localStorage.setItem('budget', JSON.stringify(data))
    }
  },

  methods: {
    addMonth() {
      const data = {
        month: this.month,
        budgeted: this.budgeted
      };
      this.months.push(data);
      this.synchronizeStorage();
      this.showAdd(event);
      this.month = '';
      this.budgeted = '';
    },
  //   moment(date) {
  //   return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  // },
    synchronizeStorage() {
      const data = {
          months: this.months
      };
      localStorage.setItem('budget', JSON.stringify(data))
      },

    showAdd(event){
      this.showModalAdd = !this.showModalAdd;
      event.preventDefault()

  },
  }
}
</script>

<style scoped>
.budget{
  margin-left: 25rem;
  text-align: center;
  /* background-color: rgba(220, 220, 220, 0.541); */
}

.header{
  padding: 2rem;
  margin-bottom: 9rem;
}

.heading{
  font-size: 5rem;
  font-weight: bold;
  color: #130d25;
  /* left: 0rem; */
  float: left;
}
input[type="month"]::before { 
	content: attr(data-placeholder);
	width: 100%;
}

input[type="month"]:focus::before,
input[type="month"]:valid::before { display: none }

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

.customModal {
  box-shadow: 0rem .1rem 1.2rem rgba(0,0,0,0.4);
  left: calc(50vw - 30rem);
  position: absolute;
  z-index: 999;
  width: 60rem;
  top: 12vh;
  border-radius: .5rem;
  overflow: hidden;
  }

.customModal .customModalTitle {
    background-color: #eee;
    text-align: left;
    padding: .8rem 1.2rem;
    font-size: 1.5em;
}
  .customModal .customModalBody {
    background-color: #fff;
    padding: .8rem 1.2rem;
    text-align: left;
    padding: 1.2rem;
}

.modal-close {
  color: #aaa;
  line-height: 5rem;
  font-size: 1.2rem;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 9rem;
  text-decoration: none;
  padding: 2rem;
} 

.modal-close:hover {
  color: #000;
}

@media screen and (max-width: 500px) {
  .budget{
    margin-left: 0rem;
  }

  .header{
    text-align: center;
  }

}
</style>

