import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {
        GetHelloWorld(state, commit, dispatch) {
            return new Promise(function (resolve, reject) {
                // 异步取数据
                axios.get(getUserInfoHost, {
                  withCredentials: true
                }).then(res => {
                  const data = res.data;
                  commit(increment, data);
                  resolve();
                }).catch(err => {
                  console.log(err)
                })
                
              })
        }
    }
})

