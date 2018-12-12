<template>
    <div class="sidebar" id="mySidebar"> 
        <nav>
            <img src="" alt="logo" class="logo">
            <button class="close" @click="close" >&times;</button>
            <ul class="menu">
                <li><router-link class="menulist" to="/">Account</router-link></li><hr>
                <li><router-link class="menulist" to="/budget">Budget</router-link></li><hr>
            </ul>
        </nav>
    </div>
</template>


<script>

export default {
  name: 'Nav',
  components: {
      
  },
  data (){
   return{
   }
  },

  methods:{
    close() {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("openNav").style.display = "block";
        },
    }
}
</script>


<style scoped>


.logo{
    margin: 5rem 2rem;
}

.sidebar {
  margin: 0;
  padding: 0;
  width: 25rem;
  background-color: #130d25;
  position: fixed;
  height: 100%;
  overflow: auto;
}
.close{
    display: none;
    cursor: pointer;
}
.menu{
    list-style: none;
    margin-left: 5rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 3rem;
    line-height: 3;
}

.menulist{
    text-decoration: none;
    color: #fff;
}


@media only screen and (max-width: 600px) {
  .sidebar {
    display: none;
    width: 20rem;
    height: 100%;
  }
  .menu{
    list-style: none;
    margin-left: 3rem;
    margin-top: 10rem;
    font-size: 2rem;
}
    .close{
        display: block;
        margin-left: 16rem;
        margin-top: -10rem;
        font-size: 3rem;
        color: #fff;
        background-color: #130d25;
        border: none;
        }

}

</style>
