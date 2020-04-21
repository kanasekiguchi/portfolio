import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    count: 0,
    users:[
      {name: 'John', email:'john@example.com', age:22},
      {name: 'Merry', email: 'merry@facebook.com',age:33},
      {name: 'Ken', email: 'ken@amazon.com',age:29}
    ]
  },
  mutations: {
    increment:function(state){
      state.count++
    },
    getAddress(state, zip, address) {
      state.zip = zip;
      state.address = address;
    },
    setUsers : function(state,users) {
      state.users = users
    }
  },
  actions:{
    incrementOne: function(context){
      setTimeout(() => {
        context.commit('increment')
      }, 3000)
    },
    getUsers: function({commit}){
      return axios.get('https://us-central1-kanasekiguchi1009.cloudfunctions.net/skills')
          .then(response => {
            commit('setUsers',response.data)
          })
    }
  }
});
