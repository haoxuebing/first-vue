<template>
  <div>
      <link rel="stylesheet" href="https://unpkg.com/mint-ui/lib/style.css">
    <h2>一个组件中引入另一个组件</h2>
    <input v-model="message" placeholder="edit me">
    <p>{{ message }}</p>
    <p>{{ count }}</p>
    <About :message='message'></About>
    <mt-button type="primary">primary</mt-button>
    <mt-button @click.native="handleButtonClick">Click Me</mt-button>
    <br>
    <mt-header title="多个按钮">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        <mt-button @click="handleClose">关闭</mt-button>
      </router-link>
      <mt-button icon="more" slot="right">向右</mt-button>
    </mt-header>
   <todo-item/>
  </div>
</template>


<script>
import store from '../store'
export default {
  name: 'Other',
  components: {
    About:()=>import('./About')
  },
  data () {
    return {
      message: 'Welcome to Other'
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  methods:{
     handleButtonClick: function() {
        this.$toast('Hello world!')
     },
      handleTopChange(status) {
        this.topStatus = status;
      }
  }
}
</script>


