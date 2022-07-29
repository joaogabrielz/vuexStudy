import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    user: {
      first_name: "Jon",
      last_name: "snow"
    },

    cart: []
  },
  getters: {
  },
  mutations: {
    //cart
    addProduct(state, payload){
      const existingProduct = state.cart.find(o => o.id === payload.id);

      if(existingProduct)
          existingProduct.qtd += 1;
          
      else{
        payload.qtd = 1;
        state.cart.push(payload);
      }
    },
    deleteProduct(state, payload){

      const productToExclude = state.cart.find(o => o.id === payload.id)    

      if(productToExclude.qtd > 1){
         productToExclude.qtd -= 1;
       
      }
      else{
        state.cart.splice(productToExclude, 1);
      }
      
      
    },

    //---------------
    saveFirstName2(state, payload){
      //console.log(payload);
      state.user.first_name = payload;
    },
    saveLastName(state, payload){
      state.user.last_name = payload;
    }
  },
  actions: {
    // saveFirstName(context, payload){
    //   //console.log(payload);
    //   context.commit('saveFirstName2', payload)
    // }
  },
  modules: {
  }
})
