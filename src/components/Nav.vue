<template>
    <nav class="sidebar">
        <img src="" alt="logo" class="logo">
        <ul class="menu">
            <li><router-link class="menulist" to="/">Account</router-link></li><hr>
            <li><router-link class="menulist" to="/budget">Budget</router-link></li><hr>
        </ul>

    </nav>
</template>

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

/* .menulist:hover{
    
} */

/* .menulist:active{
    color: yellow;
} */

/* menu:hover{
    text-decoration: overline;
} */

/* @media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
} */

@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
</style>
