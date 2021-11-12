<template>
  <div>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <Header/>
    
   <router-view/>

  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style scoped>


</style>
