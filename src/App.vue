<template>
  <div id="app">
    <nav-side></nav-side>

    <router-view/>
    <site-footer></site-footer>
  </div>
</template>

<script>
import NavSide from './components/Nav.vue'
import SiteFooter from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    NavSide,
    SiteFooter,
  }
  
}
</script>

<style>

</style>
