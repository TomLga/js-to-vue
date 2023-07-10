<template>
    <div class="row" style="margin: auto;">
    <div class="newCard" v-for="data in productDisplayed" :key="data.id">
        <img class="newCardImg" :src="data.Image">
        <div class="body-newCard">
          <h5 class="title-newCard">{{data.Title}}</h5>
          <p class="text-newCard">{{data.Description}}</p>
          <p class="text-newCard">{{data.price}}</p>
          <button class="btn btn-primary">add to cart</button>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        computed:{
            productDisplayed(){
                return this.$store.state.productDisplayed
            }
            },
            mounted() {
                this.$store.dispatch('fetchProducts')
            }
        }
    
</script>

<style scoped>

</style>