<template>
    <div>
        <h2>去服务器端获取数据</h2>
        <input v-model="message" placeholder="edit me">
        <h1>{{ message }}</h1>
        <p>{{count}}</p>
        <mt-button type="primary" @click.native="fn1">加1</mt-button>
        <mt-button type="primary" @click.native="GetHelloWorld">发送Http请求</mt-button>
        <p>{{getStr}}</p>
    </div>
</template>


<script>
// import store from '../store'
import { mapState, mapMutations, mapActions } from "vuex";
import axios from 'axios'
export default {
  name: 'GetData',
  components: {
    About:()=>import('./About')
  },
  data () {
    return {
      message: 'Welcome to GetData'
    }
  },
  computed: {
    ...mapState(['getStr']),
    count () {
      return this.getStr//store.state.count
    }
  },
  methods:{
    ...mapActions(['GetHelloWorld']),
     fn1(){
        setTimeout(() => {
           store.commit('increment')
        }, 200)
     },
     getApiDate: function() {
        axios.get('http://localhost:3000/test/api_test').then((rlt)=>{
            this.message=rlt.data;
        })
    },

  }
}
</script>


