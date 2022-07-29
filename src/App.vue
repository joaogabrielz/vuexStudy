<template>
<div>
    <div class="container mt-10">
      
      <div class="row mt-5">

        <div class="col" v-for="product in products" :key="product.id">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div class="card-body">
              <p class="card-text">{{ product.title }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button @click="addCart(product)" type="button" class="btn btn-sm btn-outline-secondary">Adicionar</button>
                  <button @click="deleteCart(product)" type="button" class="btn btn-sm btn-outline-secondary">Delete</button>
                </div>
                <small class="text-muted" v-if="!!showQntd(product.id)">
                  {{ showQntd(product.id) }}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr>

        <pre>
            {{ $store.state.cart}}

        </pre>

      <hr>
      <br> <br> <br> <br> <br> <br>
      {{$store.state.user.first_name}} - {{$store.state.user.last_name}} <br>

      <label for="">Primeiro Nome</label>
      <input type="text" v-model="firstName" class="form-control">

      <label for="">Sobrenome</label>
      <input type="text" v-model="lastName" class="form-control">

      <button @click.prevent.stop="changeName" class="btn btn-primary">Save</button>
   
  </div>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      MyName: "",

      products: [
        { id: 1,  title: "Produto 1" },
        { id: 2,  title: "Produto 2" },
        { id: 3,  title: "Produto 3" }
      ]
    }
  },
  computed:{
    firstName: {
      get(){
        return this.$store.state.user.first_name;
      },
      set(value){
        this.$store.commit('saveFirstName2', value);
      }
    },
    lastName: {
      get(){
        return this.$store.state.user.last_name;
      },
      set(value){
        this.$store.commit('saveLastName', value);
      }
    }
  },
  methods: {

    addCart(product){
      this.$store.commit("addProduct", product)
    },
    showQntd(id){
      return this.$store.state.cart.find(o => o.id === id)?.qtd || 0;
    },
    deleteCart(product){
      this.$store.commit("deleteProduct", product)
    },
    

    changeName(){

      //sending to Action
      //this.$store.dispatch('saveFirstName', this.MyName);

      //sending to Mutation
      this.$store.commit('saveFirstName2', this.MyName);
      
    }
  }
}
</script>

<style>
#app {
 
}
</style>
