<template>
  <navBar/>
  
  <router-view/>
</template>
<script>
import navBar from './components/navBar.vue'; 
import style from './assets/style.css'
export default{
  components:{
    navBar

  }
}
</script>

<style>

</style>
