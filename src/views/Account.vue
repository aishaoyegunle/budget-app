<template>
  <div class="account">
    <div class="header">
      <span class="heading">
        {{title}}
      </span>
      <a href="#open-modal" class="btn">Add Account +</a>
    </div>
    
    <div id="open-modal" class="modal-window">
      <div>
      <a href="#" title="Close" class="modal-close">&times;</a>
      <h1 class="heading2">Add Account</h1>
      <div>
          <input type="text" name="name" v-model="name" class="input1" placeholder="Enter account name"><br>
          <select name="category" class="select input1" >
              <option value="CREDIT_CARD">Credit Card</option>
              <option value="CHECKING">Checking</option>
              <option value="SAVINGS">Savings</option>
          </select>
          <br>
          <input type="number" v-model="balance" name="balance" class="input1" placeholder="Enter account balance"><br>
          <p class="help input1">Use negative values for accounts that carry a negative balance, e.g. credit cards</p><br><br>
          
          <a href="#" class="btn-submit" @click="addAccount">Submit</a>

      </div>
      </div>
    </div>

    <account-table :accounts="accounts"></account-table>
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
      this.addToStorage();
    },

    addToStorage() {
      const data = {
          accounts: this.accounts
      };
     localStorage.setItem('budgit', JSON.stringify(data))
    },
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

.btn:link,
.btn:visited{
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

.modal-window {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.25);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  opacity: 0;
  pointer-events: none;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
}
.modal-window:target {
  opacity: 1;
  pointer-events: auto;
}

.modal-window>div {
  width: 50rem;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  background: #ffffff;
  color: #333333;
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



</style>

