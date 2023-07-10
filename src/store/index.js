import { createStore } from 'vuex'
let dataUrl =('https://tomlga.github.io/productArray/data.json')
export default createStore({
  state: {
    productDisplayed: null
  },
  getters: {
  },
  mutations: {
    getProuductsDisplayed(state, productDisplayed){
      state.productDisplayed = productDisplayed;
    }
  },
  actions: {
    async fetchProducts(context){
      let pro = await fetch(dataUrl);
      let {productDisplayed} = await pro.json();
      if (productDisplayed) {
        context.commit('getProuductsDisplayed', productDisplayed);
      } else {
        alert("please wait")
      }
    }
  },
  modules: {
  }
})
