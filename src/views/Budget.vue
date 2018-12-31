<template>
  <div class="budget" id="main">
    <div class="header">
      <span class="toggle" @click="open()"><i class="fa fa-bars"></i></span>
      <span class="heading">
        {{title}}
      </span>
      <button @click.prevent="showModalAdd = !showModalAdd" class="btn">Add Budget +</button>
    </div>

    <div class="overlay" v-if="showModalAdd">
      <div class="customModal">
        <div class="customModalTitle">
          <a href="#" title="Close" class="modal-close" @click.prevent="showModalAdd = !showModalAdd">&times;</a>
          <h1 class="heading2">Monthly Budget</h1>
        </div>
        <div class="customModalBody">
          <input type="month" name="month" v-model="month" class="input1" data-placeholder="" required aria-required="true" ><i class="fas fa-calendar-alt"></i><br>
          <input type="number" v-model="budget" name="budget" class="input1" placeholder="Enter budget for the month"><i class="fas fa-dollar-sign"></i>
          <br><br>
          <button class="btn-submit" @click="addMonth">Enter</button>
          
        </div>
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
    budget: '',
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
    open() {
      document.getElementById("mySidebar").style.display = "block";
      document.getElementById("myOverlay").style.display = "block";
      },
    addMonth() {
      const data = {
        month: this.month,
        budget: this.budget
      };
      this.months.push(data);
      this.synchronizeStorage();
      this.showAdd(event);
      this.month = '';
      this.budget = '';
    },

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

.toggle{
  display: none;
}

input[type="month"]::before { 
	content: attr(data-placeholder);
  width: 100%;
}

input[type="month"]:focus::before,
input[type="month"]:valid::before { display: none }

.input1{
  font-size: 1.5rem;
  margin: 2rem;
  width: 80%;
  padding: 1rem .4rem;
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
  margin-left: 20rem;
  padding: 1rem 2rem;
  text-decoration: none;
  display: inline-block;
  font-size: 1.3rem;
  -webkit-transition-duration: 0.4s; 
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: .5rem;

}

.customModal {
  box-shadow: 0rem .1rem 1.2rem rgba(0,0,0,0.4);
  left: calc(50vw - 20rem);
  position: absolute;
  z-index: 999;
  width: 50rem;
  top: 19vh;
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
    text-align: left;
    padding: 1.2rem;
}

.modal-close {
  color: #aaa;
  line-height: 5rem;
  font-size: 1.5rem;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 9rem;
  text-decoration: none;
  padding: 0rem;
} 

.modal-close:hover {
  color: #000;
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
}

@media only screen and (max-width: 600px) {
  .budget{
    margin-left: 0rem;
  }

  .heading{
    font-size: 4rem;
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

  .btn{
    text-decoration: none;
    padding: .8rem 1.5rem;
    border-radius: 10rem;
    font-size: 1.2rem;
    float: right;
  }

  .customModal {
    left: calc(40vw - 10rem);
    position: absolute;
    width: 30rem;
    top: 12vh;
  }

}
</style>

