<template>
  <div class="account">
    <div class="header">
      <span class="heading">
        {{title}}
      </span>
      <button @click="createAccount" class="btn">Add Account +</button>
    </div>
    <!-- <div id="open-modal" class="modal-window">
      <div>
      <a href="#" title="Close" class="modal-close">Close</a>
      <h1>Add Account</h1>
      <div>
        <div class="form">
          <label for="name" class="label">Name</label> 
          <input type="text" name="name" v-model="name" class="input">
          
          <label for="category" class="label">Category</label>
          <span class="select">
            <select name="category">
              <option value="CREDIT_CARD">Credit Card</option>
              <option value="CHECKING">Checking</option>
              <option value="SAVINGS">Savings</option>
            </select>
          </span>

          <label for="balance" class="label">Balance</label>
          <input type="number" v-model="balance" name="balance" class="input">
          <span class="help">Use negative values for accounts that carry a negative balance, e.g. credit cards</span>
          
          <button class="button" @click="addAccount">
            Submit
          </button>
        </div>
      </div>
      </div>
    </div> -->
    <account-table :accounts ="accounts"></account-table>
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
    createAccount(){
      this.$swal({
          title: 'Add Account',
          html:
            `<input type="text" id="swal-input1" name="name" v-model="name" class="swal2-input input" placeholder="Enter account name">
            <input type="text" id="swal-input2" v-model="balance" name="balance" class="swal2-input input" placeholder="Enter account balance"><br>
            <span class="help">Use negative values for accounts that carry a negative balance, e.g. credit cards</span>
            <select name="category" placeholder="select account catergory" class="select swal2-input" id="swal-input3">
              <option value="CREDIT_CARD">Credit Card</option>
              <option value="CHECKING">Checking</option>
              <option value="SAVINGS">Savings</option>
            </select>
            <button class="btn-submit" @click="addAccount">Submit</button>
          `,
          // focusConfirm: false,
          showCancelButton: false,
          showConfirmButton: false,
          showCloseButton: true,
          // preConfirm: () => {
          //   return [
          //     document.getElementById('swal-input1').value,
          //     document.getElementById('swal-input2').value
          //   ]
          // }
          })
          // .then((result) => {
          // if(result.value) {
          //   this.$swal('Deleted', 'You successfully deleted this file', 'success')
          // }
          // })
          // if (formValues) {
          //   swal(json.stringify(formValues))
          //   }
    },

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
    }
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
    margin: 1.3rem 
}
.btn:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
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
/* .modal-window {
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
} */
/* .modal-window:target {
  opacity: 1;
  pointer-events: auto;
} */

/* .modal-window>div {
  width: 400px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2em;
  background: #ffffff;
  color: #333333;
} */


/* .modal-close {
  color: #aaa;
  line-height: 50px;
  font-size: 80%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;
}
.modal-close:hover {
  color: #000;
} */

</style>

