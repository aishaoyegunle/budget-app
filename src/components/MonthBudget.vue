<template>
  <!-- <div class="budget"> -->
    <div class="card">
      <router-link to="/budgetTable" class="content">
      <!-- <div class="container"> -->
        <h2>{{month.month}}</h2> 
        <h4>Remaining Budget</h4>
        <p>${{month.budgeted}}</p> 
      <!-- </div> -->
      </router-link>
    </div>
    <!-- <router-view/> -->
 
  <!-- </div> -->
</template>


<script>

 export default{
  name:'MonthBudget',
  props: ['month'],
  components: {
    
  },
  data (){
   return{
   }
  },
 }
</script>

<style scoped>
/* .budget{
  margin-left: 25rem;

} */

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
    width: 20rem;
    border-radius: .5rem;
    margin:2rem 5rem;
    display: inline-block;
    font-size: 1.5rem;
    padding: 2rem;
    /* background-color: #fff; */
    background-color: rgba(220, 220, 220, 0.26);
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    cursor: pointer;
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

