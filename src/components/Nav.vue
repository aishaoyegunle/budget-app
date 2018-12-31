<template>
    <div> 
        <nav class="sidebar" id="mySidebar">
            <img src="" alt="logo" class="logo">
            <button class="close" @click="close" >&times;</button>
            <ul class="menu">
                <li @click="handleResize"><router-link class="menulist" to="/">Account</router-link></li><hr>
                <li @click="handleResize"><router-link class="menulist" to="/budget">Budget</router-link></li><hr>
            </ul>
        </nav>

        <div class="overlay" @click="close()"  id="myOverlay" style="display:none;"></div>
        
    </div>
</template>


<script>

export default {
  name: 'Nav',
  components: {
      
  },
  data (){
   return{
       window: {
            width: 0,
            height: 0
    }
   }
  },

created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },

  methods:{
   handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      if (this.window.width<600){
          this.close();
      }
      else {
          this.open();
      }
    },

    open() {
      document.getElementById("mySidebar").style.display = "block";
      document.getElementById("myOverlay").style.display = "block";
      },

    close() {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
        },
    
    }
}
</script>


<style scoped>

.logo{
    margin: 5rem 2rem;
}

.sidebar {
            display: block;

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
        z-index: 3;
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
    .overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        transition: opacity 500ms;
        opacity: 1;
        cursor: pointer;
    }

}

</style>
