<template>
    <div>
            <button id="openNav" class="toggle" @click="open()">&#9776;</button>
        <div class="sidebar" id="mySidebar"> 
            <nav>
                <img src="" alt="logo" class="logo">
                <button class="close" @click="close" >Close &times;</button>
                <ul class="menu">
                    <li><router-link class="menulist" to="/">Account</router-link></li><hr>
                    <li><router-link class="menulist" to="/budget">Budget</router-link></li><hr>
                </ul>
            </nav>
    </div>

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
    open() {
        document.getElementById("main").style.marginLeft = "25%";
        document.getElementById("mySidebar").style.width = "25%";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("openNav").style.display = 'none';
        },
    close() {
        document.getElementById("main").style.marginLeft = "0rem";
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("openNav").style.display = "inline-block";
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

.toggle{
  display: none;
}
/* .menulist:hover{
    
} */

/* .menulist:active{
    color: yellow;
} */

/* menu:hover{
    text-decoration: overline;
} */

@media screen and (max-width: 500px) {
  .sidebar {
    display: none;
  }
  .close{
    display: block;
}
.toggle{
    display: inline;
  }
}

/* @media only screen and (min-width: 600px) {    .sidebar {
        display: block;
    }
     .close{
    display: none;
}
.toggle{
    display: none;
  }
} */
</style>
