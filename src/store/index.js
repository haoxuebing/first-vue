import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 1,
        getStr: '123'
    },
    mutations: {
        increment(state) {
            state.count++
        },
        setStr(state, str) {
            state.getStr = str;
        }
    },
    actions: {
        GetHelloWorld({state, commit, dispatch}) {
            return new Promise(function (resolve, reject) {
                // 异步取数据
                axios.get('http://localhost:3000/test/api_test').then(res => {
                    const data = res.data;
                    commit('setStr', data);
                    resolve();
                }).catch(err => {
                    console.log(err)
                })
            })
        }
    }
})

