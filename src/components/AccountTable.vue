<template>
    <div class="actable">
        <table>
    <tr>
        <th>Account</th>
        <th>Balance</th>
        <th></th>
    </tr>

    <tr v-for="(account, index) in accounts" :key="account.id">
        <td>{{account.name}} {{index}}</td>
        <td> {{account.balance}} </td>
        <td>
            <!-- <a href="#edit" class="btn-edit">Edit</a>
            <div id="edit" class="modal-window">
            <div>
                <a href="#" title="Close" class="modal-close">&times;</a>
                <h1 class="heading2">Update Account</h1>
                <div>
                    <input type="text" name="name" v-model="name" class="input1" placeholder="Enter account name"><br>
                    <select name="category" class="select input1" >
                        <option value="CREDIT_CARD">Credit Card</option>
                        <option value="CHECKING">Checking</option>
                        <option value="SAVINGS">Savings</option>
                    </select>
                    <br>
                    <input type="number" v-model="balance" name="balance" class="input1" placeholder="Enter account balance"><br>
                    <a href="#" class="btn-submit" @click="updateAccount">Update</a>
                </div>
            </div>
            </div> -->

            <!-- <a href="#delete" class="btn-delete" >Delete</a> -->
            <a @click="removeAccount(index)" class="btn-delete">Delete</a>
            <!-- <div id="delete" class="modal-window">
                <p>Are you sure you want to delete {{index}}</p>
                <a href="#" class="btn-close">Close</a>
                <a href="#" class="btn-ok" @click="removeAccount(index)">Ok</a>
            </div> -->
        </td>
    </tr>
    
    </table>
    
</div>
</template>

<script>
export default {
    name:'AccountTable',
    props: ['accounts'],
    data (){
    return{
        title:'AccountTable'
    }
    },
    methods: {
        removeAccount(index){
            this.accounts.splice(index,1);
        },
    }
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
    border: .1rem solid #dddddd;
    text-align: left;
    padding: .8rem;
}

th{
    font-size: 1.4rem;
    font-weight: bold;
}

td{
    font-size: 1.3rem;
    font-weight: 400;
}

tr:nth-child(even) {
    background-color: #dddddd;
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
</style>
