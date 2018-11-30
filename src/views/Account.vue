<template>
  <div class="account" id="main">
      <div class="">
          <button id="openNav" class="toggle" @click="open()">&#9776;</button>
      </div>
    <div class="header">
      <span class="heading">
        {{title}}
      </span>
      <!-- <a href="#open-modal" class="btn">Add Account +</a> -->
      <button class="btn" @click.prevent="showModalAdd = !showModalAdd">Add Account +</button>
    </div>
    
    <div class="customModal" v-if="showModalAdd">
      <div class="customModalTitle">
      <a href="#" title="Close" class="modal-close" @click.prevent="showModalAdd = !showModalAdd">&times;</a>
      <h1 class="heading2">Add Account</h1>
      </div>

      <div class="customModalBody">
          <input type="text" name="name" v-model="name" class="input1" placeholder="Enter account name"><br>
          <select name="category" class="select input1" >
              <option value="CREDIT_CARD">Credit Card</option>
              <option value="CHECKING">Checking</option>
              <option value="SAVINGS">Savings</option>
          </select>
          <br>
          <input type="number" v-model="balance" name="balance" class="input1" placeholder="Enter account balance"><br>
          <p class="help input1">Use negative values for accounts that carry a negative balance, e.g. credit cards</p><br><br>
      </div>   
      <!-- <div class="customModalFooter">
          <button class="btn-submit" @click="addAccount" @click.prevent="showModalAdd = !showModalAdd">Submit</button>
      </div> -->
      
    </div>

    <account-table :accounts="accounts" @account-deleted="deleteAccount"></account-table>
  </div>
</template>


<script>

import AccountTable from '@/components/AccountTable.vue'

 export default{
  name:'Account',
  components: {
    AccountTable
  },

  data (){
   return{
    title:'Accounts',
    name: '',
    category: 'credit card',
    balance: '',
    accounts: [],
    showModalAdd: false,

   }
  },

  created() {
    if (localStorage.getItem('budgit')) {
      const storage = JSON.parse(localStorage.getItem('budgit'))
      this.accounts = storage.accounts;
    } else {
      const data = {
          accounts: []
      };
     localStorage.setItem('budgit', JSON.stringify(data))
    }
  },

  methods: {
    addAccount() {
      const data = {
        name: this.name,
        category: this.category,
        balance: this.balance
      };
      this.accounts.push(data);
      this.synchronizeStorage();
    },
    deleteAccount(index){
      this.accounts.splice(index, 1);
      this.synchronizeStorage();
    },
    synchronizeStorage() {
      const data = {
          accounts: this.accounts
      };
      localStorage.setItem('budgit', JSON.stringify(data))
      },
    open() {
        document.getElementById("main").style.marginLeft = "25%";
        document.getElementById("mySidebar").style.width = "25%";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("openNav").style.display = 'none';
        },
    // openBar(){
    //         this.$emit('open')
    //     },

  }
 }
</script>

<style scoped>
.account{
  margin-left: 25rem;
}

.header{
  padding: 2rem;
  /* display: inline-block; */
}

.heading{
  font-size: 5rem;
  font-weight: bold;
  color: #130d25;
}

.toggle{
  display: none;
}

.btn{
    text-decoration: none;
    padding: 1rem 2rem;
    /* display: inline-block; */
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

.input1{
  font-size: 1.2rem;
  margin: 2rem;
  width: 80%;
  padding: 1rem .4rem;

}

.heading2{
  padding: 2rem 2rem;
  font-size: 3rem;
  color: #4f4b5a;
  
}

.btn-submit{
  background-color: #008CBA;
  color: white;
  border: none;
  padding: 1rem 3rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  -webkit-transition-duration: 0.4s; 
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: .5rem;
  margin-left: 2rem;
  margin-top: -2rem;
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

.customModal .customModalFooter {
    background-color: #eee;
    padding: .4rem 1.2rem;
    text-align: left;
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
  .account {
    margin-left: 0rem;
  }

  .header{
    text-align: center;
  }
  .toggle{
    display: inline;
  }
}

</style>

