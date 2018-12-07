<template>
    <div class="actable">
        <table>
    <tr>
        <th>Account Name</th>
        <th>Balance</th>
        <th></th>
    </tr>
    <tr v-for="(account, index) in accounts" :key="index">
        <td>{{account.name}}</td>
        <td> {{account.balance}} </td>
        <td>
            <button  class="btn-edit"  @click="selUpdate(index)">Edit </button>
            <button  class="btn-delete" @click="selAcc(index)">Delete </button>
        </td>
    </tr>
    <div class="customModal" v-if="showModalDelete">
        <div class="customModalTitle">
            <button class="close" @click.prevent="showModalDelete = !showModalDelete">&times;</button>
        </div>
        <div class="customModalBody">
            <p>Are you sure you want to delete account {{selectedAccount.name}}</p>
        </div>
        <div class="customModalFooter">
            <button class="btn-ok" @click="removeAccount($event)">OK</button>
        </div>
    </div>

    <div class="customModal" v-if="showModalUpdate">
      <div class="customModalTitle">
      <a href="#" title="Close" class="modal-close" @click.prevent="showModalUpdate = !showModalUpdate">&times;</a>
      <h1 class="heading2">Update Account</h1>
      </div>

      <div class="customModalBody">
          <input type="text" name="name" v-model="selectedAccount.name" class="input1" ><br>
          <select name="category" class="select input1" >
              <option value="CREDIT_CARD">Credit Card</option>
              <option value="CHECKING">Checking</option>
              <option value="SAVINGS">Savings</option>
          </select>
          <br>
          <input type="number" v-model="selectedAccount.balance" name="balance" class="input1"><br>

          <p class="help input1">Use negative values for accounts that carry a negative balance, e.g. credit cards</p><br><br>
      </div>   
      <div class="customModalFooter">
          <button class="btn-submit" @click="updateAccount($event)">Update</button>
      </div>
      
    </div>
    </table>
    
</div>
</template>

<script>
export default {
    name:'AccountTable',
    props: ['accounts'],
    data (){
    return{
        title:'AccountTable',
        showModalDelete: false,
        selectedIndex: '',
        showModalUpdate: false,
        selectedAccount: ''
    }
    },
    methods: {
        removeAccount(event){
            this.$emit('account-deleted', this.selectedIndex );
            this.showDel(event)
        },
        showDel(event){
            this.showModalDelete = !this.showModalDelete;
            event.preventDefault()
        },
        selAcc(index){
            this.selectedIndex = index;
            this.selectedAccount = this.accounts[index];
            this.showDel(event)
        },
        updateAccount(event){
            this.$emit('account-update', this.selectedIndex );
            this.showUpdate(event)
        },
        selUpdate(index) {
            this.selectedIndex = index;
            this.selectedAccount = this.accounts[index];
            this.showUpdate(event)
        },
        showUpdate(event){
            this.showModalUpdate = !this.showModalUpdate;
            event.preventDefault()
        },
    },
    
}
</script>

<style scoped>
.actable{
    /* margin-left: 25rem; */
    margin: 5rem;
    
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

.btn-edit{
    background-color: #008CBA;
    color: white;
    border: none;
    padding: .5rem .5rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.2rem;
    -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: .5rem;
    margin: 0rem 1rem;
}

.btn-delete{
  background-color: rgb(233, 22, 22);
  color: white;
  border: none;
  padding: .5rem .5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.3rem;
  -webkit-transition-duration: 0.4s; 
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: .5rem;
  margin: 0rem 1rem;
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
  top: 20vh;
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



</style>
