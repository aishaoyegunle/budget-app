<template>
    <div class="actable">
        <table>
    <tr>
        <th>Account</th>
        <th>Balance</th>
        <th></th>
    </tr>
    <tr v-for="(account, index) in accounts" :key="index" :index="index">
        <td>{{account.name}} {{index}}</td>
        <td> {{account.balance}} </td>
        <td>
            <button  class="btn-delete" @click.prevent="showModalDelete = !showModalDelete">Delete {{index}}</button>
        </td>
    </tr>
    </table>
    <div class="customModal" v-if="showModalDelete">
                <div class="customModalTitle">
                    <button class="close" @click.prevent="showModalDelete = !showModalDelete">&times;</button>
                </div>
                <div class="customModalBody">
                    <p>Are you sure you want to delete account{{index}}</p>
                </div>
                <!-- <div class="customModalFooter">
                    <button class="btn-ok" @click="removeAccount(index)" @click.prevent="showModalDelete = !showModalDelete">OK</button>

                </div> -->
                </div>

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
    }
    },
    methods: {
        removeAccount(index){
            this.$emit('account-deleted', index )
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
