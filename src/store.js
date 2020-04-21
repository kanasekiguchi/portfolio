import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
   users:[
    {name: 'John', email:'john@example.com', age:22},
    {name: 'Merry', email: 'merry@facebook.com',age:33},
    {name: 'Ken', email: 'ken@amazon.com',age:29}
   ]
  },
  mutations: {
    getAddress(state, zip, address) {
      state.zip = zip;
      state.address = address;
    }
  },
  actions: {
    async getAddressAction(context) {
      const payload = {
        address: "",
        zip: context.state.zip
      };
      await axios
        .get("https://api.zipaddress.net/?", {
          params: { zipcode: payload.zip }
        })
        .then(res => {
          payload.address = res.data.data.fullAddress;
        });
      context.commit("getAddress", payload);
    }
  }
});
