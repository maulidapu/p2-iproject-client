import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios';
import router from '../router'

let axios = ax.create({
  // baseURL: 'http://localhost:3000'
  baseURL: 'https://redflag-maul.herokuapp.com'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items : [],
    province: [],
    city: [],
    isLogin: false
  },
  mutations: {
    setItems(state, payload) {
      state.items = payload;
    },
    setProvince(state, payload) {
      state.province = payload;
    },
    setCity(state, payload) {
      state.city = payload;
    },
    setLogin(state, payload) {
      state.isLogin = payload;
    }
  },
  actions: {
    getItems(context) {
      axios({
        method: 'GET',
        url: 'items',
      })
        .then(({data}) => {
          console.log(data, '<<data');
          context.commit('setItems', data);
          if(localStorage.getItem('token')) {
            context.commit('setLogin', true);
          }
        })
        .catch((err) => {
          console.log(err, '<<error');
        })
    },
    getProvince(context) {
      axios({
        method: 'GET',
        url: 'users/register/province',
      })
        .then(({data}) => {
          context.commit('setProvince', data.provinsi);
        })
        .catch((err) => {
          console.log(err, '<<error');
        })
    } ,
    getCity(context, payload) {
        axios({
          method: 'GET',
          url: 'users/register/city/' + payload,
        })
        .then(({data}) => {
          // console.log(data, '<<province');
          context.commit('setCity', data.kota_kabupaten);
        })
        .catch((err) => {
          console.log(err, '<<error');
        })
    },
    register(context, payload) {
      console.log(payload)
      axios({
        method: 'POST',
        url: '/users/register',
        data: payload
      })
      .then(({data}) => {
        // console.log(data, '<<province');
        router.push({ path: '/' });
      })
      .catch((err) => {
        console.log(err, '<<error');
      })
    },
    login(context, payload) {
      console.log(payload)
      axios({
        method: 'POST',
        url: '/users/login',
        data: payload
      })
      .then(({data}) => {
        // console.log(data, '<<province');
        localStorage.setItem('token', data);
        context.commit('setLogin', true);
        router.push({ path: '/' });
      })
      .catch((err) => {
        console.log(err, '<<error');
      })
    }
  },
  modules: {
  }
})
